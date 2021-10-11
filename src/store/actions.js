import { ref, get } from 'firebase/database';

import db from '../config/firebase';
import types from '../constants/reducer-types';

const actions = {
  sync() {
    return async dispatch => {
      const userSnap = await get(ref(db, '/users'));
      const user = userSnap.val()['1633816282006'];

      dispatch({ type: types.SET_CURRENT_USER, user });
      dispatch({ type: types.SET_SELECTED_FOLDER, folderId: 'my-notes' });

      if (user.notes) {
        const notesSnap = await Promise.all(user.notes.map(note => get(ref(db, `/notes/${note.id}`))));
        const notes = notesSnap.map(snap => snap.val()).reverse();

        dispatch({ type: types.SET_SELECTED_NOTE, noteId: notes[0].id });
        dispatch({ type: types.SET_ALL_NOTES, notes });
      }

      dispatch({ type: types.SET_APP_LOADED });
    };
  },

  selectFolder(folderId) {
    return dispatch => dispatch({ type: types.SET_SELECTED_FOLDER, folderId });
  },

  selectNote(noteId) {
    return dispatch => {
      dispatch({ type: types.HIDE_NOTE_EDITOR });
      dispatch({ type: types.SET_SELECTED_NOTE, noteId });
    };
  },

  showNoteEditor() {
    return dispatch => dispatch({ type: types.SHOW_NOTE_EDITOR });
  },

  hideNoteEditor() {
    return dispatch => dispatch({ type: types.HIDE_NOTE_EDITOR });
  },
};

export default actions;

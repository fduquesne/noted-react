import { ref, get, set } from 'firebase/database';

import store from '../store';
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
        const notes = notesSnap.map(snap => snap.val());

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

  saveNoteContent(note, content) {
    return dispatch => {
      set(ref(db, `/notes/${note.id}`), { ...note, content });
      dispatch({ type: types.SAVE_NOTE_CONTENT, noteId: note.id, content });
      dispatch({ type: types.HIDE_NOTE_EDITOR });
    };
  },

  createNote(title) {
    return dispatch => {
      const timestamp = Date.now();
      const currentUser = { ...store.getState().currentUser };
      const note = {
        id: timestamp,
        title,
        content: '',
        folder: store.getState().selectedFolder,
        updatedAt: timestamp,
        author: { name: currentUser.name, image: currentUser.image },
      };

      currentUser.notes = [{ id: note.id }, ...currentUser.notes];

      set(ref(db, `/notes/${note.id}`), note);
      set(ref(db, `/users/${currentUser.id}`), currentUser);
      dispatch({ type: types.CREATE_NOTE, currentUser, note });
      dispatch({ type: types.SET_SELECTED_NOTE, noteId: note.id });
      dispatch({ type: types.SHOW_NOTE_EDITOR });
    };
  },
};

export default actions;

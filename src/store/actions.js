import { ref, get, set } from 'firebase/database';

import store from '../store';
import db from '../config/firebase';
import types from '../constants/reducer-types';

const actions = {
  sync() {
    return async dispatch => {
      const userSnap = await get(ref(db, '/users'));
      const user = userSnap.val()['1633816282006'];

      dispatch({ type: types.SET_USER, user });
      dispatch({ type: types.SET_SELECTED_FOLDER, folderId: 'my-notes' });
      dispatch({ type: types.SET_SELECTED_NOTE, noteId: user.notes && user.notes[0].id });
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

  saveNoteContent(noteId, content) {
    return dispatch => {
      const currentUser = { ...store.getState().user };
      const notes = currentUser.notes.map(note => {
        if (note.id === noteId) return { ...note, content, updatedAt: Date.now() };
        return note;
      });

      const user = { ...currentUser, notes };
      set(ref(db, `/users/${user.id}`), user);
      dispatch({ type: types.SET_USER, user });
      dispatch({ type: types.HIDE_NOTE_EDITOR });
    };
  },

  createNote(title) {
    return dispatch => {
      const timestamp = Date.now();
      const currentUser = { ...store.getState().user };
      const note = {
        id: timestamp,
        title,
        content: '',
        updatedAt: timestamp,
        folder: store.getState().selectedFolder,
      };
      const notes = currentUser.notes ? [note, ...currentUser.notes] : [note];

      const user = { ...currentUser, notes };
      set(ref(db, `/users/${user.id}`), user);
      dispatch({ type: types.SET_USER, user });
      dispatch({ type: types.SET_SELECTED_NOTE, noteId: note.id });
      dispatch({ type: types.SHOW_NOTE_EDITOR });
    };
  },
};

export default actions;

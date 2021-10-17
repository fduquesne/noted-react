import { ref, get, set } from 'firebase/database';

import store from '../store';
import db from '../config/firebase';
import types from '../constants/reducer-types';
import popupTypes from '../constants/popup-types';

const actions = {
  sync() {
    return async dispatch => {
      const userSnap = await get(ref(db, '/users'));
      const user = userSnap.val()['1633816282006'];
      if (!user.notes) user.notes = [];
      if (!user.folders) user.folders = [];

      dispatch({ type: types.SET_USER, user });
      dispatch({ type: types.SET_SELECTED_FOLDER, folderId: 'my-notes' });
      dispatch({ type: types.SET_SELECTED_NOTE, noteId: user.notes[0] && user.notes[0].id });
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

  showCreateFolderPopup() {
    return dispatch => dispatch({ type: types.SHOW_POPUP, popup: popupTypes.CREATE_FOLDER });
  },

  showRemoveNotePopup() {
    return dispatch => dispatch({ type: types.SHOW_POPUP, popup: popupTypes.DELETE_NOTE });
  },

  showRemoveFolderPopup() {
    return dispatch => dispatch({ type: types.SHOW_POPUP, popup: popupTypes.DELETE_FOLDER });
  },

  closePopup() {
    return dispatch => dispatch({ type: types.CLOSE_POPUP });
  },

  showNoteEditor() {
    return dispatch => dispatch({ type: types.SHOW_NOTE_EDITOR });
  },

  hideNoteEditor() {
    return dispatch => dispatch({ type: types.HIDE_NOTE_EDITOR });
  },

  createFolder(name, icon) {
    return dispatch => {
      if (name !== '') {
        const id = Date.now();
        const currentUser = { ...store.getState().user };
        const folders = [...currentUser.folders, { id, name, icon }];

        const user = { ...currentUser, folders };
        set(ref(db, `/users/${user.id}`), user);
        dispatch({ type: types.SET_USER, user });
        dispatch({ type: types.SET_SELECTED_FOLDER, folderId: id });
      }

      dispatch({ type: types.CLOSE_POPUP });
    };
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

  deleteNote() {
    return dispatch => {
      const currentUser = { ...store.getState().user };
      const selectedNote = store.getState().selectedNote;
      const selectedFolder = store.getState().selectedFolder;
      const notes = currentUser.notes.filter(n => n.id !== selectedNote);
      const nextNote = notes.filter(n => n.folder === selectedFolder)[0];

      const user = { ...currentUser, notes };
      set(ref(db, `/users/${user.id}`), user);
      dispatch({ type: types.SET_USER, user });
      dispatch({ type: types.SET_SELECTED_NOTE, noteId: nextNote && nextNote.id });
      dispatch({ type: types.HIDE_NOTE_EDITOR });
      dispatch({ type: types.CLOSE_POPUP });
    };
  },

  deleteFolder() {
    return dispatch => {
      const currentUser = { ...store.getState().user };
      const selectedFolder = store.getState().selectedFolder;
      const folders = currentUser.folders.filter(f => f.id !== selectedFolder);
      const notes = currentUser.notes.map(n => {
        if (n.folder === selectedFolder) return { ...n, folder: 'my-notes' };
        return n;
      });

      const user = { ...currentUser, folders, notes };
      set(ref(db, `/users/${user.id}`), user);
      dispatch({ type: types.SET_USER, user });
      dispatch({ type: types.SET_SELECTED_FOLDER, folderId: 'my-notes' });
      dispatch({ type: types.CLOSE_POPUP });
    };
  },
};

export default actions;

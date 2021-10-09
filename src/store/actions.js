import { ref, set, get } from 'firebase/database';

import db from '../config/firebase';
import store from '../store';

const getNotesByFolder = folder => {
  const notes = store.getState().allNotes;

  if (folder.id === 'all-notes') return notes.filter(note => !note.isTrashed);
  if (folder.id === 'shared') return [];
  if (folder.id === 'trash') return notes.filter(note => note.isTrashed);

  return notes.filter(note => !note.isTrashed && note.folder === folder.id);
};

const actions = {
  sync() {
    return async dispatch => {
      const userSnap = await get(ref(db, '/users'));
      const user = userSnap.val()['1633787658'];
      dispatch({ type: 'SET_CURRENT_USER', user });

      const notesSnap = await Promise.all(user.notes.map(note => get(ref(db, `/notes/${note.id}`))));
      const notes = notesSnap.map(snap => snap.val());

      dispatch({ type: 'SET_SELECTED_NOTE', note: notes[0] });
      dispatch({ type: 'SET_ALL_NOTES', notes });
      dispatch({ type: 'SET_NOTE_LIST_TO_SHOW', notes });
    };
  },

  selectFolder(folder) {
    const notes = getNotesByFolder(folder);
    const currentSelectedNote = store.getState().selectedNote;
    const newSelectedNote = notes.length
      ? notes.find(n => currentSelectedNote && n.id === currentSelectedNote.id) || notes[0]
      : currentSelectedNote;

    return dispatch => {
      dispatch({ type: 'SET_SELECTED_FOLDER', folder });
      dispatch({ type: 'SET_NOTE_LIST_TO_SHOW', notes });
      dispatch({ type: 'SET_SELECTED_NOTE', note: newSelectedNote });
    };
  },

  selectNote(note) {
    return dispatch => dispatch({ type: 'SET_SELECTED_NOTE', note });
  },

  createNewFolder(folderName) {
    return dispatch => {
      if (folderName !== '') {
        dispatch({ type: 'ADD_NEW_FOLDER', folderName });

        const user = store.getState().currentUser;
        set(ref(db, `/users/${user.id}`), user);
      }

      dispatch({ type: 'CLOSE_POPUP' });
    };
  },

  showCreateNewFolderPopup() {
    return dispatch => dispatch({ type: 'SHOW_POPUP', popup: 'CREATE_NEW_FOLDER' });
  },

  closePopup() {
    return dispatch => dispatch({ type: 'CLOSE_POPUP' });
  },
};

export default actions;

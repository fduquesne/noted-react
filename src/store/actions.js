import { onValue, ref } from 'firebase/database';

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
    return dispatch => {
      onValue(ref(db, '/users'), snapUser => {
        const user = snapUser.val()['1633787658'];

        dispatch({ type: 'SET_CURRENT_USER', user });

        user.notes.forEach(note => {
          onValue(ref(db, `/notes/${note.id}`), snapNote => {
            dispatch({ type: 'ADD_NOTE', note: snapNote.val() });
            if (!store.getState().selectedNote.id) dispatch({ type: 'SET_SELECTED_NOTE', note: snapNote.val() });
          });
        });
      });
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
};

export default actions;

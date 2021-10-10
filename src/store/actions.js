import { ref, get } from 'firebase/database';

import db from '../config/firebase';

// const getNotesByFolder = folderId => {
//   const notes = store.getState().notes.all;

//   if (folderId === 'all-notes') return notes.filter(note => !note.isTrashed);
//   if (folderId === 'shared') return [];
//   if (folderId === 'trash') return notes.filter(note => note.isTrashed);

//   return notes.filter(note => !note.isTrashed && note.folder === folderId);
// };

const actions = {
  sync() {
    return async dispatch => {
      const userSnap = await get(ref(db, '/users'));
      const user = userSnap.val()['1633816282006'];
      dispatch({ type: 'SET_CURRENT_USER', user });
      dispatch({ type: 'SET_SELECTED_FOLDER', folderId: 'my-notes' });

      if (user.notes) {
        const notesSnap = await Promise.all(user.notes.map(note => get(ref(db, `/notes/${note.id}`))));
        const notes = notesSnap.map(snap => snap.val());

        dispatch({ type: 'SET_SELECTED_NOTE', noteId: notes[0].id });
        dispatch({ type: 'SET_ALL_NOTES', notes });
      }

      dispatch({ type: 'SET_APP_LOADED' });
    };
  },

  selectFolder(folderId) {
    return dispatch => {
      dispatch({ type: 'SET_SELECTED_FOLDER', folderId });
    };
  },
};

export default actions;

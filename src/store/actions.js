import store from '../store';

import mockedNotes from '../data/mocked-notes';
import mockedUser from '../data/mocked-user';

const getAllNotes = () => {
  return mockedUser.notes.map(note => ({ ...mockedNotes.find(({ id }) => note.id === id), folder: note.folder }));
};

const getNotesByFolderId = folderId => {
  if (folderId === 'all-notes') return getAllNotes().filter(note => !note.isTrashed);
  if (folderId === 'shared') return [];
  if (folderId === 'trash') return getAllNotes().filter(note => note.isTrashed);
  return getAllNotes().filter(note => !note.isTrashed && note.folder === folderId);
};

const actions = {
  sync() {
    const notes = getAllNotes();

    return dispatch => {
      dispatch({ type: 'SET_CURRENT_USER', user: mockedUser });
      dispatch({ type: 'SET_SELECTED_NOTE', note: notes[0] });
      dispatch({ type: 'SET_SELECTED_FOLDER', folderId: 'all-notes' });
      dispatch({ type: 'SET_NOTE_LIST', notes });

      dispatch({ type: 'SET_APP_LOADED' });
    };
  },
  selectFolder(folderId) {
    const notes = getNotesByFolderId(folderId);
    const currentSelectedNote = store.getState().selectedNote;
    const newSelectedNote = notes.find(n => currentSelectedNote && n.id === currentSelectedNote.id) || notes[0];

    return dispatch => {
      dispatch({ type: 'SET_SELECTED_FOLDER', folderId });
      dispatch({ type: 'SET_NOTE_LIST', notes });
      dispatch({ type: 'SET_SELECTED_NOTE', note: newSelectedNote });
    };
  },
  selectNote(note) {
    return dispatch => dispatch({ type: 'SET_SELECTED_NOTE', note });
  },
};

export default actions;

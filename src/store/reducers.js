import types from '../constants/reducer-types';

const reducers = {
  [types.SET_APP_LOADED](state) {
    return { ...state, app: { ...state.app, isLoaded: true } };
  },
  [types.SET_CURRENT_USER](state, { user }) {
    return { ...state, currentUser: user };
  },
  [types.SET_SELECTED_FOLDER](state, { folderId }) {
    return { ...state, selectedFolder: folderId };
  },
  [types.SET_SELECTED_NOTE](state, { noteId }) {
    return { ...state, notes: { ...state.notes, selected: noteId } };
  },
  [types.SET_ALL_NOTES](state, { notes }) {
    return { ...state, notes: { ...state.notes, all: notes } };
  },
  [types.SHOW_NOTE_EDITOR](state) {
    return { ...state, app: { ...state.app, showNoteEditor: true } };
  },
  [types.HIDE_NOTE_EDITOR](state) {
    return { ...state, app: { ...state.app, showNoteEditor: false } };
  },
  [types.SAVE_NOTE_CONTENT](state, { noteId, content }) {
    const notes = state.notes.all.map(n => {
      if (n.id !== noteId) return n;
      return { ...n, content };
    });

    return { ...state, notes: { ...state.notes, all: notes } };
  },
  [types.CREATE_NOTE](state, { currentUser, note }) {
    return { ...state, currentUser, notes: { ...state.notes, all: [note, ...state.notes.all] } };
  },
};

export default reducers;

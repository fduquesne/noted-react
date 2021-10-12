import types from '../constants/reducer-types';

const reducers = {
  [types.SET_APP_LOADED](state) {
    return { ...state, app: { ...state.app, isLoaded: true } };
  },
  [types.SET_USER](state, { user }) {
    return { ...state, user };
  },
  [types.SET_SELECTED_FOLDER](state, { folderId }) {
    return { ...state, selectedFolder: folderId };
  },
  [types.SET_SELECTED_NOTE](state, { noteId }) {
    return { ...state, selectedNote: noteId };
  },
  [types.SHOW_POPUP](state, { popup }) {
    return { ...state, app: { ...state.app, currentPopup: popup } };
  },
  [types.CLOSE_POPUP](state) {
    return { ...state, app: { ...state.app, currentPopup: undefined } };
  },
  [types.SHOW_NOTE_EDITOR](state) {
    return { ...state, app: { ...state.app, showNoteEditor: true } };
  },
  [types.HIDE_NOTE_EDITOR](state) {
    return { ...state, app: { ...state.app, showNoteEditor: false } };
  },
};

export default reducers;

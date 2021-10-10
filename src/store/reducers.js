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
};

export default reducers;

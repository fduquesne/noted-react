const reducers = {
  SET_CURRENT_USER(state, { user }) {
    return { ...state, currentUser: user };
  },
  SET_SELECTED_FOLDER(state, { folderId }) {
    return { ...state, selectedFolder: folderId };
  },
  SET_SELECTED_NOTE(state, { note }) {
    return { ...state, selectedNote: note };
  },
  SET_NOTE_LIST(state, { notes }) {
    return { ...state, noteList: notes };
  },
  SET_APP_LOADED(state) {
    return { ...state, app: { ...state.app, isLoaded: true } };
  },
};

export default reducers;

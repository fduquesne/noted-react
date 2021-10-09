const reducers = {
  SET_CURRENT_USER(state, { user }) {
    return { ...state, currentUser: user };
  },
  SET_SELECTED_FOLDER(state, { folder }) {
    return { ...state, selectedFolder: folder };
  },
  SET_SELECTED_NOTE(state, { note }) {
    return { ...state, selectedNote: note };
  },
  SET_ALL_NOTES(state, { notes }) {
    return { ...state, allNotes: notes };
  },
  SET_NOTE_LIST_TO_SHOW(state, { notes }) {
    return { ...state, noteListToShow: notes };
  },
  ADD_NEW_FOLDER(state, { folderName }) {
    const folders = state.currentUser.folders || [];
    return {
      ...state,
      currentUser: { ...state.currentUser, folders: [...folders, { id: Date.now(), name: folderName }] },
    };
  },
  SHOW_POPUP(state, { popup }) {
    return { ...state, currentPopup: popup };
  },
  CLOSE_POPUP(state) {
    return { ...state, currentPopup: undefined };
  },
};

export default reducers;

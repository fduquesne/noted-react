const reducers = {
  SET_APP_LOADED(state) {
    return { ...state, app: { ...state.app, isLoaded: true } };
  },
  SET_CURRENT_USER(state, { user }) {
    return { ...state, currentUser: user };
  },
  SET_SELECTED_FOLDER(state, { folderId }) {
    return { ...state, selectedFolder: folderId };
  },
  SET_SELECTED_NOTE(state, { noteId }) {
    return { ...state, notes: { ...state.notes, selected: noteId } };
  },
  SET_ALL_NOTES(state, { notes }) {
    return { ...state, notes: { ...state.notes, all: notes } };
  },
  ADD_NEW_FOLDER(state, { folderName }) {
    const folders = state.currentUser.folders || [];
    return {
      ...state,
      currentUser: { ...state.currentUser, folders: [...folders, { id: Date.now(), name: folderName }] },
    };
  },
  ADD_NEW_NOTE(state, { note }) {
    return {
      ...state,
      notes: { ...state.notes, all: [...state.notes.all, note], selected: note },
      currentUser: {
        ...state.currentUser,
        notes: state.currentUser.notes ? [...state.currentUser.notes, { id: note.id }] : [{ id: note.id }],
      },
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

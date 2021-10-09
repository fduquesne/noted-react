const reducers = {
  SET_APP_LOADED(state) {
    return { ...state, isAppLoaded: true };
  },
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
  ADD_NEW_NOTE(state, { note }) {
    return {
      ...state,
      allNotes: [...state.allNotes, note],
      noteListToShow: [...state.noteListToShow, note],
      selectedNote: note,
      currentUser: {
        ...state.currentUser,
        notes: state.currentUser.notes ? [...state.currentUser.notes, { id: note.id }] : [{ id: note.id }],
      },
    };
  },
  DELETE_NOTE(state, { noteId }) {
    return {
      ...state,
      allNotes: state.allNotes.filter(n => n.id !== noteId),
      noteListToShow: state.noteListToShow.filter(n => n.id !== noteId),
      selectedNote: undefined,
      currentUser: {
        ...state.currentUser,
        notes: state.currentUser.notes.filter(n => n.id !== noteId),
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

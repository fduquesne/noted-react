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
  ADD_NOTE(state, { note }) {
    return { ...state, allNotes: [...state.allNotes, note], noteListToShow: [...state.noteListToShow, note] };
  },
  SET_NOTE_LIST_TO_SHOW(state, { notes }) {
    return { ...state, noteListToShow: notes };
  },
};

export default reducers;

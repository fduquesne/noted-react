const state = {
  currentPopup: '',
  currentUser: undefined,
  selectedFolder: 'all-notes',
  notes: {
    all: [],
    selected: '',
  },
  app: {
    isLoaded: false,
    showNoteEditor: false,
  },
};

export default state;

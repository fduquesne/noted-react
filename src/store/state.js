const state = {
  user: undefined,
  selectedFolder: 'all-notes',
  selectedNote: undefined,
  app: {
    isLoaded: false,
    showNoteEditor: false,
    showTagsInput: false,
    tagsValue: '',
    currentPopup: undefined,
  },
};

export default state;

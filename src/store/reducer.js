import reducers from './reducers';

const reducer = (state, action) => {
  if (reducers[action.type]) return reducers[action.type](state, action);
  return state;
};

export default reducer;

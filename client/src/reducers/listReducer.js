export default(state={
  loading: false,
  lists: [],
  movies:[]
}, action) => {
  switch (action.type) {
    case 'LOADING':
      return Object.assign({}, state, {loading:true});
    case 'FETCH_LISTS':
      return Object.assign({}, state, {loading:false, lists: action.payload});
    default:
      return state;
  }
}

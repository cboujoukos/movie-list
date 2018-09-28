export default(state={
  loading: false,
  lists: [],
  movies:[],
  singleList: {}
}, action) => {
  switch (action.type) {
    case 'LOADING':
      return Object.assign({}, state, {loading:true});
    case 'FETCH_LISTS':
      return Object.assign({}, state, {loading:false, lists: action.payload});
    case 'FETCH_SINGLE_LIST':
      return Object.assign({}, state, {loading: false, singleList: action.payload.list, movies: action.payload.movies});
    case 'FETCH_MOVIES':
      return Object.assign({}, state, {loading: false, movies: action.payload})
    default:
      return state;
  }
}

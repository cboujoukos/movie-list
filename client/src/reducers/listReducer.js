export default(state={
  loading: false,
  user_id: '',
  lists: [],
  movies:[],
  singleList: {},
  singleMovie: {}
}, action) => {
  switch (action.type) {
    case 'LOADING':
      return Object.assign({}, state, {loading:true});
    case 'FETCH_LISTS':
      return Object.assign({}, state, {loading:false, lists: action.payload.lists, user_id: action.payload.user_id});
    case 'FETCH_SINGLE_LIST':
      return Object.assign({}, state, {loading: false, singleList: action.payload.list, movies: action.payload.movies});
    case 'FETCH_MOVIES':
      return Object.assign({}, state, {loading: false, movies: action.payload, singleList: {}});
    case 'FETCH_SINGLE_MOVIE':
      return Object.assign({}, state, {loading: false, singleMovie: action.payload});
    default:
      return state;
  }
}

import fetch from 'isomorphic-fetch';

export function fetchLists(){
  return (dispatch) => {
    dispatch({type: 'LOADING'});
    let token = "Bearer " + localStorage.getItem("jwt")
    return fetch('/api/lists', {
      method: 'GET',
      headers: {
        'Authorization': token
      }
    })
    .then((rsp) => rsp.json())
    // .then(json => {debugger})
    // .then(json => json.data)
    .then(lists => dispatch({type: 'FETCH_LISTS', payload: lists}))
  }
}

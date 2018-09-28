import fetch from 'isomorphic-fetch';
import History from '../utils/History'

export function fetchLists(){
  return (dispatch) => {
    dispatch({type: 'LOADING'});
    let token = "Bearer " + localStorage.getItem("jwt");
    return fetch('/api/lists', {
      method: 'GET',
      headers: {
        'Authorization': token
      }
    })
    .then((rsp) => rsp.json())
    .then(lists => dispatch({type: 'FETCH_LISTS', payload: lists}))
  }
}

export function fetchSingleList(listId){
  return (dispatch) => {
    dispatch({type: 'LOADING'});
    let token = "Bearer " + localStorage.getItem("jwt");
    return fetch(`/api/lists/${listId}`, {
      method: 'GET',
      headers: {
        'Authorization': token
      }
    })
    .then((rsp) => rsp.json())
    // .then(json => {debugger})
    .then(json => dispatch({type: 'FETCH_SINGLE_LIST', payload: json}))
    // .then(() => {debugger})
    .then(() => {History.push(`/${listId}`)})
  }
}

export function fetchMovies(){
  return (dispatch) => {
    dispatch({type: 'LOADING'});
    let token = "Bearer " + localStorage.getItem("jwt");
    return fetch(`/api/movies`, {
      method: 'GET',
      headers: {
        'Authorization': token
      }
    })
    .then(rsp => rsp.json())
    .then(json => dispatch({type: 'FETCH_MOVIES', payload: json}))
  }
}

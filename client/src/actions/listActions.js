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
    // .then(json => {debugger})
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
    .then((rsp) => {History.push(`/${listId}`)})
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
    // .then(json => {debugger})
    .then(json => dispatch({type: 'FETCH_MOVIES', payload: json}))
  }
}

export function addNewList(name){
  return (dispatch) => {
    let token = "Bearer " + localStorage.getItem("jwt");
    // debugger;
    return fetch(`/api/lists`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify({list: {name: name}})
    })
    .then(rsp => rsp.json())
    .then(json=> dispatch(fetchLists()))
  }
}

export function addNewListWithMovie(name, movie){
  return (dispatch) => {
    let token = "Bearer " + localStorage.getItem("jwt");

    return fetch(`/api/new_list_with_movie/${movie.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify({list: {name: name}})
    })
    .then(rsp => rsp.json())
    .then(json=> dispatch(fetchLists()))
  }
}

export function addMovieToList(movie, list){
  return (dispatch) => {
    let token = "Bearer " + localStorage.getItem("jwt");
    return fetch(`api/add_movie/${movie.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify({list: list})
    })
    .then(rsp => rsp.json())
    .then(json=> dispatch(fetchLists()))
  }
}

export function addRatingToMovie(movie, rating){
  return (dispatch) => {
    let token = "Bearer " + localStorage.getItem("jwt");
    return fetch(`api/movie_rating/${movie.movie.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify({movie: {rating: rating}})
    })
    .then(rsp => rsp.json())
  }
}

export function removeMovieFromList(movie_id, list_id){
  return (dispatch) => {
    let token = "Bearer " + localStorage.getItem("jwt");
    return fetch(`api/lists/${list_id}/${movie_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    })
    // .then(()=> {debugger})
    .then(() => dispatch(fetchSingleList(list_id)))
  }
}

export function deleteList(list_id){
  return (dispatch) => {
    let token = "Bearer " + localStorage.getItem("jwt");
    return fetch(`api/lists/${list_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    })

    .then((rsp) => {History.push(`/`)})
  }
}

export function searchForMovie(title){
  return dispatch => {
    let token = "Bearer " + localStorage.getItem("jwt");
    return fetch(`/api/search?q=${title}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    })
    .then(rsp => rsp.json())
    // .then((json)=> {debugger})
    .then(json => dispatch({type: 'FETCH_MOVIES', payload: json}))
    // .then(()=>History.push(`/search`))

    .then(()=> History.push(`/movies`))
  }
}

export function fetchSingleMovie(id){
  return dispatch => {
    dispatch({type: 'LOADING'});
    let token = "Bearer " + localStorage.getItem("jwt");
    return fetch(`/api/movies/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    })
    .then(rsp => rsp.json())
    .then(json => dispatch({type: 'FETCH_SINGLE_MOVIE', payload: json}))
    .then(()=> History.push(`/movies/${id}`))
  }
}

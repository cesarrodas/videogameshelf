export default function gamesReducer(state={
  games: [],
  fetching: false,
  fetched: false,
  error: null
}, action) {

  switch (action.type) {
    case 'FETCH_GAMES_PENDING': {
      return {...state, fetching: true}
    }
    case 'FETCH_GAMES_REJECTED': {
      return {...state, fetching: false, error: action.payload}
    }
    case 'FETCH_GAMES_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        games: action.payload
      }
    }
    case 'ADD_GAME_PENDING': {
      return {...state, fetching: true}
    }
    case 'ADD_GAME_REJECTED': {
      return {...state, fetching: false, error: action.payload}
    }
    case 'ADD_GAME_FULFILLED': {
      return {...state, fetching: false}
    }
    case 'UPDATE_GAME_PENDING': {
      return {...state, fetching: true}
    }
    case 'UPDATE_GAME_REJECTED': {
      return {...state, fetching: false, error: action.payload}
    }
    case 'UPDATE_GAME_FULFILLED': {
      return {...state, fetching: false}
    }
    case 'DELETE_GAME_PENDING': {
      return {...state, fetching: true}
    }
    case 'DELETE_GAME_REJECTED': {
      return {...state, fetching: false, error: action.payload}
    }
    case 'DELETE_GAME_FULFILLED': {
      return {...state, fetching: false}
    }
  }
  return state
}

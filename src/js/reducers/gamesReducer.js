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
    case 'ADD_GAME': {
      return {
        ...state,
        games: [...state.games, action.payload]
      }
    }
    case 'UPDATE_GAME': {
      const { _id,title, description, img } = action.payload;
      const newGames = [...state.games]
      const gameToUpdate = newGames.findIndex(game => game._id === _id);
      newGames[gameToUpdate] = action.payload;

      return {
        ...state,
        games: newGames
      }
    }
    case 'DELETE_GAME': {
      return {
        ...state,
        games: state.games.filter(game => game._id !== action.payload)
      }
    }
  }
  return state
}

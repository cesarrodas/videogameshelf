export const FETCH_GAMES = 'FETCH_GAMES';
export const FETCH_GAMES_REJECTED = 'FETCH_GAMES_REJECTED';
export const FETCH_TWEETS_FULFILLED = 'FETCH_TWEETS_FULFILLED';
export const ADD_GAME = 'ADD_GAME';
export const UPDATE_GAME = 'UPDATE_GAME';
export const DELETE_GAME = 'DELETE_GAME';

//https://gamecollection.now.sh/games
export const fetchGames = () => ({
  type: FETCH_GAMES,
  payload: fetch('http://localhost:3000/games')
    .then(res => res.json())
    .catch(err => console.log(err))
});

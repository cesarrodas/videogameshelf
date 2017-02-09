export const FETCH_GAMES = 'FETCH_GAMES';
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

export const addGame = (newGame) => ({
  type: ADD_GAME,
  payload: fetch('http://localhost:3000/games', {
    method: "POST",
    headers: new Headers({'content-type': 'application/json'}),
    body: newGame
  })
});

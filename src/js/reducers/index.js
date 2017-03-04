import { combineReducers } from 'redux';

import games from "./gamesReducer";
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  games
});

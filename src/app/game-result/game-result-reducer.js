import {GAME_WON, GAME_LOST} from './game-result-actions';
import GameResult from './game-result-state';

export default (state = GameResult.initialState(), action)=> {
  switch(action.type){
    case GAME_WON :
      return GameResult.onSuccess(state, action.planetName);

    case GAME_LOST :
      return GameResult.onFailure(state);

    default:
      return state;
  }
};
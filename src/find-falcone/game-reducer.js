import {GAME_WON, GAME_LOST, GAME_RESULT_LOADING, GAME_RESTARTED} from './game-actions';
import GameResult from './game-state';

export default (state = GameResult.initialState(), action)=> {
  switch(action.type){

    case GAME_RESTARTED :
      return GameResult.restart(state);

    case GAME_RESULT_LOADING :
      return GameResult.loadingResult(state);

    case GAME_WON :
      return GameResult.onSuccess(state, action.payload);

    case GAME_LOST :
      return GameResult.onFailure(state);

    default:
      return state;
  }
};
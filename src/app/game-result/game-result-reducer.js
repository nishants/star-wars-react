import {GAME_WON, GAME_LOST, GAME_RESULT_LOADING, GAME_RESTARTED} from './game-result-actions';
import GameResult from './game-result-state';

export default (state = GameResult.initialState(), action)=> {
  switch(action.type){

    case GAME_RESTARTED :
      return GameResult.restart(state);

    case GAME_RESULT_LOADING :
      return GameResult.loadingResult(state);

    case GAME_WON :
      return GameResult.onSuccess(state, action.planetName);

    case GAME_LOST :
      return GameResult.onFailure(state);

    default:
      return state;
  }
};
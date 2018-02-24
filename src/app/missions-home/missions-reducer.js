import Missions from './missions-state';
import {REMOVE_MISSION} from './missions-actions';

export default (state = Missions.initialState(), action)=> {
  switch(action.type){

    case REMOVE_MISSION:
      return Missions.remove(state, action.missionId);

    default :
      return state;
  }
};
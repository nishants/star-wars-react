import Missions from './missions-state';
import {REMOVE_MISSION, ADD_MISSION} from './missions-actions';

export default (state = Missions.initialState(), action)=> {
  switch(action.type){

    case ADD_MISSION:
      return Missions.add(state, action.planet, action.vehicle);

    case REMOVE_MISSION:
      return Missions.remove(state, action.missionId);

    default :
      return state;
  }
};
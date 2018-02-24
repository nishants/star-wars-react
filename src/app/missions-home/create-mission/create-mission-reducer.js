import {CREATE_NEW_MISSION, CANCEL_CREATING_MISSION, SELECT_PLANET, SELECT_VEHICLE} from './create-mission-actions';

import CreateMission from './create-mission-state';

export default (state = CreateMission.initialState(), action )=> {
  switch(action.type){

    case CREATE_NEW_MISSION:
      return CreateMission.showMenu(state);

    case CANCEL_CREATING_MISSION:
      return CreateMission.cancelAndClose(state);

    case SELECT_PLANET:
      return CreateMission.selectPlanet(state);

    case SELECT_VEHICLE:
      return CreateMission.cancelAndClose(state);

    default:
      return state;
  }
}
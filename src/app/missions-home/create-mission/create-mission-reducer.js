import {CREATE_NEW_MISSION, CANCEL_CREATING_MISSION} from './create-mission-actions';

import CreateMission from './create-mission-state';

export default (state = CreateMission.initialState(), action )=> {
  switch(action.type){

    case CREATE_NEW_MISSION:
      return CreateMission.showMenu();

    case CANCEL_CREATING_MISSION:
      return CreateMission.cancelAndClose();

    default:
      return state;
  }
}
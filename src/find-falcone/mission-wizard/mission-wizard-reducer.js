import {CREATE_NEW_MISSION, CANCEL_CREATING_MISSION, SELECT_PLANET, SELECT_VEHICLE} from './mission-wizard-actions';

import MissionWizard from './mission-wizard-state';

export default (state = MissionWizard.initialState(), action )=> {
  switch(action.type){

    case CREATE_NEW_MISSION:
      return MissionWizard.showMenu(state);

    case CANCEL_CREATING_MISSION:
      return MissionWizard.cancelAndClose(state);

    case SELECT_PLANET:
      return MissionWizard.selectPlanet(state, action.planet);

    case SELECT_VEHICLE:
      return MissionWizard.cancelAndClose(state);

    default:
      return state;
  }
}
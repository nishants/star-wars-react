import {combineReducers}  from 'redux';

import helpModal          from './find-falcone/help-modal/help-modal-reducer';
import missions           from './find-falcone/missions/missions-reducer';
import planets            from './find-falcone/planets/planets-reducer';
import vehicles           from './find-falcone/vehicles/vehicles-reducer';
import createMission      from './find-falcone/mission-wizard/mission-wizard-reducer';
import gameResult         from './find-falcone/game-reducer';

export default combineReducers({
  helpModal,
  missions,
  planets,
  vehicles,
  createMission,
  gameResult
});
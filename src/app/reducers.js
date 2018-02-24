import {combineReducers} from 'redux';
import helpModal from './help-modal/help-modal-reducer';
import missions  from './missions-home/missions-reducer';
import planets  from './planets/planets-reducer';
import vehicles  from './vehicles/vehicles-reducer';
import createMission  from './missions-home/create-mission/create-mission-reducer';

export default combineReducers({
  helpModal,
  missions,
  planets,
  vehicles,
  createMission
});
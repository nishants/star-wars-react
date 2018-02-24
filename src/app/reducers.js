import {combineReducers} from 'redux';
import helpModal from './help-modal/help-modal-reducer';
import missions  from './missions-home/missions-reducer';
import planets  from './planets/planets-reducer';

export default combineReducers({
  helpModal,
  missions,
  planets
});
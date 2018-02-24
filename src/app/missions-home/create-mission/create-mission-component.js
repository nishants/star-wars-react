import React from 'react';
import {connect} from 'react-redux';
import SelectPlanets from './select-planets/select-planets-component';
import SelectVehicles from './select-vehicles/select-vehicles-component.js';
import {CREATE_NEW_MISSION, CANCEL_CREATING_MISSION, selectPlanet} from './create-mission-actions'

const MissionsWidget = ({menu, createMission, cancelCreatingMission, selectPlanet})=> {
  const widgetState = `${menu.showMenu ? 'create' : ''} ${menu.showVehicleMenu ? 'vehicle' : ''} `;
  return (
      <div id='missions-widget' className={widgetState}>
        <div className='backdrop' onClick={cancelCreatingMission}></div>
        <div className='actions'>
          <button className='create' onClick={createMission}>Create a mission</button>
          <button className='cancel' onClick={cancelCreatingMission}>Cancel</button>
        </div>
        <div className='menu'>
          <div className='sub-menu select-planet'>
            <label> 1. Select Planet</label>
            <SelectPlanets onSelect={selectPlanet}/>
          </div>
          <div className='sub-menu select-vehicle'>
            <label> 2. Select Vehicle</label>
            <SelectVehicles onSelect={selectPlanet}/>
          </div>
        </div>
      </div>
  )
};

const mapStateToProps = ({createMission})=> ({menu: createMission});

const mapDispatchToProps = (dispatch)=> ({
  createMission: ()=> dispatch({type: CREATE_NEW_MISSION}),
  cancelCreatingMission: ()=> dispatch({type: CANCEL_CREATING_MISSION}),
  selectPlanet: planet => dispatch(selectPlanet(planet))
});

export default connect(mapStateToProps, mapDispatchToProps)(MissionsWidget);
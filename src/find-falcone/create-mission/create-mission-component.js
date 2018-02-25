import React from 'react';
import {connect} from 'react-redux';
import SelectPlanets from './select-planets/select-planets-component';
import SelectVehicles from './select-vehicles/select-vehicles-component.js';
import {CREATE_NEW_MISSION, CANCEL_CREATING_MISSION, selectPlanet, selectVehicle} from './create-mission-actions'
import {createMission, sendMissions} from '../missions-home/missions-actions'
import {assignPlanet} from '../planets/planets-actions';
import {assignVehicle} from '../vehicles/vehicles-actions';
import Help from './create-mission-help';
import {maxMissions} from '../../config';

const MissionsWidget = ({
    menu, openMenu, cancelCreatingMission,
    selectPlanet, sendMission, missions,
    dispatchMissions, maxMissions, remainingMissions})=> {
  const
      widgetState = `${menu.showMenu ? 'create' : ''} ${menu.showVehicleMenu ? 'vehicle' : ''} `,
      message = Help.message(missions.length, remainingMissions),
      nextMove = remainingMissions ? openMenu : () => dispatchMissions(missions);

  return (
      <div id='missions-widget' className={widgetState}>
        <div className='backdrop' onClick={cancelCreatingMission}></div>
        <div className='actions'>
          <button className='create' onClick={nextMove}>{message}</button>
          <button className='cancel' onClick={cancelCreatingMission}>Cancel</button>
        </div>
        <div className='menu'>
          <div className='sub-menu select-planet'>
            <label> 1. Select Planet</label>
            <SelectPlanets onSelect={selectPlanet}/>
          </div>
          <div className='sub-menu select-vehicle'>
            <label> 2. Select Vehicle</label>
            <SelectVehicles planet={menu.selectedPlanet} onSelect={(vehicle) => sendMission (menu.selectedPlanet, vehicle)}/>
          </div>
          {
            menu.selectedPlanet && (
                <div className='selected-planet' onClick={openMenu}>
                  <label>{menu.selectedPlanet.name}</label>
                  <label className='fa fa-caret-down'></label>
                </div>
            )
          }
        </div>
      </div>
  )
};

const mapStateToProps = ({createMission, missions})=> ({
  menu: createMission,
  missions,
  remainingMissions: maxMissions - missions.length }
);

const mapDispatchToProps = (dispatch)=> ({
  openMenu: ()=> dispatch({type: CREATE_NEW_MISSION}),
  cancelCreatingMission: ()=> dispatch({type: CANCEL_CREATING_MISSION}),
  selectPlanet: planet => dispatch(selectPlanet(planet)),
  sendMission: (planet, vehicle) => {
    dispatch(selectVehicle(planet))
    dispatch(assignPlanet(planet));
    dispatch(assignVehicle( vehicle));
    dispatch(createMission(planet, vehicle));
    dispatch({type: CANCEL_CREATING_MISSION});
  },
  dispatchMissions: missions=>  sendMissions(missions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MissionsWidget);
import React from 'react';
import {connect} from 'react-redux';

import SelectPlanets  from './select-planets/select-planets-component';
import SelectVehicles from './select-vehicles/select-vehicles-component';
import WizardButton   from './wizard-button/wizard-button-component';

import {CREATE_NEW_MISSION, CANCEL_CREATING_MISSION, selectPlanet, selectVehicle} from './create-mission-actions'
import {createMission} from '../missions-home/missions-actions'
import {assignPlanet} from '../planets/planets-actions';
import {assignVehicle} from '../vehicles/vehicles-actions';

const MissionsWidget = ({
    wizardStep,
    selectedPlanet,
    openMenu,
    cancelCreatingMission,
    selectPlanet,
    sendMission})=> {
  return (
      <div id='missions-widget' className={wizardStep}>
        <div className='backdrop' onClick={cancelCreatingMission}></div>
        <WizardButton/>
        <div className='menu'>
          <SelectPlanets onSelect={selectPlanet}/>
          <SelectVehicles planet={selectedPlanet} onSelect={(vehicle) => sendMission (selectedPlanet, vehicle)}/>
          {
            !selectedPlanet && (
                <div className='selected-planet' onClick={openMenu}>
                  <label>{selectedPlanet ? selectedPlanet.name : ''}</label>
                  <label className='fa fa-caret-down'></label>
                </div>
            )
          }
        </div>
      </div>
  )
};

const mapStateToProps = ({createMission, missions})=> ({
  selectedPlanet   : createMission.selectedPlanet,
  wizardStep       : `${createMission.showMenu ? 'create' : ''} ${createMission.showVehicleMenu ? 'vehicle' : ''} `
});

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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MissionsWidget);
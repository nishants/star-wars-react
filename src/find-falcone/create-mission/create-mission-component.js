import React      from 'react';
import {connect}  from 'react-redux';

import SelectPlanets  from './select-planets/select-planets-component';
import SelectVehicles from './select-vehicles/select-vehicles-component';
import WizardButton   from './wizard-button/wizard-button-component';

import {sendMission, createNewMission, cancelCreatingMission, selectPlanet} from './create-mission-actions'

const MissionsWidget = ({
    wizardStep,
    selectedPlanet,
    openMenu,
    cancelCreatingMission,
    selectPlanet,
    sendMission})=> (

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
);

const mapStateToProps = ({createMission, missions})=> ({
  selectedPlanet   : createMission.selectedPlanet,
  wizardStep       : `${createMission.showMenu ? 'create' : ''} ${createMission.showVehicleMenu ? 'vehicle' : ''} `
});

const mapDispatchToProps = (dispatch)=> ({
  openMenu: ()=> dispatch(createNewMission()),
  cancelCreatingMission: ()=> dispatch(cancelCreatingMission()),
  selectPlanet: planet => dispatch(selectPlanet(planet)),
  sendMission: (planet, vehicle) => {
    sendMission(dispatch, planet, vehicle);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MissionsWidget);
import React from 'react';
import {connect} from 'react-redux';
import SelectPlanets from './select-planets/select-planets-component';
import {CREATE_NEW_MISSION, CANCEL_CREATING_MISSION} from './create-mission-actions'

const MissionsWidget = ({menu, createMission, cancelCreatingMission})=> (
    <div id='missions-widget' className={menu.showMenu ? 'create': ''}>
      <div className='backdrop' onClick={cancelCreatingMission}></div>
      <div className='actions'>
        <button className='create' onClick={createMission}>Create a mission</button>
        <button className='cancel' onClick={cancelCreatingMission}>Cancel</button>
      </div>
      <div className='menu'>
        <div className='sub-menu select-planet'>
          <label> 1. Select Planet</label>
          <SelectPlanets/>
        </div>
      </div>
    </div>
);

const mapStateToProps = ({createMission})=> ({menu: createMission});

const mapDispatchToProps = (dispatch)=> ({
  createMission: ()=> dispatch({type: CREATE_NEW_MISSION}),
  cancelCreatingMission: ()=> dispatch({type: CANCEL_CREATING_MISSION})
});

export default connect(mapStateToProps, mapDispatchToProps)(MissionsWidget);
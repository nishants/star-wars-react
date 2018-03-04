import React from 'react';
import {connect} from 'react-redux';

import {CREATE_NEW_MISSION, CANCEL_CREATING_MISSION,} from '../mission-wizard-actions'
import { sendMissions} from '../../missions/missions-actions'
import Help from '../mission-wizard-help';
import {maxMissions} from '../../../config';

const WizardButton = ({
    message,
    remainingMissions,
    missions,
    openMenu,
    cancelCreatingMission,
    dispatchMissions})=> {
  const
      nextMove = remainingMissions ? openMenu : () => dispatchMissions(missions);
  return (
      <div className='actions'>
        <button className='create' onClick={nextMove}>{message}</button>
        <button className='cancel' onClick={cancelCreatingMission}>Cancel</button>
      </div>
  )
};

const mapStateToProps = ({createMission, missions})=> ({
  remainingMissions: maxMissions - missions.length,
  message          : Help.message(missions.length, maxMissions - missions.length),
  missions
});

const mapDispatchToProps = (dispatch)=> ({
  openMenu: ()=> dispatch({type: CREATE_NEW_MISSION}),
  cancelCreatingMission: ()=> dispatch({type: CANCEL_CREATING_MISSION}),
  dispatchMissions: missions=>  sendMissions(missions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(WizardButton);
import React from 'react';
import HelpButton from './help-button/help-buttton-component';
import CreateMissions from './create-mission/create-mission-component';

const MissionsHome = () => {
  return (
      <div id='missions-home'>
        <HelpButton/>
        <CreateMissions/>
      </div>);
}


export default MissionsHome;
import React from 'react';
import HelpButton from './help-button/help-buttton-component';
import CreateMissions from './create-mission/create-mission-component';
import ListMissions from './list-missions/list-missions-component';
import GameProgress from './game-progress/game-progress-component';

const MissionsHome = () => {
  return (
      <div id='missions-home'>
        <HelpButton/>
        <CreateMissions/>
        <GameProgress/>
        <ListMissions/>
      </div>);
}


export default MissionsHome;
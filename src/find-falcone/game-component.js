import React      from 'react';
import {connect}  from 'react-redux';

import Background     from './background/star-world-background';
import HelpModal      from './help-modal/help-modal-component';
import GameResult     from './game-result/game-result-component';
import HelpButton     from './help-button/help-buttton-component';
import CreateMissions from './create-mission/create-mission-component';
import ListMissions   from './list-missions/list-missions-component';
import GameProgress   from './game-progress/game-progress-component';

import {loadPlanets}    from './planets/planets-actions';
import {fetchVehicles, vehiclesFetched}  from './vehicles/vehicles-actions';

const Game = ({loadPlanets, fetchVehicles})=> {
  loadPlanets();
  fetchVehicles();
  return (
      <div id='app'>
        <Background/>
        <div id="main-content">
          <HelpModal/>
          <div id='missions-home'>
            <HelpButton/>
            <CreateMissions/>
            <GameProgress/>
            <ListMissions/>
          </div>
          <GameResult/>
        </div>
      </div>
  );
};

const mapDispatchToProps = (dispatch)=> {
  const onVehiclesFetched = data=> dispatch(vehiclesFetched(data));
  return {
    loadPlanets: ()=> loadPlanets(dispatch),
    fetchVehicles: ()=> dispatch(fetchVehicles).then(onVehiclesFetched)
  };
};

export default connect(null, mapDispatchToProps)(Game);
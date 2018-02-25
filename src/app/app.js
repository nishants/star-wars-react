import React from 'react';
import Background from './components/background/star-world-background';
import HelpModal  from './help-modal/help-modal-component';
import MissionsHome  from './missions-home/mission-home-component';
import GameResult  from './game-result/game-result-component';
import {fetchPlanets, planetsFetched}  from './planets/planets-actions';
import {fetchVehicles, vehiclesFetched}  from './vehicles/vehicles-actions';
import {connect}  from 'react-redux';

const App = ({fetchPlanets, fetchVehicles})=> {
  fetchPlanets();
  fetchVehicles();
  return (
      <div id='app'>
        <Background/>
        <div id="main-content">
          <HelpModal/>
          <MissionsHome/>
          <GameResult/>
        </div>
      </div>
  );
};

const mapDispatchToProps = (dispatch)=> {
  const onPlanetsFetched = data=> dispatch(planetsFetched(data));
  const onVehiclesFetched = data=> dispatch(vehiclesFetched(data));
  return {
    fetchPlanets: ()=> dispatch(fetchPlanets).then(onPlanetsFetched),
    fetchVehicles: ()=> dispatch(fetchVehicles).then(onVehiclesFetched)
  };
};

export default connect(null, mapDispatchToProps)(App);
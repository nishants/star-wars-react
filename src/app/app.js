import React from 'react';
import Background from './components/background/star-world-background';
import HelpModal  from './help-modal/help-modal-component';
import MissionsHome  from './missions-home/mission-home-component';
import {fetchPlanets, planetsFetched}  from './planets/planets-actions';
import {connect}  from 'react-redux';

const App = ({fetchPlanets})=> {
  fetchPlanets();
  return (
      <div id='app'>
        <Background/>
        <div id="main-content">
          <HelpModal/>
          <MissionsHome/>
        </div>
      </div>
  );
};

const mapDispatchToProps = (dispatch)=> {
  const onPlanetsFetched = data=> dispatch(planetsFetched(data));
  return {
    fetchPlanets: ()=> dispatch(fetchPlanets).then(onPlanetsFetched)
  };
};

export default connect(null, mapDispatchToProps)(App);
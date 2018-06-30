import React      from 'react';

import {connect}  from 'react-redux';

import Background     from './background/star-world-background';
import HelpModal      from './help-modal/help-modal-component';
import GameResult     from './game-result/game-result-component';
import HelpButton     from './help-button/help-buttton-component';
import MissionsWizard from './mission-wizard/mission-wizard-component';
import ListMissions   from './missions/missions-component';
import GameProgress   from './game-progress/game-progress-component';

import {loadPlanets}   from './planets/planets-actions';
import {loadVehicles}  from './vehicles/vehicles-actions';
import createReactClass from 'create-react-class';

const Game = createReactClass({
    componentWillMount(){
        this.props.loadPlanets();
        this.props.loadVehicles();
    },
    render() {
        return (
            <div id='app'>
                <Background/>
                <div id="main-content">
                    <HelpModal/>
                    <div id='missions-home'>
                        <HelpButton/>
                        <MissionsWizard/>
                        <GameProgress/>
                        <ListMissions/>
                    </div>
                    <GameResult/>
                </div>
            </div>
        );
    }
});

const mapDispatchToProps = (dispatch)=> ({
  loadPlanets : ()=> dispatch(loadPlanets()),
  loadVehicles: ()=> dispatch(loadVehicles())
});

export default connect(null, mapDispatchToProps)(Game);
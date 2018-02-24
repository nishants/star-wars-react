import React from 'react';
import {connect} from 'react-redux';
import {REMOVE_MISSION} from '../missions-actions';

const ListMissions = ({missions, removeMission})=> {
  const toMissionListElement = mission =>  (
      <li key={mission.id}>
        <div className='planet'> {mission.planetName}</div>
        <div className='vehicle'>  {mission.vehicleName}</div>
        <div className='overview'>{mission.distanceInMegaMiles} Megagmiles in {mission.missionTime} days</div>
        <div className='cancel' onClick={()=> removeMission(mission)}>
          <div className='no-mobile fa fa-remove'></div>
          <div className='mobile-only'> Delete</div>
        </div>
      </li>
  );

  return (
      <div id='missions-selected'>
        <ul className='missions'>
          {missions.map(toMissionListElement)}
        </ul>
      </div>
  );
};

const mapStateToProps = ({missions})=> ({missions: missions});

const mapDispatchToProps = (dispatch)=> ({
  removeMission: mission => dispatch({type: REMOVE_MISSION, missionId: mission.id})
});

export default connect(mapStateToProps, mapDispatchToProps)(ListMissions);
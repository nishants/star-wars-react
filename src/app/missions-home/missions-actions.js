import axios from 'axios';
import {remote, remoteHeaders} from '../config';

export const ADD_MISSION = 'MISSIONS/ADD_MISSION';
export const REMOVE_MISSION = 'MISSIONS/REMOVE_MISSION';

export const PREPARING_MISSIONS = 'MISSIONS/PREPARING_MISSIONS';
export const SEND_MISSIONS = 'MISSIONS/PREPARING_MISSIONS';
export const MISSION_SUCCESS = 'MISSIONS/MISSION_SUCCESS';
export const MISSION_FAILED = 'MISSIONS/MISSION_FAILED';

export const createMission = (planet, vehicle) =>  ({type: ADD_MISSION, vehicle, planet});
export const removeMission = (mission) =>  ({type: REMOVE_MISSION, missionId: mission.id});

export const sendMissions = (missions, dispatch)=> {
  axios.create({
    headers: remoteHeaders,
  }).post(remote+'/token').then(response => {
    dispatch({type: SEND_MISSIONS});
    return findFlacone(missions, response.data.token).then((result)=> {
      const
          ifWon = planetName => dispatch({type: MISSION_SUCCESS, planetName}),
          ifLost = () => dispatch({type: MISSION_FAILED});

      return result.status === "success" ? ifWon(result.planet_name) : ifLost();
    });
  });

  return dispatch({type: PREPARING_MISSIONS});
};

export const findFlacone = (missions, token)=> {
  const body = {
    token: token,
    planet_names: missions.map(mission=> mission.planetName),
    vehicle_names: missions.map(mission=> mission.vehicleName),
  }
  return axios.create({
    headers: remoteHeaders
  }).post(remote+'/find', body).then(response => (response.data));
};

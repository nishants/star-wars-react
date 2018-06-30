import {GAME_LOST, GAME_WON, GAME_RESULT_LOADING} from '../game-actions';

export const MISSIONS_ACTIONS = {
    ADD_MISSION: 'MISSIONS/ADD_MISSION',
    REMOVE_MISSION: 'MISSIONS/REMOVE_MISSION',
    SEND: 'MISSIONS/PREPARING_MISSIONS',
    FIND_FALCONE: 'MISSIONS/FIND_FALCONE',
    MISSION_SUCCESS: GAME_WON,
    MISSION_FAILED: GAME_LOST,
    SENDING_MISSIONS: GAME_RESULT_LOADING,
};

export const createMission = (planet, vehicle) =>  ({type: MISSIONS_ACTIONS.ADD_MISSION, vehicle, planet});
export const removeMission = (mission) =>  ({type: MISSIONS_ACTIONS.REMOVE_MISSION, missionId: mission.id});
export const sendingMissions = ()=> ({type: MISSIONS_ACTIONS.SENDING_MISSIONS});
export const sendMissions = (missions)=> ({type: MISSIONS_ACTIONS.SEND, payload: missions});
export const sendMissionsWithToken  = (missions, token)=> ({type: MISSIONS_ACTIONS.FIND_FALCONE, payload: {missions, token}});
export const missionSuccessful  = (planetName)=> ({type: MISSIONS_ACTIONS.MISSION_SUCCESS, payload: planetName});
export const missionFailed  = ()=> ({type: MISSIONS_ACTIONS.MISSION_FAILED});

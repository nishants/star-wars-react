export const ADD_MISSION = 'MISSIONS/ADD_MISSION';
export const REMOVE_MISSION = 'MISSIONS/REMOVE_MISSION';

export const createMission = (planet, vehicle) =>  ({type: ADD_MISSION, vehicle, planet});
export const removeMission = (mission) =>  ({type: REMOVE_MISSION, missionId: mission.id});
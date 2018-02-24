export const CREATE_NEW_MISSION = "CREATE-MISSIONS/CREATE_NEW_MISSION";
export const CANCEL_CREATING_MISSION = "CREATE-MISSIONS/CANCEL_CREATING_MISSION";
export const SELECT_PLANET  = "CREATE-MISSIONS/SELECT_PLANET";
export const SELECT_VEHICLE  = "CREATE-MISSIONS/SELECT_VEHICLE";

export const selectPlanet = planet => ({type: SELECT_PLANET, planet: planet})
export const selectVehicle = vehicle => ({type: SELECT_VEHICLE, vehicle: vehicle})




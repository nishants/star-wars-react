export const ADDED_VEHICLE_TO_MISSION = 'VEHICLES/ADDED_VEHICLE_TO_MISSION';
export const REMOVED_VEHICLE_TO_MISSION = 'VEHICLES/REMOVED_VEHICLE_TO_MISSION';

export const VEHICLES_ACTIONS = {
    LOAD_VEHICLES: 'VEHICLES/LOAD_VEHICLES',
    VEHICLES_LOADED: 'VEHICLES/VEHICLES_LOADED'
};

export const loadVehicles = ()=> ({
    type: VEHICLES_ACTIONS.LOAD_VEHICLES
});

export const vehiclesLoaded = (data)=> ({
    type: VEHICLES_ACTIONS.VEHICLES_LOADED,
    payload: data
});

export const assignVehicle = vehicle => ({
    type: ADDED_VEHICLE_TO_MISSION,
    vehicleName: vehicle.name
});

export const unAssignVehicle = vehicle => ({
    type: REMOVED_VEHICLE_TO_MISSION,
    vehicleName: vehicle.name
});


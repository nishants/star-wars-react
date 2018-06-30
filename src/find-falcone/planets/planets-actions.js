export const ADDED_PLANET_TO_MISSION = 'PLANETS/ADDED_PLANET_TO_MISSION';
export const REMOVED_PLANET_FROM_MISSION = 'PLANETS/REMOVE_PLANET_FROM_MISSION';
export const PLANET_ACTIONS = {
    LOAD    : 'PLANETS/LOAD_PLANETS',
    LOADED : 'PLANETS/PLANETS_LOADED'
};

export const loadPlanets = ()=> ({
    type: PLANET_ACTIONS.LOAD
});

export const savePlanets = (planets)=> ({
    type: PLANET_ACTIONS.LOADED,
    payload: planets
});

export const assignPlanet = planet => ({
    type: ADDED_PLANET_TO_MISSION,
    planetName: planet.name
});

export const unAssignPlanet = planet => ({
    type: REMOVED_PLANET_FROM_MISSION,
    planetName: planet.name
});

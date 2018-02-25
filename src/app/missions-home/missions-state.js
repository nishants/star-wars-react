export default {
  initialState: ()=> ([]),

  remove: (state, missionId)=> {
    return state.filter((mission) => mission.id !== missionId);
  },

  resetMissions : state => [],

  add: (state, planet, vehicle)=> {
    return state.concat({
      id: state.length,
      planetName: planet.name,
      vehicleName: vehicle.name,
      distanceInMegaMiles: planet.distance,
      missionTime: planet.distance / vehicle.speed,
    });
  }
};
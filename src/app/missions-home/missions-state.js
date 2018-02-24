export default {
  initialState: ()=> ([
    {
      id: 0,
      vehicleName: 'Spaceship',
      planetName: 'Naburu',
      distanceInMegaMiles: 100,
      missionTime: 50,
    }
  ]),

  remove: (state, missionId)=> {
    return state.filter((mission) => mission.id !== missionId);
  },

  addMission: (state, planet, vehicle)=> {
    return {
      ...state
    };
  }
};
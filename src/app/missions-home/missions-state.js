export default {
  initialState : ()=> ([
    {
      missionId: 0,
      vehicleName  : 'Spaceship',
      planetName   : 'Naburu',
      distanceInMegaMiles : 100,
      missionTime: 50,
    }
  ]),

  addMission   : (state, planet, vehicle)=> {
    return {
      ...state
    };
  }
};
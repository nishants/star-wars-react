export default {
  initialState: ()=> [],

  resetPlanets: state=> (state.map((planet)=> ({...planet, assigned: false}))),

  addToMission: (state, planetName)=> (
      state.map((planet)=> (planet.name === planetName ? {...planet, assigned: true} : planet))
  ),

  removeFromMission: (state, planetId)=> {
    return state;
  },

  setPlanets: (state, planets)=> {
    return [].concat(planets).map(planet => ({...planet, assigned: false}));
  }
}
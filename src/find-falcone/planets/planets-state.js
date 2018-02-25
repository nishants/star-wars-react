export default {
  initialState: ()=> [],

  resetPlanets: state=> (state.map((planet)=> ({...planet, assigned: false}))),

  addToMission: (state, planetName)=> (
      state.map((planet)=> (planet.name === planetName ? {...planet, assigned: true} : planet))
  ),

  removeFromMission: (state, planetName)=> (
      state.map((planet)=> (planet.name === planetName ? {...planet, assigned: false} : planet))
  ),

  setPlanets: (state, planets)=> {
    return [].concat(planets).map(planet => ({...planet, assigned: false}));
  }
}
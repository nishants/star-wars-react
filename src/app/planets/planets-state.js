export default {
  initialState: ()=> [],

  addToMission: (state, planetId)=> {
    return state;
  },

  removeFromMission: (state, planetId)=> {
    return state;
  },

  setPlanets: (state, planets)=> {
    return [].concat(planets);
  }
}
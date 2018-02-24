export default {
  initialState: ()=> [],

  setVehicles: (state, vehicles)=> {
    return [].concat(vehicles);
  }
}
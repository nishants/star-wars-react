export default {
  initialState: ()=> [],

  setVehicles: (state, vehicles)=> {
    return [].concat(vehicles).map(vehicle => ({...vehicle, left: vehicle.total_no}));
  }
}
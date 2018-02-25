export default {
  initialState: ()=> [],

  setVehicles: (state, vehicles)=> {
    return [].concat(vehicles).map(vehicle => ({
      name: vehicle.name,
      img: vehicle.img,
      left: vehicle.total_no,
      speed: vehicle.speed,
      range: vehicle.max_distance}));
  },

  addedToMission: (state, vehicleName)=> (
      state.map((vehicle)=>
              vehicle.name === vehicleName ? {...vehicle, left: vehicle.left - 1} : vehicle
      )
  )
}
export default {
    initialState: ()=> ({
      showMenu: false,
      showVehicleMenu: false,
      selectedPlanet: null,
      selectedVehicle: null,
    }),

    showMenu: (state)=> {
      return {
        ...state,
        showMenu: true
      }
    },

    cancelAndClose: (state)=> {
      return {
        ...state,
        showMenu: false
      };
    }
};
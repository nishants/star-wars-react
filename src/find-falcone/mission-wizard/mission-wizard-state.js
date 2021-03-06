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
        showMenu: true,
        selectedPlanet: null,
        showVehicleMenu: false,
      }
    },

    cancelAndClose: (state)=> {
      return {
        ...state,
        selectedPlanet: null,
        showVehicleMenu: false,
        showMenu: false
      };
    },

    selectPlanet: (state, planet)=> {
      return {
        ...state,
        selectedPlanet: planet,
        showVehicleMenu: true,
      };
    }
};
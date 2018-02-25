export default {
  initialState: ()=> ({
    loading: false,
    won : false,
    planetFound: null,
    lost : false,
  }),

  onSuccess: (state, planetName)=> ({...state, won: true, planetFound: planetName}),
  onFailure: (state)=> ({...state}),
}
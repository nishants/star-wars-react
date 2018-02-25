export default {
  initialState: ()=> ({
    loading: false,
    won : false,
    planetFound: null,
    lost : false,
  }),

  loadingResult: (state)=> ({...state, loading: true}),
  onSuccess: (state, planetName)=> ({...state, won: true, planetFound: planetName, loading: false}),
  onFailure: (state)=> ({...state, lost: true, loading: false}),
}
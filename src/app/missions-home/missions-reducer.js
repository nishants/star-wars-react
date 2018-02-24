import Missions from './missions-state';

export default (state = Missions.initialState(), action)=> {
  switch(action.type){
    default :
      return state;
  }
};
import {CLOSE_HELP_MODAL} from './help-modal-actions';

const helpModalReducer = (state, action)=> {
  switch(action.type){
    case  CLOSE_HELP_MODAL :
      return {
        ...state,
        showModal: false
      };
    default:
      return {
        ...state,
        showModal: true
      };
  }
};

export default helpModalReducer;
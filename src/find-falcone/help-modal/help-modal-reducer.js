import {CLOSE_HELP_MODAL, OPEN_HELP_MODAL} from './help-modal-actions';

const helpModalReducer = (state = {showModal: true}, action)=> {
  switch(action.type){
    case  CLOSE_HELP_MODAL :
      return {
        ...state,
        showModal: false
      };
    case  OPEN_HELP_MODAL :
      return {
        ...state,
        showModal: true
      };
    default:
      return state;
  }
};

export default helpModalReducer;
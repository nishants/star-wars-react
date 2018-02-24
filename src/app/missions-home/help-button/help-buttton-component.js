import React from 'react';
import {connect} from 'react-redux';
import {OPEN_HELP_MODAL} from '../../help-modal/help-modal-actions';


const HelpButton = ({openHelpModal}) => (
    <div id="help-button" onClick={openHelpModal}>
      <span className='fa fa-question-circle'>
      </span>
    </div>
);


const mapDispatchToProps = (dispatch)=> ({
  openHelpModal: ()=> dispatch({type: OPEN_HELP_MODAL})
});

export default connect(null, mapDispatchToProps)(HelpButton);
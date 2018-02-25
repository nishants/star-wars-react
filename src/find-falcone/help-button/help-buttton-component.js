import React from 'react';
import {connect} from 'react-redux';
import {openModal} from '../help-modal/help-modal-actions';


const HelpButton = ({openHelpModal}) => (
    <div id="help-button" onClick={openHelpModal}>
      <span className='fa fa-question-circle'>
      </span>
    </div>
);


const mapDispatchToProps = (dispatch)=> ({
  openHelpModal: ()=> openModal(dispatch)
});

export default connect(null, mapDispatchToProps)(HelpButton);
import React from 'react';
import {connect} from 'react-redux';
import {closeModal} from './help-modal-actions';
import template from './help-modal.pug';

class HelpModal extends React.Component{
  render(){
    const {
        showModal,
        closeModal
        } = this.props;
    return template.call(this, {
      showModal,
      closeModal
    });

  }
}

const mapStateToProps = ({helpModal})=> helpModal;

const mapDispatchToProps = (dispatch)=> ({
  closeModal: ()=> closeModal(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HelpModal);
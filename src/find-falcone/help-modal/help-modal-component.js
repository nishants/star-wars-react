import React from 'react';
import {connect} from 'react-redux';
import {closeModal} from './help-modal-actions';
import template from './help-modal.pug';

const HelpModal  = ({showModal, closeModal})=> {
  return template.call({}, {
    showModal,
    closeModal
  });
};


const mapStateToProps = ({helpModal})=> helpModal;

const mapDispatchToProps = (dispatch)=> ({
  closeModal: ()=> closeModal(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HelpModal);
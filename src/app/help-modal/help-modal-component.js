import React from 'react';
import {connect} from 'react-redux';
import {CLOSE_HELP_MODAL} from './help-modal-actions';

const HelpModal = ({showModal, closeModal})=> {
    return (
        <div id='help' className={'modal-window ' + (showModal ? "show" : "")}>
          <div className='content'>
            <div className='message'>
              <ul className='title-text'>
                <li>King Shan has received intelligence that Al Falcone is in hiding in one of these 6 planets - DonLon, Enchai, Jebing, Sapir, Lerbin & Pingasor.</li>
                <li>However he has limited resources at his disposal & can send his army to only 4 of these planets.</li>
                <li>Select planets and send missionaries to find Falcone.</li>
              </ul>
            </div>
            <button className='skip' onClick={closeModal}>Continue</button>
          </div>
        </div>
    );
};

const mapStateToProps = ({helpModal})=> helpModal;

const mapDispatchToProps = (dispatch)=> ({
  closeModal: ()=> dispatch({type : CLOSE_HELP_MODAL})
});

export default connect(mapStateToProps, mapDispatchToProps)(HelpModal);
import React from 'react';
import ReactDOM from 'react-dom';
import deepFreeze from 'deep-freeze';
import helpModalReducer from '../../find-falcone/help-modal/help-modal-reducer';
import {CLOSE_HELP_MODAL} from '../../find-falcone/help-modal/help-modal-actions';

describe("Help Modal", ()=>{
  it('should show modal by default', () => {
    expect(helpModalReducer(undefined, {type: "UNKNOWN"})).toEqual({showModal: true});
  });

  it('should hide modal on CLOSE_HELP_MODAL', () => {
    const
        action = {type: CLOSE_HELP_MODAL},
        initialState = {
          showModal: true
        },
        expectedState = {
          showModal: false
        };
    expect(helpModalReducer(initialState, action)).toEqual(expectedState);
  });

});


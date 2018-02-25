import React from 'react';
import ReactDOM from 'react-dom';
import deepFreeze from 'deep-freeze';
import vehiclesReducer from '../../app/vehicles/vehicles-reducer';
import {vehiclesFetched, assignVehicle} from '../../app/vehicles/vehicles-actions';

describe("Vehicles", ()=>{
  it('should be empty by default', () => {
    expect(vehiclesReducer(undefined, {type: "UNKNOWN"})).toEqual([]);
  });

  it('should set vehicle on fetch', () => {
    jest.unmock('../../app/config');
    const config = require('../../app/config');
    config.vehicleIcons = {
      "vehicle1": "vehicle1.icon",
        "vehicle2": "vehicle2.icon",
    };

    const
        action = vehiclesFetched({data: [{name: "vehicle1", total_no: 1, max_distance: 200}, {name: "vehicle2", total_no: 2, max_distance: 300}]}),
        initialState = [],
        expectedState = [{name: "vehicle1", left: 1, img: "vehicle1.icon", range: 200}, {name: "vehicle2", left: 2, img: "vehicle2.icon",range: 300}];

    expect(vehiclesReducer(initialState, action)).toEqual(expectedState);
  });

  it('should set vehicle count on assigning to mission', () => {
    const
        action = assignVehicle({name: "Space pod"}),
        initialState = [{name: "Space pod", left: 1,total_no: 1}, {name: "Space rocket", left: 2, total_no: 2}],
        expectedState = [{name: "Space pod", left: 0,total_no: 1}, {name: "Space rocket", left: 2, total_no: 2}];

    expect(vehiclesReducer(initialState, action)).toEqual(expectedState);
  });

});


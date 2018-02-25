import React from 'react';
import ReactDOM from 'react-dom';
import deepFreeze from 'deep-freeze';
import vehiclesReducer from '../../find-falcone/vehicles/vehicles-reducer';
import {vehiclesFetched, assignVehicle} from '../../find-falcone/vehicles/vehicles-actions';

describe("Vehicles", ()=>{
  it('should be empty by default', () => {
    expect(vehiclesReducer(undefined, {type: "UNKNOWN"})).toEqual([]);
  });

  it('should set vehicle on fetch', () => {
    jest.unmock('../../config');
    const config = require('../../config');
    config.vehicleIcons = {
      "vehicle1": "vehicle1.icon",
      "vehicle2": "vehicle2.icon",
    };

    const
        initialState = [],
        action = vehiclesFetched({data: [
          {name: "vehicle1", total_no: 1, max_distance: 200, speed: 400},
          {name: "vehicle2", total_no: 2, max_distance: 300, speed: 300}]}),
        expectedState = [
          {name: "vehicle1", left: 1, img: "vehicle1.icon", range: 200, speed: 400, total: 1},
          {name: "vehicle2", left: 2, img: "vehicle2.icon", range: 300, speed: 300, total: 2}];

    expect(vehiclesReducer(initialState, action)).toEqual(expectedState);
  });

  it('should set vehicle count on assigning to mission', () => {
    const
        action = assignVehicle({name: "vehicle1"}),
        initialState = [{name: "vehicle1", left: 1,total_no: 1}, {name: "vehicle2", left: 2, total_no: 2}],
        expectedState = [{name: "vehicle1", left: 0,total_no: 1}, {name: "vehicle2", left: 2, total_no: 2}];

    expect(vehiclesReducer(initialState, action)).toEqual(expectedState);
  });

});


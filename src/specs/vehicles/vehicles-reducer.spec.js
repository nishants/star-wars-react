import React from 'react';
import ReactDOM from 'react-dom';
import deepFreeze from 'deep-freeze';
import vehiclesReducer from '../../find-falcone/vehicles/vehicles-reducer';
import {VEHICLES_LOADED, assignVehicle, unAssignVehicle} from '../../find-falcone/vehicles/vehicles-actions';

describe("Vehicles", ()=>{
  it('should be empty by default', () => {
    expect(vehiclesReducer(undefined, {type: "UNKNOWN"})).toEqual([]);
  });

  it('should set vehicle on VEHICLES_LOADED', () => {
    const
        initialState = [],
        action = {type: VEHICLES_LOADED, vehicles: [
          {name: "vehicle1", total_no: 1, max_distance: 200, speed: 400, img: "vehicle1.icon"},
          {name: "vehicle2", total_no: 2, max_distance: 300, speed: 300, img: "vehicle2.icon"}]},
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

  it('should resset vehicle count on unassigning from a mission', () => {
    const
        action = unAssignVehicle({name: "vehicle1"}),
        initialState = [{name: "vehicle1", left: 1,total_no: 2}, {name: "vehicle2", left: 1, total_no: 3}],
        expectedState = [{name: "vehicle1", left: 2,total_no: 2}, {name: "vehicle2", left: 1, total_no: 3}];

    expect(vehiclesReducer(initialState, action)).toEqual(expectedState);
  });

});


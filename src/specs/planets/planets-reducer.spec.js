import React from 'react';
import ReactDOM from 'react-dom';
import deepFreeze from 'deep-freeze';
import planetsReducer from '../../find-falcone/planets/planets-reducer';
import {PLANETS_LOADED, assignPlanet, unAssignPlanet} from '../../find-falcone/planets/planets-actions';

describe("Planets", ()=>{
  it('should be empty by default', () => {
    expect(planetsReducer(undefined, {type: "UNKNOWN"})).toEqual([]);
  });

  it('should set planets list on PLANETS_FETCHED', () => {
    const
        action = {type: PLANETS_LOADED, planets: [{name: "planet1", distance: 111}, {name: "planet1", distance: 222}]},
        initialState = [],
        expectedState = [{name: "planet1", distance: 111, assigned: false}, {name: "planet1", distance: 222, assigned: false}];

    expect(planetsReducer(initialState, action)).toEqual(expectedState);
  });

  it('should set planets list on PLANETS_LOADED', () => {
    const
        action = assignPlanet({name: "planet1", assigned: false}),
        initialState = [{name: "planet1", assigned: false}, {name: "planet2", assigned: false}],
        expectedState = [{name: "planet1", assigned: true}, {name: "planet2", assigned: false}];

    expect(planetsReducer(initialState, action)).toEqual(expectedState);
  });

  it('should unassign planet when removed from a mission', () => {
    const
        action = unAssignPlanet({name: "planet1"}),
        initialState = [{name: "planet1", assigned: true}, {name: "planet2", assigned: true}],
        expectedState = [{name: "planet1", assigned: false}, {name: "planet2", assigned: true}];

    expect(planetsReducer(initialState, action)).toEqual(expectedState);
  });

});


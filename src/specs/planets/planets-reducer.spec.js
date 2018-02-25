import React from 'react';
import ReactDOM from 'react-dom';
import deepFreeze from 'deep-freeze';
import planetsReducer from '../../app/planets/planets-reducer';
import {planetsFetched, assignPlanet} from '../../app/planets/planets-actions';

describe("Planets", ()=>{
  it('should be empty by default', () => {
    expect(planetsReducer(undefined, {type: "UNKNOWN"})).toEqual([]);
  });

  it('should set planets list on PLANETS_FETCHED', () => {
    const
        action = planetsFetched({data: [{name: "planet1"}, {name: "planet1"}]}),
        initialState = [],
        expectedState = [{name: "planet1", assigned: false}, {name: "planet1", assigned: false}];

    expect(planetsReducer(initialState, action)).toEqual(expectedState);
  });

  it('should set planets list on PLANETS_FETCHED', () => {
    const
        action = assignPlanet({name: "planet1", assigned: false}),
        initialState = [{name: "planet1", assigned: false}, {name: "planet2", assigned: false}],
        expectedState = [{name: "planet1", assigned: true}, {name: "planet2", assigned: false}];

    expect(planetsReducer(initialState, action)).toEqual(expectedState);
  });

});


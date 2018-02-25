import React from 'react';
import ReactDOM from 'react-dom';
import deepFreeze from 'deep-freeze';
import missionsReducer from '../app/missions-home/missions-reducer';
import {createMission, removeMission} from '../app/missions-home/missions-actions';

describe("Missions", ()=>{
  it('should be empty by default', () => {
    expect(missionsReducer(undefined, {type: "UNKNOWN"})).toEqual([]);
  });

  it('should add a mission', () => {
    const
        initialState = [],
        action = createMission({name: "planet", distance: 202}, {name: "vehicle",speed: 101}),
        expectedState = [
          {
            id: 0,
            planetName: 'planet',
            vehicleName: 'vehicle',
            distanceInMegaMiles: 202,
            missionTime: 2,
          }
        ];

    expect(missionsReducer(initialState, action)).toEqual(expectedState);
  });

  it('should remove a mission', () => {
    const
        initialState = [
          {id: 0, planetName: 'planet', vehicleName: 'vehicle', distanceInMegaMiles: 202, missionTime: 2},
          {id: 1, planetName: 'planet2', vehicleName: 'vehicle2', distanceInMegaMiles: 404, missionTime: 3},
        ],
        action = removeMission({id: 0}),
        expectedState = [
          {id: 1, planetName: 'planet2', vehicleName: 'vehicle2', distanceInMegaMiles: 404, missionTime: 3},
        ];

    expect(missionsReducer(initialState, action)).toEqual(expectedState);
  });


});


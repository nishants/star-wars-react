import {takeLatest, call, put} from "redux-saga/effects";
import {PLANET_ACTIONS, savePlanets} from './planets-actions';
import axios from 'axios';
import {remote, planetIcons} from '../../config';

export function* fetchPlanets(){
    const response = yield call(axios.get, `${remote}/planets`);
    yield put(savePlanets(response.data.map(planet => ({...planet, img: planetIcons[planet.name]}))));
}

export default function* planetSaga(){
    yield takeLatest(PLANET_ACTIONS.LOAD, fetchPlanets);
}
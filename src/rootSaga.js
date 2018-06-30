import delay from 'redux-saga';
import {takeEvery, all} from 'redux-saga/effects';
import planetSagas from './find-falcone/planets/planets-sagas';


export const VEHICLES_ACTIONS = {
    LOAD_VEHICLES: 'VEHICLES/LOAD_VEHICLES'
};

export function* fetchVehicles(){
    yield delay(100)
    alert('vehicles loaded')
}


export function* vehicleSaga(){
    yield takeEvery(VEHICLES_ACTIONS.LOAD_VEHICLES, fetchVehicles);
}



export default function* rootSaga(){
    yield all([
        vehicleSaga(),
        planetSagas(),
    ]);
}
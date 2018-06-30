import delay from 'redux-saga';
import {takeEvery, all} from 'redux-saga/effects';
import planetSagas from './find-falcone/planets/planets-sagas';
import vehiclesSaga from './find-falcone/vehicles/vehicles-sagas';

export default function* rootSaga(){
    yield all([
        vehiclesSaga(),
        planetSagas(),
    ]);
}
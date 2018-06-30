import axios from 'axios';
import {put, takeLatest, call} from 'redux-saga/effects';
import {VEHICLES_ACTIONS, vehiclesLoaded} from "./vehicles-actions";
import {remote, vehicleIcons} from "../../config";

function* fetchVehicles() {
    const url = `${remote}/vehicles`;
    const response = yield call(axios.get, url);
    const vehiclesWithImages = response.data.map(vehicle =>
        ({...vehicle, img : vehicleIcons[vehicle.name]}));
    yield put(vehiclesLoaded(vehiclesWithImages));
}

export default function* vehiclesSaga(){
    yield takeLatest(VEHICLES_ACTIONS.LOAD_VEHICLES, fetchVehicles);
}
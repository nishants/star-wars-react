import {takeLatest, call, put} from 'redux-saga/effects';
import {MISSIONS_ACTIONS, sendingMissions, sendMissionsWithToken, missionSuccessful, missionFailed} from './missions-actions';
import axios from 'axios';
import {remoteHeaders, remote} from '../../config';

function* sendMissions({payload}){
    yield put(sendingMissions());
    const
        missions = payload,
        tokenResponse = yield call(axios.post, `${remote}/token`, missions, {headers: remoteHeaders});
    yield put(sendMissionsWithToken(missions, tokenResponse.data.token));
}

function* findFalcone({payload}){
    const
        {missions, token} = payload,
        requestBody = {
            token: token,
            planet_names: missions.map(mission=> mission.planetName),
            vehicle_names: missions.map(mission=> mission.vehicleName),
        },
        response = yield call(axios.post, `${remote}/find`, requestBody, {headers: remoteHeaders}),
        result = response.data,
        success = result.status === "success";

    success ?  yield put(missionSuccessful(result.planet_name)) : yield put(missionFailed());
}

export default function*  missionsSagas(){
    yield takeLatest(MISSIONS_ACTIONS.SEND, sendMissions)
    yield takeLatest(MISSIONS_ACTIONS.FIND_FALCONE, findFalcone)
};
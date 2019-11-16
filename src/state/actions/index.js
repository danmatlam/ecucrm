
import { takeLatest } from "redux-saga/effects";
import { CONTACTOS_READ } from '../actionTypes';
import { readContactosSagas , saveContactoSagas} from './contactosSagas';

//logica
export function* watcherSaga() {
    yield takeLatest(CONTACTOS_READ, readContactosSagas);
}



import { takeLatest } from "redux-saga/effects";
import { 
    CONTACTO_READ,
    CONTACTO_CREATE
} from './actionTypes';

import { readContactosSagas , saveContactoSagas} from './contactosSagas';

export function* watcherSaga() {
    yield takeLatest(CONTACTO_READ, readContactosSagas);
    yield takeLatest(CONTACTO_CREATE, saveContactoSagas);
}


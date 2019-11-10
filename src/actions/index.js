
import { takeLatest } from "redux-saga/effects";
import { 
    CONTACTO_READ
} from './actionTypes';

import { readContactosSagas , saveContactoSagas} from './contactosSagas';

export function* watcherSaga() {
    yield takeLatest(CONTACTO_READ, readContactosSagas);
}


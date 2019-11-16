
import { takeLatest } from "redux-saga/effects";
import { CONTACTOS_READ, CONTACTO_UPDATE } from '../actionTypes';
import { readContactosSagas, updateContactoSagas } from "./contactosSagas";

//logica
export function* watcherSaga() {
    yield takeLatest(CONTACTOS_READ, readContactosSagas);
    yield takeLatest(CONTACTO_UPDATE, updateContactoSagas);

}


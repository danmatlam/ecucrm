import { call, put } from "redux-saga/effects";
import axios from "axios";
import {
    CONTACTO_READ_SUCCESS,
    CONTACTO_READ_ERR
} from '../actions/actionTypes';


// CALLBACKS O PROMESAS (FUNCIONES PRIVADAS)
const readContactos = () => {
    return axios.get('https://proyecto-danmat.herokuapp.com/api/peliculas');
}
//SAGAS  
export function* readContactosSagas() {
    try {//[2.1] NOS SUBSCRIBIMOS 
        const res = yield call(readContactos);
        const contactos = res.data.contactos;
        //[2.2] RESPUESTA EN MANO DESPACHAMOS REDUX
        if (contactos) {
            yield put({ 
                type:CONTACTO_READ_SUCCESS, 
                payload: contactos 
            });
        }

    } catch (error) {
        yield put({ 
            type: CONTACTO_READ_ERR, 
            error: error 
        });
    }

}









/// LOS SAGAS SON LOS QUE LLAMAN AL WEB SERVICE Y DESPACHAN LA RESPUESTA AL REDUCER


import { call, put } from "redux-saga/effects";
import axios from "axios";
import {
    CONTACTOS_READ_SUCCESS,
    CONTACTOS_READ_ERR,
    CONTACTO_UPDATE_SUCCESS,
    CONTACTO_UPDATE_ERR
} from '../actionTypes';

// const server = 'http://localhost:3001'
const server = 'https://firebase-back-clases.herokuapp.com'

//[1] Crear función que llama al api
const readContactos = () => axios.get(server+'/api/clientes')
const updateContacto = (payload) => axios.put(server+'/api/clientes', payload);



export function* readContactosSagas() {
    try {
        //[2.1] NOS SUBSCRIBIMOS 
        const res = yield call(readContactos);
        const clientes = res.data.clientes;
        //[2.2] RESPUESTA EN MANO DESPACHAMOS REDUX
        if (clientes) {
            yield put({ type:CONTACTOS_READ_SUCCESS, payload: clientes });
        }else{
            throw 'Algo salio mal...'
        }
    } 
    catch (error) {
        yield put({ type: CONTACTOS_READ_ERR, error: error });
    }

}
export function* updateContactoSagas(action) {
    try {
        const res = yield call(updateContacto, action.payload);
        const cliente = res.data.cliente;
        //[2.2] RESPUESTA EN MANO DESPACHAMOS REDUX
        if (cliente) {
            yield put({ type:CONTACTO_UPDATE_SUCCESS, payload: cliente });
        }
    } 
    catch (error) {
        yield put({ type: CONTACTO_UPDATE_ERR, payload: error });
    }

}













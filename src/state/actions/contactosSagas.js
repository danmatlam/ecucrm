/// LOS SAGAS SON LOS QUE LLAMAN AL WEB SERVICE Y DESPACHAN LA RESPUESTA AL REDUCER


import { call, put } from "redux-saga/effects";
import axios from "axios";
import {
    CONTACTO_READ_SUCCESS,
    CONTACTO_READ_ERR
} from '../actions/actionTypes';


//[1] Crear función que llama al api
const readContactos = () => {
    return axios.get('https://rn-crm-back.herokuapp.com/api/clientes');
}
//[2] Crear Saga, llama a [1] y dispara reducer
export function* readContactosSagas() {
    try {//[2.1] NOS SUBSCRIBIMOS 
        const res = yield call(readContactos);
        const clientes = res.data.clientes;
        //[2.2] RESPUESTA EN MANO DESPACHAMOS REDUX
        if (clientes) {
            yield put({ 
                type:CONTACTO_READ_SUCCESS, 
                payload: clientes 
            });
        }else{
            throw 'Algo salio mal...'
        }

    } catch (error) {
        yield put({ 
            type: CONTACTO_READ_ERR, 
            error: error 
        });
    }

}









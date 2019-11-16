//Importar librerias necesarias [0]
import { combineReducers } from "redux";

// Importar mis reducers [1]
import contactosReducer from './contactosReducer'


// Exportar reducers como estados [2]
export default combineReducers({
    contactosState: contactosReducer,
})
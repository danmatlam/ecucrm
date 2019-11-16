import { CONTACTOS_READ, CONTACTOS_READ_SUCCESS, CONTACTOS_READ_ERR,} from './../actionTypes';
const defaultState = {
    contactos: [],
    fetchingList: false,
    errorList: false,
}


/// EL REDUCER GESTIONA/ADMINISTRA/MOLDEA LOS DATOS

const  contactosReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CONTACTO_READ: 
        return { 
            ...state,
            fetchingList:true
        }
        case CONTACTO_READ_SUCCESS: return {
            ...state,
            fetchingList:false,
            contactos: action.payload
        }
        case CONTACTO_READ_ERR: return {
            ...state,
            fetchingList:false,
            errorList: true,
        } 

        default: return state;
    }
}




export default contactosReducer;

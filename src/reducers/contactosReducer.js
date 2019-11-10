import {
    CONTACTO_READ,
    CONTACTO_READ_SUCCESS,
    CONTACTO_READ_ERR,
} from '../actions/actionTypes';
const defaultState = {
    contactos: [],
    fetchingList: false,
    errorList: false,
}



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

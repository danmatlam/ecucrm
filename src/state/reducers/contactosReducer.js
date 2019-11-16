import { 
    CONTACTOS_READ, 
    CONTACTOS_READ_SUCCESS, 
    CONTACTOS_READ_ERR,

    CONTACTO_UPDATE, 
    CONTACTO_UPDATE_SUCCESS, 
    CONTACTO_UPDATE_ERR,

} from './../actionTypes';
const defaultState = {
    contactos: [],
    contacto:{},
    fetchingList: false,
    errorList: false,
    fethcing: false,
    error: false,
}


/// EL REDUCER GESTIONA/ADMINISTRA/MOLDEA LOS DATOS

const  contactosReducer = (state = defaultState, action) => {
    switch (action.type) {
        //--------------- [READ] ------------//
        case CONTACTOS_READ: return { 
            ...state,
            fetchingList:true
        }
        case CONTACTOS_READ_SUCCESS: return {
            ...state,
            fetchingList:false,
            contactos: action.payload
        }
        case CONTACTOS_READ_ERR: return {
            ...state,
            fetchingList:false,
            errorList: true,
        } 

        
        //--------------- [UPDATE] ------------//
        case CONTACTO_UPDATE: return { 
            ...state,
            fetching:true
        }
        case CONTACTO_UPDATE_SUCCESS:  return {
            ...state,
            fetching: false,
            contactos: replaceContacto(state.contactos, action.contacto),
        };
        case CONTACTO_UPDATE_ERR: return {
            ...state,
            fetching:false,
            error: true,
        } 
        default: return state;
    }
}


const replaceContacto = (contactos, contacto) => {
    let index = contactos.findIndex(item => item._id == usuario._id)
    contactos[index] = contacto;
    return contactos;
};


export default contactosReducer;

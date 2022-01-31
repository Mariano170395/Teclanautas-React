import { SET_SEARCH } from "../actions/types";
//El reducer modifica el estado
const initialState = {
    search:'',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH:
            //Aun se puede poner logica
            return {
                ...state,
                search: action.payload
                //Puedo agregar cualquier state que quiera
            };
        default:
            return state;
    }
}
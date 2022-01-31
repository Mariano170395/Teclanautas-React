//Aqui van funciones que hacen la logica de llamadas de api
import { SET_SEARCH } from "./types";
// Set Current List 
export const setSearch = search => {
    //Puedo agregar aqui la logica
    return {
        type: SET_SEARCH,
        payload: search
    }
};
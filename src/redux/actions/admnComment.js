import { SAVE_ADMIN_COMMENT } from "./const";

const saveComm = (comm) =>{
    return{
        type: SAVE_ADMIN_COMMENT,
        payload: comm
    }
}

export { saveComm }
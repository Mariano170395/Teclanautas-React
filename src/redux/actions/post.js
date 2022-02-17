import { SAVE_POST } from "./const";

const save = (post) =>{
    return{
        type: SAVE_POST,
        payload: post,
    }
}

export { save }
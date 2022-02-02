import { SAVE_POST } from "./types";

const save = ()=>{
    return{
        type: SAVE_POST,
        post: [],
    }
}

export {save}
import { SAVE_POST } from "./const";

const save = (post) =>{
    return{
        type: SAVE_POST,
        post: post,
    }
}

export { save }
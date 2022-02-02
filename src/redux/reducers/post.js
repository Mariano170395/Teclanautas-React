import { SAVE_POST } from "../actions/const";

const initialState = {
    posts :[
        {
            id: 1,
            contenido: 'Hola'
        }
    ]
};

const postReducer = (state = initialState, action)=>{
    switch (action.type) {
        case SAVE_POST:
            return{...state, posts: [...state.posts, action.post]}
        default:
            return state;
    }

}

export { postReducer }
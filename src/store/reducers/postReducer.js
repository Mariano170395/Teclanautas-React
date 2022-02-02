import { SAVE_POST } from "../actions/types";

const initialState = {
  post: [
    {
      id: '',
      contenido: '' 
    },
  ],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_POST:
      return { ...state, post: [...state.post, action.payload] };
    default:
      return state;
  }
};

export { postReducer };

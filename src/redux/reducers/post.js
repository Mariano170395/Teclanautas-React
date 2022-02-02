import { SAVE_POST } from "../actions/const";

const initialState = {
  post: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_POST:
      return { post: [...state.post, action.payload] };
    default:
      return state;
  }
};

export { postReducer };

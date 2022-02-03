import { SAVE_ADMIN_COMMENT } from "../actions/const";

const initialState = {
  comm: [],
};

const admnCommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_ADMIN_COMMENT:
      return { comm: [...state.comm, action.payload] };
    default:
      return state;
  }
};

export { admnCommentReducer };

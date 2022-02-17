import { NEW_NOTIFICATION, READ_NOTIFICATION } from "../actions/const";

const initialState = {
  notification: true,
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_NOTIFICATION:
      return { ...state, notification: true };
    case READ_NOTIFICATION:
      return { ...state, notification: false };
    default:
      return state;
  }
};

export { notificationReducer };

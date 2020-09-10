import { UserActionTypes } from "./user.types";
const INITIAL_STATE = {
  currentUser: null,
};

//if there is no state state = INITIAL_STATE
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;

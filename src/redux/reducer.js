import { SHOW_USER_DETAILS_CARD, HIDE_USER_DETAILS_CARD } from "./constants";
import { userData } from "../data/userData";

const initialState = {
  userData: userData,
  userID: null,
  particularUser: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_USER_DETAILS_CARD:
      return {
        ...state,
        userID: action.userID,
        particularUser: state.userData.find((obj) => obj.id === action.userID),
      };
    case HIDE_USER_DETAILS_CARD:
      return {
        ...state,
        userID: action.userID,
      };
    default:
      return state;
  }
};

export default reducer;

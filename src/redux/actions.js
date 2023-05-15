import { SHOW_USER_DETAILS_CARD, HIDE_USER_DETAILS_CARD } from "./constants";

export const showUserDetailsCard = (id) => {
  return {
    type: SHOW_USER_DETAILS_CARD,
    userID: id,
  };
};

export const hideUserDetailsCard = () => {
  return {
    type: HIDE_USER_DETAILS_CARD,
  };
};

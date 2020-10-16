import { ActionType } from "shared/models/redux/store";
import { CurrentUser } from "shared/models/redux/users";
import { SET_CURRENT_USER } from "../../constants/redux/types";

export const setCurrentUser = (
  payload: CurrentUser
): ActionType<CurrentUser> => {
  return {
    type: SET_CURRENT_USER,
    payload,
  };
};

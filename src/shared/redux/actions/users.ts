import { IActionType } from "shared/models/redux/store";
import { ICurrentUser } from "shared/models/redux/users";
import { SET_CURRENT_USER } from "../../constants/redux/types";

export const setCurrentUser = (
  payload: ICurrentUser
): IActionType<ICurrentUser> => {
  return {
    type: SET_CURRENT_USER,
    payload,
  };
};

import { IActionType } from "shared/interfaces/redux/store";
import { ICurrentUser } from "shared/interfaces/redux/users";
import { SET_CURRENT_USER } from "../../constants/redux/types";

export const setCurrentUser = (
  payload: ICurrentUser
): IActionType<ICurrentUser> => {
  return {
    type: SET_CURRENT_USER,
    payload,
  };
};

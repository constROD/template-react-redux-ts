import { DEFAULT_USERS } from "shared/constants/redux/defaults";
import { IActionType } from "shared/models/redux/store";
import { ICurrentUser } from "shared/models/redux/users";
import { SET_CURRENT_USER } from "../../constants/redux/types";

export const usersReducer = (
  state = DEFAULT_USERS,
  action: IActionType<ICurrentUser>
) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: {
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

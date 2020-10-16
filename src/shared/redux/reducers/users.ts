import { DEFAULT_USERS } from "shared/constants/redux/defaults";
import { ActionType } from "shared/models/redux/store";
import { CurrentUser } from "shared/models/redux/users";
import { SET_CURRENT_USER } from "../../constants/redux/types";

const usersReducer = (
  state = DEFAULT_USERS,
  action: ActionType<CurrentUser>
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

export default usersReducer;

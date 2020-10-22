import { combineReducers } from "redux";
import { usersReducer } from "./users";

export const rootReducers = combineReducers({
  users: usersReducer,
});

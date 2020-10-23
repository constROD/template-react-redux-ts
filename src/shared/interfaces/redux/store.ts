import { IUsersState } from "./users";

export interface IActionType<P> {
  type: string;
  payload: P;
}

export interface IStoreState {
  users: IUsersState;
}

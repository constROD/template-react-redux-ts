import { UsersState } from "./users";

export interface ActionType<P> {
  type: string;
  payload: P;
}

export interface StoreState {
  users: UsersState;
}

import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { APP_ZONE } from "shared/configs/app";
import { rootReducers } from "./reducers";

const middlewares =
  APP_ZONE === "production"
    ? compose(applyMiddleware(thunk))
    : compose(applyMiddleware(thunk, logger));

export default createStore(rootReducers, middlewares);

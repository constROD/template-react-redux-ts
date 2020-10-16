import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { CONFIG } from "shared/configs/app";
import reducers from "./reducers";

const middlewares =
  CONFIG.ZONE === "production"
    ? compose(applyMiddleware(thunk))
    : compose(applyMiddleware(thunk, logger));

export default createStore(reducers, middlewares);

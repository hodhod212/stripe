import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";
//middleware is an array
const middlewares = [logger];
// ...middleware is all av the values in the middleway array
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;

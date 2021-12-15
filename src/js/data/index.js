import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import datetime from "./datetime";

const reducer = {
  datetime,
};

let middleware = getDefaultMiddleware();
if (process.env.NODE_ENV !== "production") {
  middleware = middleware.concat(logger);
}

export default configureStore({
  reducer,
  middleware,
});

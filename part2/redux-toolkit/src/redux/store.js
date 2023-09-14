import {
  configureStore,
  combineReducers,
  applyMiddleware,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import counterSlice from "../slices/counterSlice";
import userSlicie from "../slices/userSlicie";

const reducer = combineReducers({
  counter: counterSlice,
  user: userSlicie,
});

const store = configureStore(
  {
    reducer,
  },
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

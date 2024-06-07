import { legacy_createStore as createStore, combineReducers, applyMiddleware,compose } from "redux";
import { thunk } from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { fileListReducers, fileListMyReducers } from "./reducers/fileReducers";
import {
  userLoginReducers,
  userRegisterReducers,
} from "./reducers/userReducers";

const reducer = combineReducers({
  fileList: fileListReducers,
  fileListMy: fileListMyReducers,
  userLogin: userLoginReducers,
  userRegister: userRegisterReducers,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  compose(applyMiddleware(...middleware))
);

export default store;

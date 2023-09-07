import { combineReducers } from "redux";
import ballanceReducer from "./ballance";
import bannerReducer from './banner';
import historyReducer from "./history";
import loginReducers from './login';
import updatePhotoReducer from "./photo";
import profileReducer from './profile';
import registReducer from "./register";
import serviceReducer from './service';
import topupReducer from "./topup";
import updateReducer from "./udapte";

export default combineReducers({
  loginReducers,
  profileReducer,
  bannerReducer,
  serviceReducer,
  ballanceReducer,
  historyReducer,
  topupReducer,
  updateReducer,
  registReducer,
  updatePhotoReducer
})
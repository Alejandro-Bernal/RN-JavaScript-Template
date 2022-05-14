import { createStore, combineReducers } from "redux";

import projectReducer from "./project/Reducer";
import alertReducer from "./alerts/Reducer";

const rootReducer = combineReducers({
  college: projectReducer,
  alert: alertReducer,
});

const store = createStore(rootReducer);
export default store;

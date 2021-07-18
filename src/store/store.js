import { createStore, combineReducers } from "redux";

//Son mis reducers que los estoy colocando en la store
import { authReducers } from "../reducers/authReducers";
import { uiReducers } from "../reducers/uiReducers";


//combino reducers para que pueda ponerlos en la store
const reducers = combineReducers({
  auth: authReducers,
  UI: uiReducers,
});


//Creo mi STORE 
export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

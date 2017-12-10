import {combineReducers} from "redux";

import TabReducer from "../reducers/TabsReducer";

export default combineReducers({
    tab: TabReducer
});

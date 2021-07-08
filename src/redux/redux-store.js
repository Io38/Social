import { combineReducers, createStore } from "redux";
import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
    profile: profileReducer,
    messages: messagesReducer
});

let store = createStore(reducers);

export default store;
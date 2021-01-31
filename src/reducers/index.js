import {combineReducers} from "redux";
import auth from "./authReducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
    whitelist: [""],
}
const rootReducer = combineReducers({
    auth,
});
// export default persistReducer(persistConfig,rootReducer)
export default rootReducer;

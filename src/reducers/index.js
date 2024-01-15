import { combineReducers } from "redux";
import favouritesReducers from "./favouritesReducers";

const rootReducer = combineReducers({
	favourites: favouritesReducers,
});

export default rootReducer;

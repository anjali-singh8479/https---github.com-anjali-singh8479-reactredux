import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import icecreamreducer from "./icecream/icecreamReducer";
const rootreducer=combineReducers({
    cake:cakeReducer,
    icecream:icecreamreducer
})
export default rootreducer
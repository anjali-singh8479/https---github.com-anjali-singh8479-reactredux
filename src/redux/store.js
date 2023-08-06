import rootreducer from "./rootReducer";
import {composeWithDevTools} from 'redux-devtools-extension'
const {createStore,applyMiddleware}=require("redux")
const {logger} = require("redux-logger");
/* logger logs all the information related to store in a console
logger shows the information like before transition state action and after transition state object as an output */

/* now compositeDevTools is imported and it is now the second parameter to the store and it accepts
apply middleware as it parameter. It is very useful while using redux especially for debugging */

const store=createStore(rootreducer,composeWithDevTools(applyMiddleware(logger)));
export default store


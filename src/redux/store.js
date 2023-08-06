
// import cakeReducer from "./cakes/cakeReducer"

import rootreducer from "./rootReducer";
const {createStore}=require("redux")
// const { default: cakeReducer } = require("./redux/cakeReducer")
const store=createStore(rootreducer);
console.log(store.getState);
export default store


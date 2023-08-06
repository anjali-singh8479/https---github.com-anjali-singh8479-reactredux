import { BUY_CAKE } from "./cakeTypes";

const initialstate = {
  num_of_cakes: 10,
};
const cakeReducer = (state=initialstate, action) => {
  switch (action.type) {
    case BUY_CAKE: 
      return {
        ...state,
        num_of_cakes: state.num_of_cakes - action.payload,
      };
    default:return state
  }
};
export default cakeReducer;

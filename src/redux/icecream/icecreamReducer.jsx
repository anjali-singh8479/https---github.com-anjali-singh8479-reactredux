import { BUY_ICECREAM } from "./icecreamTypes";

const initialstate = {
  num_of_icecream: 20,
};

const icecreamreducer = (state=initialstate, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        num_of_icecream: state.num_of_icecream - 1,
      };
    default:return state
    
  }
};
export default icecreamreducer
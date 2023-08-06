import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import buyicecream from '../redux/icecream/icecreamAction';

const IcecreamContainer = () => {
    const numoficecream=useSelector(state=>state.icecream.num_of_icecream)
    const dispatch=useDispatch();
    console.log(numoficecream);
  return (
   <>
    <h1>IcecreamContainer-{numoficecream}</h1>
    <button onClick={()=>dispatch(buyicecream())}>buy icecream</button>
   </>
  )
}

export default IcecreamContainer
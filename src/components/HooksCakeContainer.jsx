import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import buycake from '../redux/cakes/cakeAction'

// useselector and usedispatch are the alternate to connect funtion
const HooksCakeContainer = () => {
    const numofcakes=useSelector(state=>state.cake.num_of_cakes)
    
    const dispatch=useDispatch()
  return (
    <div>
        <h1>number of cakes-{numofcakes}</h1>
        <button onClick={()=>dispatch(buycake())}>buy cake</button>
    </div>
  )
}

export default HooksCakeContainer
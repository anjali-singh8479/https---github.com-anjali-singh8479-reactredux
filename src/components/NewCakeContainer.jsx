import React,{useState} from 'react'
import { connect } from 'react-redux'
import buycake from '../redux/cakes/cakeAction'

const NewCakeContainer = (props) => {
    const [number,setnumber]=useState(1)
  return (
    <div>
        <h1>num_of_cakes {props.numofcake} </h1>
        <input type='text' value={number} onChange={(e)=>setnumber(e.target.value)}></input>
        <button onClick={()=>props.buycake(number)}>buy {number} cake</button>
    </div>
  )

}
const mapstatetoprops=(state)=>{
    return{
        numofcake:state.cake.num_of_cakes
    }
}
const mapdispatchtoprops=(dispatch)=>{
    return{
        buycake:(number)=>dispatch(buycake(number))
    }
}
export default connect(mapstatetoprops,mapdispatchtoprops)(NewCakeContainer)
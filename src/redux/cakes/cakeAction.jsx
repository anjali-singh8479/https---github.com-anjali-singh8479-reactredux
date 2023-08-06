import { BUY_CAKE } from "./cakeTypes"

const buycake=(number=1)=>{
    return {
        type:BUY_CAKE,
        payload:number
    }
}

/* payload passes extra information to the reducer apart from type ,
any other name can be used in place of payload but its just a convention ,
so now reflect the payload in reducer also*/

// payload is used when we want to send some data from component to the redux
export default buycake
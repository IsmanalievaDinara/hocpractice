import { useState } from "react"
const withCounter = (Component,...data) =>{
    console.log(data)
    return function WithCounter(){
        const [counter,setCounter] = useState(0)
        const multiply = () =>{
            return counter * 100
        }
        return(
            <Component counter={counter} setCounter={setCounter} multiply= {multiply}/>
        )

    }
}

export default withCounter


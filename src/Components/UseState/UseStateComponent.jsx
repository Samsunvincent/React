import { useState } from "react"

export default function UseStateComponent(){
    
    const [count , setCount] = useState(0)

    const handleClick = ()=>{
        setCount(count + 1);//here the value of count will be 0 initially after updating the state variable using setCount function it will increment into 1 ,0 --> 1;
        setCount(count + 1); //here also the value will be count will be 0 it would'nt change so the result will be 0 --->1

    }
    return(
        <>
       
        <h1>count : {count}</h1>
       <button onClick={handleClick}>Increment</button>
        </>
    )
} 
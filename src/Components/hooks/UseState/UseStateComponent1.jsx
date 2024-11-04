import { useState } from "react"

export default function UseStateComponent1(){
    
    const [count , setCount] = useState(0)


    //Functional Update
    const handleClick = ()=>{
        setCount((count)=>count + 1); // Here the initial value of count will be 0 it will be updated to 1
        setCount((count)=>count + 1); // Here the value during rendering will be 1 and it will be updated to 2
        
    }
    return(
        <>
       
        <h1>count : {count}</h1>
       <button onClick={handleClick}>Increment</button>
        </>
    )
} 
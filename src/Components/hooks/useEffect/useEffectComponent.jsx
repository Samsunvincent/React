import { useEffect } from "react"

    export default function useEffectComponent(){

        useEffect(() =>{
            console.log("component rendering ....");
            

        },[])

    return (
        <>
        <h1>useEffectComponent</h1>
        </>
    )
}
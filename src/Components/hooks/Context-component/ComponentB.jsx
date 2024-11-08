import {useContext} from 'react'
import { myContext } from './UseContextCopmponent'


export default function ComponentA(){
    const contextValue = useContext(myContext)
    return(
        <>
            <h2>Context-Value : {contextValue}</h2>
        </>
    )
}
import {useContext} from 'react'
import { ThemeContext } from "./ThemeApp"



export default function ThemedComponent(){

    const {Theme} = useContext(ThemeContext)
    return(
        <>
            <h1 style={{backgroundColor : Theme}}>Themed component</h1>
        </>
    )
}
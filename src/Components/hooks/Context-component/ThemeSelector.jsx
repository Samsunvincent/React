import { useContext } from "react"
import { ThemeContext } from "./ThemeApp"

export default function ThemeSelector(){
    const {setTheme} = useContext(ThemeContext)
    return(
        <>
            <button onClick={() =>{setTheme('black')}}>Dark Thme</button>
            <button onClick={() =>{setTheme('white')}}>Light Theme</button>
            <button onClick={() =>{setTheme('red')}}> red Thme</button>
            <button onClick={() =>{setTheme('green')}}>green Thme</button>

        </>
    )
}
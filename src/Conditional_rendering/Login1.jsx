import { useState } from "react"

function Login1(){


    const [isLoggedIn , setIsLoggedIn] = useState(false)

   
    return(
        <>
           {isLoggedIn ? (<h1>Login Successfull!</h1>) : (<h1>Login to continue</h1>)}
        </>
    )
}

export default Login1
import { useState } from "react"

function Login(){


    const [isLoggedIn , setIsLoggedIn] = useState(true)

    let content;

    if(isLoggedIn){
        content = <h1>Login successfull</h1>
    }
    else{
        content = <h1>Please Login To Continue</h1>
    }
    return(
        <>
            {content}
        </>
    )
}

export default Login
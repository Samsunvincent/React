import { createContext } from 'react'

import ComponentA from './ComponentA'
import ComponentB from './ComponentB'

// Create a context with a default value
const myContext = createContext('default')

export default function UseContext() {
    return (
        <>
            {/* Use the correct context object here */}
            <myContext.Provider value='hello world'>
                <ComponentA />
                <ComponentB />
            </myContext.Provider> {/* Remember to close the Provider */}
        </>
    )
}

export{myContext}
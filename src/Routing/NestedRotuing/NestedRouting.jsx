import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom"
import './BasicRouting.css'
import Home from "./Home"
import About from "./About"
import Dashboard from "./Dashboard"

function NestedRouting(){

    return(

        <>
        <Router>
           <nav>

            <ul>
                <li><Link to={'/home'} style={{color : "white",textDecoration : 'none'}}>Home</Link></li>
                <li><Link to={'/about'} style={{color : "white",textDecoration : 'none'}}>About</Link></li>
                <li><Link to={'/dashboard'} style={{color : "white",textDecoration : 'none'}}>Dashboard</Link></li>

                

            </ul>
           </nav>

           <section>
                <Routes>
                    <Route path={'/home'} exact element={<Home/>}/>
                    <Route path={'/about'} exact element={<About/>}/>
                    <Route path={'/dashboard/*'} exact element={<Dashboard/>}/>

                </Routes>

           </section>
           </Router>
        </>
    )
}

export default NestedRouting
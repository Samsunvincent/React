import{Link, Routes,Route} from 'react-router-dom'
import ProfileComponent from './ProfileComponet'
import SettingsComponent from './SettingsComponent'

function Dashboard(){
    return(
        <>
            <nav>
                <ul>
                <li><Link to={'/dashboard/profile'} style={{color : "Red",textDecoration : 'none'}}>Profile</Link></li>
                <li><Link to={'/dashboard/settings'} style={{color : "Red",textDecoration : 'none'}}>settings</Link></li>

                </ul>

                <section>
                    <Routes>
                        <Route path={'/profile'} exact element={<ProfileComponent/>}/>
                        <Route path={'/settings'} exact element={<SettingsComponent/>}/>

                    </Routes>
                </section>
            </nav>
        </>
    )
}
export default Dashboard
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import CategoryIcon from '@mui/icons-material/Category';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AirportShuttleOutlinedIcon from '@mui/icons-material/AirportShuttleOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AndroidOutlinedIcon from '@mui/icons-material/AndroidOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SwitchAccountOutlinedIcon from '@mui/icons-material/SwitchAccountOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {Link} from 'react-router-dom'
import { darkModeContext } from '../../context/darkModeContext';
import { useContext } from 'react';

const Sidebar = () => {
  const {dispatch}=useContext(darkModeContext)
  return (
    <div className='sidebar'>
        <div className='top'>
        <Link to='/'>
        <div className='logo'>Lannie.admin</div>
        </Link></div>

        <hr/>
        <div className='center'>
        <ul>
            <p className='title'>MAIN</p>
            <li>
            <DashboardIcon className='icon'/>
            <span>Dashboard</span>
            </li>
            <p className='title'>LISTS</p>
            <Link to='/users'>
            <li>
            <ManageAccountsOutlinedIcon className='icon' />
            <span>Users</span></li>   
            </Link>     
            <Link to='/products'>  
            <li>
            <CategoryIcon className='icon'/>
            <span>Products</span></li>
            </Link> 
            <li>
            <ShoppingCartOutlinedIcon className='icon'/>
            <span>Orders</span></li>
            <li>
            <AirportShuttleOutlinedIcon className='icon'/>
            <span>Delivery</span></li>
            <p className='title'>USEFUL</p>
            <li>
            <AssessmentOutlinedIcon className='icon'/>
            <span>Stats</span></li>
            <li>
            <NotificationsNoneOutlinedIcon className='icon'/>
            <span>Notification</span></li>
            <p className='title'>SERVICE</p>
            <li>
            <AndroidOutlinedIcon className='icon'/>
            <span>System Health</span></li>
            <li>
            <PsychologyOutlinedIcon className='icon'/>
            <span>Logs</span></li>
            <li>
            <SettingsOutlinedIcon className='icon'/>
            <span>Setting</span></li>
            <p className='title'>USER</p>
            <li>
            <SwitchAccountOutlinedIcon className='icon'/>
            <span>Profile</span></li>
            <li>
            <LogoutOutlinedIcon className='icon'/>
            <span>Logout</span></li>
        </ul>
        </div>
        <div className='bottom'>
            <div className='colorOption' onClick={()=>dispatch({type:"LIGHT"})}/>
            <div className='colorOption' onClick={()=>dispatch({type:"DARK"})}/>
        </div>
    </div>
  )
}

export default Sidebar
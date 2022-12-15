import React, { useContext } from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person4OutlinedIcon from '@mui/icons-material/Person4Outlined';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DnsIcon from '@mui/icons-material/Dns';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import './sidebar.scss'
import {Link} from 'react-router-dom'
import { DarkModeContext } from '../../context/darkModeContext';

const Sidebar = () => {

  const {dispatch} = useContext(DarkModeContext);

  return (
    <div className='sidebar'>
      <div className="top">
        <Link to="/" style={{textDecoration:"none"}}>
        <span className="logo">Freaky_Devs</span>
        </Link>
      </div>
      <hr/>
      <div className="center">
        <ul>
            <p className='title'>MAIN</p>
          <li>
            <DashboardIcon className='icon'/>
            <span>Dashboard</span>
          </li>

            <p className='title'>LISTS</p>
          <Link to="/users" style={{textDecoration:"none"}}>
          <li>
            <Person4OutlinedIcon className='icon'/>
            <span>Users</span>
          </li>
          </Link>

          <Link to="/products" style={{textDecoration:"none"}}>
          <li>
            <Inventory2Icon className='icon'/>
            <span>Products</span>
          </li>
          </Link>
          <li>
            <ListAltIcon className='icon'/>
            <span>Orders</span>
          </li>

          <li>
            <LocalShippingIcon className='icon'/>
            <span>Delivery</span>
          </li>
            <p className='title'>USEFULL</p>
          <li>
            <QueryStatsIcon className='icon'/>
            <span>Stats</span>
          </li>

          <li>
            <NotificationsIcon className='icon'/>
            <span>Notification</span>
          </li>
          <p className='title'>SERVICES</p>
          <li>
            <DnsIcon className='icon'/>
            <span>System health</span>
          </li>

          <li>
            <PsychologyIcon className='icon'/>
            <span>Logs</span>
          </li>

          <li>
            <SettingsIcon className='icon'/>
            <span>Settings</span>
          </li>
          <p className='title'>USER</p>
          <li>
            <AccountCircleIcon className='icon'/>
            <span>Profile</span>
          </li>

          <li>
            <LogoutIcon className='icon'/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={()=>dispatch({type:"LIGHT"})}></div>
        <div className="colorOption" onClick={()=>dispatch({type:"DARK"})}></div>
      </div>
    </div>
  )
}

export default Sidebar

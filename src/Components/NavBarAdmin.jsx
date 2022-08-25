import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import appContext from '../Context/appContext';


export default function NavBarAdmin() {
    const {isLoggedIn,setIsLoggedIn, userId, setUserId} = useContext(appContext)
  
  
    return (
      <div>
          <ul className='navbar d-flex'>
              <li className='li-navbar'> <Link className='links' to='/admin'>Users</Link></li>
              <li className='li-navbar'> <Link className='links' to='/addpets'>Add Pets</Link></li>
              <li className='li-navbar'><Link className='links' to='/dashboard'>Dashboard</Link></li>
          </ul>
      </div>
      )
}

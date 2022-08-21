import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button } from "react-bootstrap";
import appContext from '../Context/appContext';


export default function NavBarAdmin() {
    const {isLoggedIn,setIsLoggedIn, userId, setUserId} = useContext(appContext)
  
  
    async function logOut(){
     setIsLoggedIn(false)
      setUserId('')
    }
  
    return (
      <div>
          <ul className='navbar d-flex'>
              <li className='li-navbar'> <Link className='links' to='/admin'>Users</Link></li>
              <li className='li-navbar'> <Link className='links' to='/addpets'>Add Pets</Link></li>
              <li className='li-navbar'><Link className='links' to='/dashboard'>Dashboard</Link></li>
          </ul>
          <Button onClick={logOut} className='sign-out-btn'>Sign Out</Button>
      </div>
      )
}

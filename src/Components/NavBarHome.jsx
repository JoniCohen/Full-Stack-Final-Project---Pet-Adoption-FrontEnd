import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button } from "react-bootstrap";
import MainPageLoggedIn from './MainPageLoggedIn';
import LoggedOut from '../Pages/LoggedOut';
import appContext from '../Context/appContext';


export default function NavBarHome() {
  const {isLoggedIn,setIsLoggedIn, userId, setUserId} = useContext(appContext)
  
  
  async function logOut(){
   setIsLoggedIn(false)
    setUserId('')
  }

  return (
    <div>
        <ul className='navbar d-flex'>
            <li className='li-navbar'> <Link className='links' to='/'>Home</Link></li>
            <li className='li-navbar'> <Link className='links' to='/MyPets'>My Pets</Link></li>
            <li className='li-navbar'><Link className='links' to='/Profile'>Profile</Link></li>
        </ul>
        <Button onClick={logOut} className='sign-out-btn'>Sign Out</Button>
    </div>
  )
}

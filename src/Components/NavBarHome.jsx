import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBarHome() {
  return (
    <div>
        <ul className='navbar d-flex'>
            <li className='li-navbar'> <Link className='links' to='/MyPets'>My Pets</Link></li>
            <li className='li-navbar'><Link className='links' to='/Profile'>Profile</Link></li>
        </ul>
    </div>
  )
}

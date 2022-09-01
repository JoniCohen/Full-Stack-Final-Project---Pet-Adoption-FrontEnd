import React from 'react'
import NavBarAdmin from '../Components/NavBarAdmin'
import LogOut from '../Components/logOut'
import Dropdown from 'react-bootstrap/Dropdown';

export default function Dashboard() {
  return (
    <>
    <NavBarAdmin/>
    <LogOut/>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown">
        Reports
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="/petsdashboard">Pets</Dropdown.Item>
        <Dropdown.Item href="/historicaloperations" >Historical Operations</Dropdown.Item>
        <Dropdown.Item >Charts</Dropdown.Item>
      </Dropdown.Menu>
      </Dropdown>
    </>
    
  )
}

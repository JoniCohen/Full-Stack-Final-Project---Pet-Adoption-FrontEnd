import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import Select from "react-dropdown-select" 
import Form from 'react-bootstrap/Form';
import NavBarAdmin from "../Components/NavBarAdmin";
import LogOut from "../Components/logOut";


export default function HistoricalOperations() {
  const [viewHistoricalOperations,setviewHistoricalOperations] = useState([])
  const [searchOperation, setSearchOperation] = useState({Date:'', User:'', Pet:'', StatusTurnedTo: '',OperationID:''})


  async function getHistoricalOperationsView(){
    try{
      const res = await axios.get('http://localhost:8080/pets/viewhistoricaloperations',{params:searchOperation,withCredentials:true})
      setviewHistoricalOperations(res.data)
    }catch(err){
      console.log(err)
    }
      
  }
    
  function handleSearchOperation(e){
    setSearchOperation({...searchOperation,[e.target.name]: e.target.value})
  }


  return (
    <>
    <NavBarAdmin />
    <LogOut />
    <div className='d-flex flex-row ms-4'>
    <Form className='d-flex flex-column'>
    <Form.Label className='mt-1'>Date</Form.Label>
    <input id="startDate" type="date" onChange={handleSearchOperation} name='Date' />
    <Form.Label className='mt-2' >Name (Case Sensitive)</Form.Label>
        <Form.Control type="text" placeholder='User' name='User' onChange={handleSearchOperation} />
    <Form.Label className='mt-2' >Pet (Case Sensitive)</Form.Label>
        <Form.Control type="text" placeholder='Pet' name='Pet' onChange={handleSearchOperation} />
        <Form.Label className='mt-2' >Status</Form.Label>
        <select id='status' name='StatusTurnedTo' onChange={handleSearchOperation}>
          <option value="" id='status' name='StatusTurnedTo' onChange={handleSearchOperation}>Select a status:</option>
            <option value="Adopted" id='status' name='StatusTurnedTo' onChange={handleSearchOperation}>Adopt</option>
            <option value="Fostered" id='status' name='StatusTurnedTo' onChange={handleSearchOperation}>Foster</option>
            <option value="Available" id='status' name='StatusTurnedTo' onChange={handleSearchOperation}>Return</option>
        </select>
        <Form.Label className='mt-2' >Operation</Form.Label>
        <Form.Control type="text" placeholder='OperationID' name='OperationID' onChange={handleSearchOperation} />
    <Button onClick={getHistoricalOperationsView} className='mt-5'>Search</Button>
    </Form>
    <table className='historicalOperationsDashboard'>
      <thead>
      <tr>
      <th className='petsDashboard-id'>Operation ID</th>
        <th className='petsDashboard-name'>Date</th>
        <th className='petsDashboard-status'>User</th>
        <th className='petsDashboard-color'>Pet</th>
        <th className='petsDashboard-breed'>Status Turned To</th>
      </tr>
      </thead>
      <tbody>
      {viewHistoricalOperations.map((getviewHistoricalOperations)=>(
          <tr className='data-petsDashboard' key={getviewHistoricalOperations.OperationID}>
            <td>{getviewHistoricalOperations.OperationID}</td>
            <td>{getviewHistoricalOperations.Date}</td>
            <td>{getviewHistoricalOperations.User}</td>
            <td>{getviewHistoricalOperations.Pet}</td>
            <td>{getviewHistoricalOperations.StatusTurnedTo}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    
    </>
    
  )
}

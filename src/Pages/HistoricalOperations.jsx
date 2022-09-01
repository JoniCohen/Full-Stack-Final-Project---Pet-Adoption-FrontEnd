import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavBarAdmin from "../Components/NavBarAdmin";
import LogOut from "../Components/logOut";

export default function HistoricalOperations() {
    const [viewHistoricalOperations,setviewHistoricalOperations] = useState([])


    async function getHistoricalOperationsView(){
      try{
        const res = await axios.get('http://localhost:8080/pets/viewhistoricaloperations',{withCredentials:true})
        setviewHistoricalOperations(res.data)
      }catch(err){
        console.log(err)
      }
        
    }

    useEffect(()=>{
        getHistoricalOperationsView()
    },[])
  return (
    <>
    <NavBarAdmin />
    <LogOut />
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
    </>
    
  )
}

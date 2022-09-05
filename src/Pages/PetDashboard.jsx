import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavBarAdmin from "../Components/NavBarAdmin";
import LogOut from "../Components/logOut";
import { Button } from "react-bootstrap";
import EditPets from './EditPets';

export default function PetDashboard() {
    const [viewPets,setViewPets] = useState([])
    const [modalEditShow, setModalEditShow] = useState(false)


    async function getPetsView(){
      try{
        const res = await axios.get('http://localhost:8080/pets/viewpets',{withCredentials:true})
        setViewPets(res.data)
      }catch(err){
        console.log(err)
      }
        
    }

    useEffect(()=>{
        getPetsView()
    },[])

    async function deletePet(e){
      const idPet = e.target.value
      console.log(idPet)
      try{
        const res = await axios.delete('http://localhost:8080/pets/pet/'+idPet,{withCredentials:true})
        alert('Pet Deleted')
        getPetsView()
      }catch(err){
        console.log(err)
      }
    }
    const showModalEdit = () => setModalEditShow(true)
    const handleCloseModalEdit = () => setModalEditShow(false);

  return (
    <>
    <NavBarAdmin />
    <LogOut />
    <table className='petsDashboard'>
      <thead>
      <tr>
      <th className='petsDashboard-id'>Pet ID</th>
        <th className='petsDashboard-name'>Pet Name</th>
        <th className='petsDashboard-status'>Pet Status</th>
        <th className='petsDashboard-color'>Pet Color</th>
        <th className='petsDashboard-breed'>Pet Breed</th>
        <th className='petsDashboard-type'>Pet Type</th>
        <th className='petsDashboard-user'>User</th>
      </tr>
      </thead>
      <tbody>
        {viewPets.map((getViewPet)=>(
          <tr className='data-petsDashboard' key={getViewPet.PetID}>
            <td>{getViewPet.PetID}</td>
            <td>{getViewPet.PetName}</td>
            <td>{getViewPet.PetStatus}</td>
            <td>{getViewPet.PetColor}</td>
            <td>{getViewPet.PetBreed}</td>
            <td>{getViewPet.PetType}</td>
            <td>{getViewPet.User}</td>
            <td><Button value={getViewPet.PetID} onClick={showModalEdit}>Edit</Button></td>
            <td><Button value={getViewPet.PetID} onClick={deletePet}>Delete</Button></td>
          </tr>
        ))}
      </tbody>
    </table>
    <EditPets showModalEdit = {showModalEdit} modalEditShow={modalEditShow} handleCloseModalEdit={handleCloseModalEdit} />
    </>
    
  )
}

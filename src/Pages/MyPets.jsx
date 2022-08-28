import React, { useContext, useEffect, useState } from 'react'
import NavBarHome from '../Components/NavBarHome'
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import appContext from '../Context/appContext';
import LogOut from '../Components/logOut';
import PetArray from '../Components/PetArray';
import Pet from '../Components/Pet';

export default function MyPets() {
const {userId} = useContext(appContext)
const [userPets, setUserPets] = useState([])
const [message, setMessage] = useState('')

async function getPetsById(){
  try{
    const res = await axios.get('http://localhost:8080/pets/user/'+userId)
    setUserPets(res.data)
  }catch(err){
    console.log(err)
  }
}
  function renderPets(){
    if(userPets.length==0){
      setMessage("You don't have pets")
    }
  }

  useEffect(()=>{
    getPetsById()
    renderPets()
  },[])

const navigate = useNavigate()
  function NavigateToSearchPage(){
    navigate('/search')
   }

    
   async function adoptPet(){
    try{
      const adoptObject = {newStatus:2,newUser:userId,petId:userPets.id_pet}
      const res = await axios.put('http://localhost:8080/pets/adopt',adoptObject,{withCredentials:true})
    }catch(err){
      console.log(err)
    }

    try{
      const adoptObject = {newStatus:2,newUser:userId,petId:userPets.id_pet}
      const resOperation = await axios.post('http://localhost:8080/pets/operations',adoptObject,{withCredentials:true})
    }catch(err){
      console.log(err)
    }
    alert('Pet adopted')
    }
    


  return (
    <>
    <NavBarHome/>
    <LogOut/>
    <PetArray pet={userPets} />
    <Pet adoptPet = {adoptPet}/>
    <div>
    <Button onClick={NavigateToSearchPage}>Search Pets</Button>
    <span>{message} </span>
    </div>
    </>
    
  )
}

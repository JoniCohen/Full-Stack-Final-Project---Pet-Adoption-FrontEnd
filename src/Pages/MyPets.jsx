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
    console.log(res.data)
    setUserPets(res.data)
  }catch(err){
    console.log(err)
  }
}
  async function getSavedPets(){
    const res = await axios.get('http://localhost:8080/pets/savedpets/'+userId)
    console.log(res.data)
  }

  function renderPets(){
    if(userPets==[]){
      setMessage("You don't have pets")
    }else{
      setMessage("Your pets")
    }
    }

  useEffect(()=>{
    getPetsById()
    renderPets()
    getSavedPets()
  },[])

const navigate = useNavigate()
  function NavigateToSearchPage(){
    navigate('/search')
   }

    
   
   


  return (
    <>
    <NavBarHome/>
    <LogOut/>
    <Button onClick={NavigateToSearchPage}>Search Pets</Button>
    <div className='d-flex flex-row'>
    <div className='saved-pets'>
      <h2>Saved Pets</h2>
    </div>
    <div className='my-pets'>
    <h2>{message} </h2>
    <PetArray pet={userPets} />
    </div>
    </div>
    
    
    </>
    
  )
}

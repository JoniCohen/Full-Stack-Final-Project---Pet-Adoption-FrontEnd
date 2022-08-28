import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import PetArray from '../Components/PetArray'

export default function Search() {

    const [pet,setPet] = useState([])
    const navigate = useNavigate()
    function returnHome(){
      navigate('/')
    }
    
    async function showPets(){
      try{
        const res = await axios.get('http://localhost:8080/pets',{withCredentials:true})
       setPet(res.data)
        }catch(err){
        console.log(err)
        }
      }
      useEffect(()=>{
        showPets()
       },[])

  return (
    <>
    <Button onClick={returnHome} variant='dark'>Return to Home</Button>
    <div className='d-flex'>
      <div className='search-filters' >
        <h3 className='border-bottom p-1'>Search</h3>
        <div>

        </div>
      </div>
      <div>
      <PetArray pet= {pet} />
      </div>
    </div>
    </>
    
    
  )
}

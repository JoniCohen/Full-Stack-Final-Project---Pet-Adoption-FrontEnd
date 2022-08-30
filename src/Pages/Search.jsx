import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import PetArray from '../Components/PetArray'
import Select from "react-dropdown-select" 
import Form from 'react-bootstrap/Form';

export default function Search() {
    const [pet,setPet] = useState([])
    const [typesPet, setTypesPet] = useState('')
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
    
       async function getPetsByType(){
        const type = typesPet
        try{
          const res = await axios.get(`http://localhost:8080/pets/type/${type}`,{withCredentials:true})
          console.log(res.data)
        }catch(err){
        console.log(err)
        }
       }
       useEffect(()=>{
        getPetsByType()
       },[])

  return (
    <>
    <Button onClick={returnHome} variant='dark'>Return to Home</Button>
    <div className='d-flex'>
      <div className='search-filters' >
        <h3 className='border-bottom p-1'>Search</h3>
        <Form.Label className='mt-1'>Type</Form.Label>
              <Form.Check label='Cat' type='radio' name='Type' value='Cat' onChange={(e)=>setTypesPet(e.target.value)} />
              <Form.Check label='Dog' type='radio' name='Type' value='Dog' onChange={(e)=>setTypesPet(e.target.value)}/>
        <Button onClick={getPetsByType}>Search</Button>
        <div>

        </div>
      </div>
      <div>
      <PetArray pet= {pet} showPets={showPets} getPetsByType={getPetsByType} />
      
      </div>
    </div>
    </>
    
    
  )
}

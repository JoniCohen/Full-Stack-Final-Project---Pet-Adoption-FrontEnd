import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import PetArray from '../Components/PetArray'
import Select from "react-dropdown-select" 
import Form from 'react-bootstrap/Form';

export default function Search() {
    const [pet,setPet] = useState([])
    const [searchPet, setSearchPet] = useState({name:'',type:'',color:'',breed:'',minHeight:0,maxHeight:'',minWeight:0,maxWeight:''})
    const navigate = useNavigate()
    function returnHome(){
      navigate('/')
    }
    
    /*async function showPets(){
      try{
        const res = await axios.get('http://localhost:8080/pets',{withCredentials:true})
       setPet(res.data)
        }catch(err){
        console.log(err)
        }
      }
      useEffect(()=>{
        showPets()
       },[])*/
    
       async function search(){
        console.log(searchPet)
        try{
          const res = await axios.get(`http://localhost:8080/pets/search`,{params:searchPet,withCredentials:true})
          console.log(res.data)
          setPet(res.data)
        }catch(err){
        console.log(err)
        }
       }
       function handleSearchPet(e){
        setSearchPet({...searchPet,[e.target.name]:e.target.value})
       }

  return (
    <>
    <Button onClick={returnHome} variant='dark'>Return to Home</Button>
    <div className='d-flex'>
      <div className='search-filters' >
        <h3 className='border-bottom p-1'>Search</h3>
        <Form>
        <Form.Label className='mt-1'>Type</Form.Label>
              <Form.Check label='Cat' type='radio' name='type' value='Cat' onChange={handleSearchPet} />
              <Form.Check label='Dog' type='radio' name='type' value='Dog' onChange={handleSearchPet}/>
        <Button onClick={search}>Search</Button>
        </Form>
        <div>
          </div>
      </div>
      <div>
      <PetArray pet= {pet} search={search} />
      
      </div>
    </div>
    </>
    
    
  )
}

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
    const [advancedSearch, setAdvancedSearch] = useState(false)
    const navigate = useNavigate()
    function returnHome(){
      navigate('/')
    }
    
       async function search(){
        try{
          const res = await axios.get(`http://localhost:8080/pets/search`,{params:searchPet,withCredentials:true})
          setPet(res.data)
        }catch(err){
        console.log(err)
        }
       }
       function handleSearchPet(e){
        setSearchPet({...searchPet,[e.target.name]:e.target.value})
       }
       function reset(){
        setSearchPet({name:'',type:'',color:'',breed:'',minHeight:0,maxHeight:'',minWeight:0,maxWeight:''})
       }

  return (
    <>
    <Button onClick={returnHome} variant='dark'>Return to Home</Button>
    <div className='d-flex'>
      <div className='search-filters' >
        <h3 className='border-bottom p-1'>Search</h3>
        <Form className='p-1'>
        <Form.Label className='mt-1'>Type</Form.Label>
              <Form.Check label='Cat' type='radio' name='type' value='Cat' onChange={handleSearchPet} />
              <Form.Check label='Dog' type='radio' name='type' value='Dog' onChange={handleSearchPet}/>
        <Button className='mt-4' onClick={(e)=>{setAdvancedSearch(!advancedSearch)}}>Advanced Search</Button>
        <div className='d-flex flex-column'>
        <Form.Label className='mt-2' hidden={advancedSearch ? false : true}>Name (Case Sensitive)</Form.Label>
        <Form.Control type="text" placeholder='Name' name='name' hidden={advancedSearch ? false : true} onChange={handleSearchPet} />
        <Form.Label className='mt-2' hidden={advancedSearch ? false : true}>Color</Form.Label>
        <select id="color" hidden={advancedSearch ? false : true} name='color' onChange={handleSearchPet}>
        <option value="" id='color' name="color" onChange={handleSearchPet}>Color:</option>
        <option value="Black" id='color' name="color" onChange={handleSearchPet}>Black</option>
        <option value="White" id='color' name="color" onChange={handleSearchPet}>White</option>
        <option value="Gold" id='color' name="color" onChange={handleSearchPet}>Gold</option>
        <option value="Gray" id='color' name="color" onChange={handleSearchPet}>Gray</option>
        <option value="Brown" id='color' name="color" onChange={handleSearchPet}>Brown</option>
        <option value="Ginger" id='color' name="color" onChange={handleSearchPet}>Ginger</option>
        <option value="Cream" id='color' name="color" onChange={handleSearchPet}>Cream</option>
        </select>
        <Form.Label className='mt-2' hidden={advancedSearch ? false : true}>Breed</Form.Label>
        <select id="color" hidden={advancedSearch ? false : true} name={'breed'} onChange={handleSearchPet} >
        <option value="" id='breed' name="breed" onChange={handleSearchPet}>Breed:</option>
        <option value="Aidi" id='breed' name="breed" onChange={handleSearchPet}>Aidi</option>
        <option value="Dingo" id='breed' name="breed" onChange={handleSearchPet}>Dingo</option>
        <option value="Poitevin" id='breed' name="breed" onChange={handleSearchPet}>Poitevin</option>
        <option value="Rottweiler" id='breed' name="breed" onChange={handleSearchPet}>Rottweiler</option>
        <option value="Taigan" id='breed' name="breed" onChange={handleSearchPet}>Taigan</option>
        <option value="Aegean" id='breed' name="breed" onChange={handleSearchPet}>Aegean</option>
        <option value="Asian" id='breed' name="breed" onChange={handleSearchPet}>Asian</option>
        <option value="Bambino" id='breed' name="breed" onChange={handleSearchPet}>Bambino</option>
        <option value="Burmilla" id='breed' name="breed" onChange={handleSearchPet}>Burmilla</option>
        <option value="Chausie" id='breed' name="breed" onChange={handleSearchPet}>Chausie</option>
        <option value="Sokoke" id='breed' name="breed" onChange={handleSearchPet}>Sokoke</option>
        </select>
        <Form.Label className='mt-2' hidden={advancedSearch ? false : true}>Height</Form.Label>
        <div className='d-flex flex-row'>
        <Form.Control type="number" placeholder='Min' name='minHeight' hidden={advancedSearch ? false : true} onChange={handleSearchPet}/>
        <Form.Control type="number" placeholder='Max' name='maxHeight' hidden={advancedSearch ? false : true} onChange={handleSearchPet}/>
        </div>
        <Form.Label className='mt-2' hidden={advancedSearch ? false : true}>Weight</Form.Label>
        <div className='d-flex flex-row'>
        <Form.Control type="number" placeholder='Min' name='minWeight' hidden={advancedSearch ? false : true} onChange={handleSearchPet}/>
        <Form.Control type="number" placeholder='Max' name='maxWeight' hidden={advancedSearch ? false : true} onChange={handleSearchPet}/>
        </div>
        </div>
          
        </Form>
        <div className='d-flex flex-row'>
        <Button className='mt-3' onClick={search}>Search</Button>
        <Button className='mt-3 ms-5' onClick={reset}>Reset</Button>
          </div>
      </div>
      <div>
      <PetArray pet= {pet} search={search} />
      
      </div>
    </div>
    </>
    
    
  )
}

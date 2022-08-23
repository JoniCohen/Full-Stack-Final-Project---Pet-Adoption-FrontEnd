import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavBarAdmin from '../Components/NavBarAdmin';
import FormCheck from 'react-bootstrap/FormCheck'
import axios from 'axios';
import Select from "react-dropdown-select" 

export default function AddPets() {
  let colorPet = []
  let typePet = []
  let breedPet = []

  async function getColorsOfPets(){
    const resColors = await axios.get('http://localhost:8080/pets/color')
    return resColors
  }
  getColorsOfPets().then((resColors)=>{
    resColors.data.map((color)=>{
      colorPet.push({label:color.color_pet,value:color.id_color_pet})
    })
  })
  async function getTypeOfPets(){
    const resType = await axios.get('http://localhost:8080/pets/type')
    return resType
  }
  getTypeOfPets().then((resType)=>{
    resType.data.map((type)=>{
      typePet.push({label:type.type_pet,value:type.id_type_pet})
    })
  })
  async function getBreedOfPets(){
    const resBreed = await axios.get('http://localhost:8080/pets/breed')
    return resBreed
  }
  getBreedOfPets().then((resBreed)=>{
    resBreed.data.map((breed)=>{
      breedPet.push({label:breed.breed_of_pet,value:breed.id_breed_of_pet})
    })
  })

/*useEffect(()=>{
  console.log(colorPet)
},[])*/
  return (
    <>
    <NavBarAdmin/>
    <h1 className='ms-5'>Add a pet</h1>
    <div className='d-flex'>
    <Form className='form-add-pets'>
            <Form.Group className="mb-3" controlId="addPets">
            <Form.Label className='mt-1'>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                autoFocus
                
              />
              <Form.Label className='mt-1'>Image</Form.Label>
              <Form.Control
                type="file"
                placeholder="Image"
                autoFocus
                
              />
              <Form.Label className='mt-1'>Height</Form.Label>
              <Form.Control
                type="number"
                placeholder="Height"
                autoFocus
                
              />
              <Form.Label className='mt-1'>Weight</Form.Label>
              <Form.Control
                type="number"
                placeholder="Weight"
                autoFocus
               
              />
              <Form.Label className='mt-1'>Bio</Form.Label>
              <Form.Control
              className='textarea-bio-pet'
                as='textarea'
                placeholder="Bio"
                autoFocus
                
              />
 </Form.Group>
          </Form>
          <Form className='form-add-pets-additions'>
            <Form.Group className="mb-3" controlId="addPets">
              <Form.Label className='mt-1'>Dietary Restrictions</Form.Label>
              <Form.Control
              className='textarea-dietary-pets'
                as='textarea'
                placeholder="Dietary Restrictions"
                autoFocus
               
              />
      <Form.Label className='mt-1'>Hypoallergenic</Form.Label>
      <Form.Check label='Yes' type='radio' name='hypoallergenic'/>
      <Form.Check label='No' type='radio' name='hypoallergenic'/>
              <Form.Label className='mt-1'>Color</Form.Label>
              <Select labelField={colorPet.id_color_pet} options={colorPet} valueField={colorPet.color_pet} />
                
              <Form.Label className='mt-1'>Type</Form.Label>
              <Select labelField={typePet.id_type_pet} options={typePet} valueField={typePet.type_pet} />
              <Form.Label className='mt-1'>Breed</Form.Label>
              <Select labelField={breedPet.id_breed_of_pet} options={breedPet} valueField={breedPet.breed_of_pet} />
            </Form.Group>
          </Form>
    </div>
    
          <Button variant="primary" className='btn-add-pets' >
          Add Pet
        </Button>
    </>
    
  )
}

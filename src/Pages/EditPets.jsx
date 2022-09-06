import React from 'react'
import { useContext } from 'react'
import appContext from '../Context/appContext'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Select from "react-dropdown-select" 
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { useEffect } from 'react'

export default function EditPets({showModalEdit,handleCloseModalEdit,modalEditShow, id_pet}) {
      const {colorPet,breedPet} = useContext(appContext)
     const [petToEdit, setPetToEdit] = useState([])
    
    const [nameChanged,setNameChanged] = useState()
    const [heightChanged,setHeightChanged] = useState()
    const [weightChanged,setWeightChanged] = useState()
    const [bioChanged,setBioChanged] = useState()
    const [dietaryChanged,setDietaryChanged] = useState()
    const [hypoallergenicChanged,setHypoallergenicChanged] = useState()
    const [colorsChanged,setColorsChanged] = useState()
    const [breedsChanged,setBreedChanged] = useState()

    

    async function getPetById(){
      try{
        const res = await axios.get(`http://localhost:8080/pets/pet/${id_pet}`,{withCredentials:true})
        if(res){
          setPetToEdit(res.data)
          setNameChanged(res.data[0].name_pet)
          setHeightChanged(res.data[0].height_pet)
          setWeightChanged(res.data[0].weight_pet)
          setBioChanged(res.data[0].bio_pet)
          setDietaryChanged(res.data[0].dietary_restrictions_pet)
           }
      }catch(err){
        console.log(err)
      }
      
      }
   useEffect(()=>{
    getPetById()
   },[showModalEdit])

    function handleChangeName(e){
        setNameChanged(e.target.value)
    }
    function handleChangeHeight(e){
        setHeightChanged(e.target.value)
    }
    function handleChangeWeight(e){
        setWeightChanged(e.target.value)
    }
    function handleChangeBio(e){
        setBioChanged(e.target.value)
    }
    function handleChangeDietary(e){
        setDietaryChanged(e.target.value)
    }
    function handleChangeHypoallergenic(e){
        setHypoallergenicChanged(e.target.value)
    }
    function colorChanged(e){
        setColorsChanged(e[0].label)
    }
    function breedChanged(e){
        setBreedChanged(e[0].label)
    }

    const petToEditObject = {namePet:nameChanged,heightPet:heightChanged,weightPet:weightChanged,bioPet:bioChanged,hypoallergenicPet:hypoallergenicChanged,dietaryPet:dietaryChanged,colorsPet:colorsChanged,breedsPet:breedsChanged}

    async function editPet(){
      try{
        const res = await axios.put(`http://localhost:8080/pets/editpet/${id_pet}`,petToEditObject,{withCredentials:true})
        if(res){
          alert('Pet edited')
          handleCloseModalEdit()
        }
      }catch(err){
        console.log(err)
      }
      
    }

  return (
    <>
    <Modal show={modalEditShow} onHide={handleCloseModalEdit} >
        <Modal.Header>
            <Modal.Title>Edit Pet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='d-flex'>
    <Form className='form-add-pets'>
            <Form.Group className="mb-3" controlId="addPets">
            <Form.Label className='mt-1'>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                autoFocus
                onChange={handleChangeName}
                value={nameChanged}
              />
              <Form.Label className='mt-1'>Height</Form.Label>
              <Form.Control
                type="number"
                placeholder="Height"
                autoFocus
                onChange={handleChangeHeight}
                value={heightChanged}
              />
              <Form.Label className='mt-1'>Weight</Form.Label>
              <Form.Control
                type="number"
                placeholder="Weight"
                autoFocus
                onChange={handleChangeWeight}
                value={weightChanged}
              />
              <Form.Label className='mt-1'>Bio</Form.Label>
              <Form.Control
              className='textarea-bio-pet'
                as='textarea'
                placeholder="Bio"
                autoFocus
                onChange={handleChangeBio}
                value={bioChanged}
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
                onChange={handleChangeDietary}
                value={dietaryChanged}
              />
      <Form.Label className='mt-1'>Hypoallergenic</Form.Label>
      <Form.Check label='Yes' type='radio' name='hypoallergenic' value={true} onChange={handleChangeHypoallergenic}/>
      <Form.Check label='No' type='radio' name='hypoallergenic' value={false} onChange={handleChangeHypoallergenic}/>
              <Form.Label className='mt-1'>Color</Form.Label>
              <Select labelField={colorPet.id_color_pet} options={colorPet} valueField={colorPet.color_pet} onChange={colorChanged} />
              <Form.Label className='mt-1'>Breed</Form.Label>
              <Select labelField={breedPet.id_breed_of_pet} options={breedPet} valueField={breedPet.breed_of_pet} onChange={breedChanged} />
            </Form.Group>
          </Form>
    </div>
      <div className='d-flex flex-row'>
      <Button variant="primary" className='btn-edit-pet' onClick={editPet} >
          Save Changes
        </Button>
        <Button variant="primary" className='ms-2' onClick={handleCloseModalEdit} >
          Close
        </Button>
      </div>
          
        </Modal.Body>
    </Modal>
    
    </>
    
  )
}

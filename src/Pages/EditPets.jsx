import React from 'react'
import { useContext } from 'react'
import appContext from '../Context/appContext'
import NavBarAdmin from '../Components/NavBarAdmin'
import LogOut from '../Components/logOut'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Select from "react-dropdown-select" 
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal';

export default function EditPets({showModalEdit,handleCloseModalEdit,modalEditShow}) {

    const {namePet, setNamePet,heightPet, setHeightPet,weightPet, setWeightPet,bioPet, setBioPet,dietaryPet, setDietaryPet,hypoallergenicPet, setHypoallergenicPet,colorsPet, setColorsPet,typesPet, setTypesPet,breedsPet, setBreedsPet,colorPet, typePet, breedPet} = useContext(appContext)
    const [nameChanged,setNameChanged] = useState(namePet)
    const [heightChanged,setHeightChanged] = useState(heightPet)
    const [weightChanged,setWeightChanged] = useState(weightPet)
    const [bioChanged,setBioChanged] = useState(bioPet)
    const [dietaryChanged,setDietaryChanged] = useState(dietaryPet)
    const [hypoallergenicChanged,setHypoallergenicChanged] = useState(hypoallergenicPet)
    const [colorsChanged,setColorsChanged] = useState(colorsPet)
    const [typesChanged,setTypesChanged] = useState(typesPet)
    const [breedsChanged,setBreedChanged] = useState(breedsPet)

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
    function typeChanged(e){
        setTypesChanged(e[0].label)
    }
    function breedChanged(e){
        setBreedChanged(e[0].label)
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
                
              <Form.Label className='mt-1'>Type</Form.Label>
              <Select labelField={typePet.id_type_pet} options={typePet} valueField={typePet.type_pet} onChange={typeChanged} />
              <Form.Label className='mt-1'>Breed</Form.Label>
              <Select labelField={breedPet.id_breed_of_pet} options={breedPet} valueField={breedPet.breed_of_pet} onChange={breedChanged} />
            </Form.Group>
          </Form>
    </div>
    
          <Button variant="primary" className='btn-add-pets' >
          Save Changes
        </Button>
        <Button variant="primary" className='btn-add-pets' onClick={handleCloseModalEdit} >
          Close
        </Button>
        </Modal.Body>
    </Modal>
    
    </>
    
  )
}

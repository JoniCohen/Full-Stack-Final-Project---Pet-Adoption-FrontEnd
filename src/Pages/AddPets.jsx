import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavBarAdmin from '../Components/NavBarAdmin';
import FormCheck from 'react-bootstrap/FormCheck'

export default function AddPets() {
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
                type="text"
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
              <Form.Select>
                <option></option>
              </Form.Select>
              <Form.Label className='mt-1'>Type</Form.Label>
              <Form.Select>
                <option></option>
              </Form.Select>
              <Form.Label className='mt-1'>Breed</Form.Label>
              <Form.Select>
                <option></option>
              </Form.Select>
            </Form.Group>
          </Form>
    </div>
    
          <Button variant="primary" className='btn-add-pets' >
          Add Pet
        </Button>
    </>
    
  )
}

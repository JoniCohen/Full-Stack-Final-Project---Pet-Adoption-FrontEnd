import React from 'react'
import { Form, FormGroup, Button } from 'react-bootstrap'
import NavBarHome from '../Components/NavBarHome'

export default function Profile() {
  



  return (
    <>
    <NavBarHome />
    <div>
      <Form className='form-profile'>
      <h1>Profile Settings</h1>
        <FormGroup className="mb-3" controlId="profileSettings">
        <Form.Label className='mt-1'>First Name</Form.Label>
        <Form.Control
                type="text"
                placeholder="First Name"
                autoFocus
              />
              <Form.Label className='mt-1'>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                autoFocus
              />
              <Form.Label className='mt-1'>Phone Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Phone Number"
                autoFocus
              />
              <Form.Label className='mt-1'>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
              <Form.Label className='mt-1'>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                autoFocus
              />
              <Form.Label className='mt-1'>Bio</Form.Label>
              <Form.Control
              className='textarea-profile'
                as="textarea"
                placeholder="Write a short Bio"
                autoFocus
              />
        </FormGroup>
        <Button variant="primary" >
           Save Changes
          </Button>
      </Form>



    </div>
    </>
    
  )
}

import React from 'react'
import { Form } from 'react-bootstrap'

export default function Profile() {
  return (
    <div>
      <Form className='form-profile d-flex flex-column'>
        <input className='input-profile' type='text' placeholder='First Name' />
        <input className='input-profile' type='text' placeholder='Last Name'/>
        <input className='input-profile' type='email' placeholder='Email'/>
        <input className='input-profile' type='password' placeholder='Password'/>
        <input className='input-profile' type='number' placeholder='Phone Number'/>
        <textarea className='textarea-profile' placeholder='Write a short Bio:'/>
      </Form>



    </div>
  )
}

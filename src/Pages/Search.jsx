import React from 'react'
import { Button } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'


export default function Search() {

    const navigate = useNavigate()
    function returnHome(){
      navigate('/')
    }
  return (
    <>
    <Button onClick={returnHome} variant='dark'>Return to Home</Button>
    <div className='d-flex'>
      <div className='search-filters' >
        <h3 className='border-bottom p-1'>Search</h3>
        <div>

        </div>
      </div>
      <div>pets</div>
    </div>
    </>
    
    
  )
}

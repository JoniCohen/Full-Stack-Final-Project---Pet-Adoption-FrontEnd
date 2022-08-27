import React from 'react'
import Button from 'react-bootstrap/Button';


export default function Pet(props) {
    const {pets} = props
    
  return (
    <div className='pet-card pt-3 ps-2 ms-3 mb-3'>
        <div className='d-flex flex-row'>
        <img src={pets.image_pet} className='img-pet-card' alt="imagePet" />
        <div className='ms-2'>
        <Button>Details</Button>
        <h4>{pets.name_pet} </h4>
        <h6>{pets.type_pet} </h6>
        </div>
        </div>
        <div className='mt-2'>
        <span className='ms-2'>Color: {pets.color_pet}</span>
        <span className='ms-2'>Breed: {pets.breed_of_pet}</span>
        </div>
        <div className='mt-2'>
        <span className='ms-2'>Height: {pets.height_pet} cm</span>
        <span className='ms-2'>Weight: {pets.weight_pet} kg</span>
        </div>
    </div>
  )
}

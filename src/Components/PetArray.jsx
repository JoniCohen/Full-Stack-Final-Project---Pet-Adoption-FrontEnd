import React from 'react'
import Pet from './Pet'

export default function PetArray(props) {
    const {pet,showPets,getPetsById,getPetsByType} = props

  return (
    <ul className='pet-list'>
        {pet.map((pets)=>(
            <Pet 
            key={pets.id_pet}
            pets = {pets}
            showPets={showPets}
            getPetsById={getPetsById}
            getPetsByType={getPetsByType}
            />
        ))}
    </ul>
  )
}

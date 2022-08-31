import React from 'react'
import Pet from './Pet'

export default function PetArray(props) {
    const {pet,search,getPetsById} = props

  return (
    <ul className='pet-list'>
        {pet.map((pets)=>(
            <Pet 
            key={pets.id_pet}
            pets = {pets}
            search={search}
            getPetsById={getPetsById}
            />
        ))}
    </ul>
  )
}

import React from 'react'
import axios from 'axios'
import IPatient from '../types/IPatient'

const PatientCard = ({name, lastName, INR}: IPatient) => {
  return (
    <article>
      <p>{name} {lastName}</p>
      <p>{INR}</p>
      <button>UPDATE</button>
      <button>DELETE</button>
    </article>
  )
}

export default PatientCard


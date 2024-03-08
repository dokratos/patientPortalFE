import React, { MouseEventHandler } from 'react'
import axios from 'axios'
import IPatient from '../types/IPatient'

type PatientCardProps = {
  id: number,
  name: string, 
  lastName: string, 
  INR: number,
  deletePatient: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) => void;
}

const PatientCard = ({name, lastName, INR, id, deletePatient}: PatientCardProps) => {
  return (
    <article>
      <p>{name} {lastName}</p>
      <p>{INR}</p>
      <button
      onClick={() => console.log("click")}
      >UPDATE</button>
      <button
      onClick={e => deletePatient(e, id)}
      >DELETE</button>
    </article>
  )
}

export default PatientCard


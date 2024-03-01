import React from 'react'
import IPatient from '../types/IPatient'
import axios from 'axios'

const PatientCard = (props: IPatient) => {
  return (
    <article>
      <p>{props.name} {props.lastname}</p>
      <p>{props.INR}</p>
      <button>UPDATE</button>
      <button>DELETE</button>
    </article>
  )
}

export async function getStaticProps() {
  const res = await axios.get('http://localhost:8080/')
  const patients = await res.data();
 
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      patients,
    },
  }
}


export default PatientCard
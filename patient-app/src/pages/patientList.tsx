import React from 'react'
import axios from 'axios'
import IPatient from '../app/types/IPatient'
import PatientCard from '../app/components/patientCard'

export async function getStaticProps() {
  const res = await axios.get('http://localhost:8080/portal/patients');
  const patients: IPatient[] = await res.data();
  console.log(patients);
 
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      patients: patients,
    },
  }
}

const patientList = () => {
  return (
    <div>  
      {/* {patients.map((patient: IPatient) => (
      <PatientCard
      key={patient.id} 
      name={patient.name} 
      lastname={patient.lastname} 
      INR={patient.INR} 
      id={patient.id}/>
    ))} */}
    </div>
  )
}

export default patientList

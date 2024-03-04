import Image from "next/image";
import axios from 'axios'
import PatientCard from './components/patientCard';
import Form from './components/form';
import IPatient from './types/IPatient';
import PatientList from '../pages/patientList';

export async function fetchPatients() {
  const res = await axios.get('http://localhost:8080/portal/patients');
  // const patients: IPatient[] = await res.data();
  console.log(res);
 return res.data;
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  // return {
  //   props: {
  //     patients: patients,
  //   },
  // }
}

export default async function Home() {
  const data = await fetchPatients();
  return (
    <main>
      <h1>PATIENT LIST</h1>
      <Form/>
      {data.map((patient: IPatient) => 
        <PatientCard
      key={patient.id} 
      name={patient.name} 
      lastname={patient.lastname} 
      INR={patient.INR} 
      id={patient.id}/>
      )}
    </main>
  );
}


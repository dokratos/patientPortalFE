import Image from "next/image";
import axios from 'axios'
import PatientCard from './components/patientCard';
import Form from './components/form';
import IPatient from './types/IPatient';

export async function fetchPatients() {
  const res = await axios.get('http://localhost:8080/portal/patients');
  return res.data;
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
        lastName={patient.lastName} 
        INR={patient.INR} 
        id={patient.id}/>
        )}
    </main>
  );
}


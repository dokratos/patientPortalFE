"use client";

import Image from "next/image";
import axios from 'axios'
import { MouseEventHandler, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import PatientCard from './components/patientCard';
import Form from './components/form';

import IPatient from './types/IPatient';

export async function deletePatient(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) {
  console.log("deleting..")
  e.preventDefault();
  const res = await axios.delete(`http://localhost:8080/portal/patients/${id}`, {data: id});
  console.log(res);
  if (res.status !== 204) {
    throw new Error("Failed to remove patient!");
  }
}

export async function fetchPatients() {
  const res = await axios.get('http://localhost:8080/portal/patients');
  if (res.status !== 200) {
    console.log(res.status);
    throw new Error("Failed to fetch data");
  }
  return res.data;
}

export default function Home() {
  const [patients, setPatients] = useState<IPatient[]>([]);
  const router = useRouter();
  const params = useSearchParams();

  // const [displaySuccessMessage, setDisplaySuccessMessage] = useState({
  //   show: false,
  //   type: "", // either 'add' or 'update'
  // });

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPatients();
      setPatients(data);
    }
    fetchData();
  }, []);

  return (
    <main>
      <h1>PATIENT LIST</h1>
      <Form/>
      {patients.map((patient: IPatient) => 
        <PatientCard
        key={patient.id} 
        name={patient.name} 
        lastName={patient.lastName} 
        INR={patient.INR} 
        id={patient.id}
        deletePatient={deletePatient}/>
        )}
    </main>
  );
}


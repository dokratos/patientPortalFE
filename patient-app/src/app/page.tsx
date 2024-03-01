import Image from "next/image";
import PatientCard from './components/patientCard';
import Form from './components/form';

export default function Home() {
  return (
    <main>
      <h1>PATIENT LIST</h1>
      <Form/>
      {/* <PatientCard /> */}
    </main>
  );
}

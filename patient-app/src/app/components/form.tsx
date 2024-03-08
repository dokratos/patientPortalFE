"use client"

import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { useEffect, useState } from 'react'
import IPatient from '../types/IPatient'
import IPatientRequest from '../types/IPatientRequest'

async function createPatient (patientData: IPatientRequest) {
  const postPatient = await axios.post('http://localhost:8080/portal/patients', patientData, {
    headers: {
      'Content-Type': 'application/json'
    }
  });

  // if (!res.ok) {
  //   throw new Error("Failed to create data");
  // }
  console.log(postPatient);
  return postPatient.data;
}

const Form = () => {
  // const router = useRouter();
  const [formData, setFormData] = useState<IPatientRequest>({ 
    name: "",
    lastName: "",
    INR: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const handlePostRequest = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createPatient(formData);
  }


  return (
    <div>
      <form onSubmit={handlePostRequest}>
        <input
        type='text'
        name='name'
        placeholder='first name' 
        onChange={(event) =>
          setFormData({ ...formData, name: event.target.value })
        }
        />
        <input
        type='text'
        name='lastname'
        placeholder='last name'
        onChange={(event) =>
          setFormData({ ...formData, lastName: event.target.value })
        }
        />
        <input 
        type='number'
        name='INR'
        step={0.01}
        placeholder='0.00'
        onChange={(event) =>
          setFormData({ ...formData, INR: parseFloat(event.target.value) })
        }
        />
        <button>
          ADD
        </button>
      </form>
    </div>
  )
}

Form.propTypes = {}

export default Form
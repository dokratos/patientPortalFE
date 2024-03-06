import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Form = () => {


  async function createPatient (formData: FormData) {
    // const []
    
    const patientData = {
      name: formData.get('name'),
      lastName: formData.get('lastname'),
      INR: formData.get('INR'),
    }
    console.log(patientData);
    const postPatient = await axios.post('http://localhost:8080/portal/patients', patientData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return postPatient;
  }


  return (
    <div>
      <form onSubmit={createPatient}>
        <input
        type='text'
        name='name'
        placeholder='first name' />
        <input
        type='text'
        name='lastname'
        placeholder='last name'/>
        <input 
        type='number'
        name='INR'
        step={0.01}
        placeholder='0.00'
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
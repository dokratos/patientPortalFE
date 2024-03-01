import React from 'react'
import PropTypes from 'prop-types'

const Form = () => {
  return (
    <div>
      <form>
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
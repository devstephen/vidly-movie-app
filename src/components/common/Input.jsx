import React from 'react'

const Input = ({ name, onChange, username, label, value }) => {
  return (
    <div className='form-group'>
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        type='text'
        className='form-control'
        required
      />
    </div>
  )
}

export default Input

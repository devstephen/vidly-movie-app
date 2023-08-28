import React from 'react'

const Input = ({ name, onChange, error, label, value }) => {
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
      />
      {error && <div className='alert alert-danger'>{error}</div>}
    </div>
  )
}

export default Input

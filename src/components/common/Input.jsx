import React from 'react'

const Input = ({ name, error, label, ...rest }) => {
  return (
    <div className='form-group'>
      <label htmlFor={name}>{label}</label>
      <input {...rest} name={name} id={name} className='form-control' />
      {error && <div className='mt-3 alert alert-danger'>{error}</div>}
    </div>
  )
}

export default Input

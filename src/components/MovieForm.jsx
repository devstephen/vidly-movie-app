import React from 'react'

const MovieForm = ({ match, history }) => {
  return (
    <div>
      <h1 className='mb-5'>MovieForm {match.params.id}</h1>
      <button
        className='btn btn-primary px-4 py-10'
        onClick={() => history.push('/movies')}
      >
        Save
      </button>
    </div>
  )
}

export default MovieForm

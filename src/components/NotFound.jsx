import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='breadcrumb not-found'>
      <h1>Not Found</h1>
      <p>
        The page you are looking for does not seem to exist. <br />
        Check the URL or go back to <Link to='/'>Home</Link>
      </p>
    </div>
  )
}

export default NotFound

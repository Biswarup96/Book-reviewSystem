import React from 'react'
import "../Notfound/Notfound.css"
import { Link } from 'react-router-dom'

export const Notfound = () => {
  return (
    <section className='Not-found'>
      <div className="container not-found-container">
        <h1>404</h1>
        <h3>Opps Page Not Found</h3>
        <Link to={'/'} className='btn btn-border'>Go To Home</Link>
      </div>
    </section>
  )
}

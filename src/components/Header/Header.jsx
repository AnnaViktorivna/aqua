import React from 'react'
import css from './Header.module.css'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className={css.header}>
        <h1>TravelTrucks</h1>
        <Link to="/" >Home</Link>
        <Link to="/catalog">Catalogs</Link>
    </div>

  )
}

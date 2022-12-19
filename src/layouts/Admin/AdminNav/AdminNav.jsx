import React from 'react'
import AdminButton from '../AdminButton/AdminButton';
import "./AdminNav.css";

export default function AdminNav() {
  return (
    <div className="AdminNav d-flex flex-column">
      <AdminButton to="/admin/home" name="Home" />
      <AdminButton to="/admin/concerts" name="Concerts" />
      <AdminButton to="/admin/artists" name="Artists" />
      <AdminButton to="/admin/venues" name="Venues" />
      <div className='mt-auto'>
      <AdminButton to="/" name="Back to site" />
      </div>
    </div>
  )
}

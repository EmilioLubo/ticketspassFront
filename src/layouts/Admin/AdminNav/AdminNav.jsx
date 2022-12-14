import React from 'react'
import AdminButton from '../AdminButton/AdminButton';
import "./AdminNav.css";

export default function AdminNav() {
  return (
    <div className="AdminNav">
      <AdminButton to="/admin/home" name="Home" />
      <AdminButton to="/admin/concerts" name="Conciertos" />
      <AdminButton to="/admin/artists" name="Artistas" />
      <AdminButton to="/admin/venues" name="Lugares" />
      <AdminButton to="/" name="Volver al sitio" />
    </div>
  )
}

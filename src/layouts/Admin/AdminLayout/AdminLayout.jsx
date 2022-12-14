import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNav from '../AdminNav/AdminNav'
import "./AdminLayout.css"

export default function AdminLayout() {
  return (
    <div className="AdminLayout">
      <AdminNav />
      <div className='AdminMain p-5'>
      <Outlet />
      </div>
    </div>
  )
}

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../api/url';
import AdminTable from '../../utils/AdminTable/AdminTable';
import "./AdminVenues.css";

export default function AdminVenues() {
  const [venues, setVenues] = useState([])
  useEffect(() => {
    getVenues();
  }, [])

  const getVenues = async() => {
    try {
      let res = await axios.get(`${BASE_URL}/api/venues`);
      setVenues(res.data.response);
    }catch(error) {
      console.log(error.message)
    }
  }

  return (
    <div>
      <Link to="/admin/concerts/new">
        <Button variant="success" className="mb-4">Nuevo Lugar</Button>
      </Link>
      <AdminTable title="Lugares" collection={venues} editRoute="/admin/venues/edit/" deleteOnClick={() => {}} />
    </div>
  )
}
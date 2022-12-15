import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../api/url';
import AdminTable from '../../utils/AdminTable/AdminTable';
import "./AdminArtists.css";

export default function AdminArtists() {
  const [artists, setArtists] = useState([])
  useEffect(() => {
    getArtists();
  }, [])

  const getArtists = async() => {
    try {
      let res = await axios.get(`${BASE_URL}/api/artists`);
      setArtists(res.data.data);
    }catch(error) {
      console.log(error.message)
    }
  }

  return (
    <div>
      <Link to="/admin/artists/new">
        <Button variant="success" className="mb-4">Nuevo Artista</Button>
      </Link>
      <AdminTable title="Artistas" collection={artists} editRoute="/admin/artists/edit/" deleteOnClick={() => {}} />
    </div>
  )
}

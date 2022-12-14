import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../api/url";
import AdminTable from "../../utils/AdminTable/AdminTable";
import "./AdminConcerts.css";

export default function AdminConcerts() {
  const [concerts, setConcerts] = useState([]);
  useEffect(() => {
    getConcerts();
  }, []);

  const getConcerts = async () => {
    try {
      let res = await axios.get(`${BASE_URL}/api/concerts`);
      setConcerts(res.data.response);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <Link to="/admin/concerts/new">
        <Button variant="success" className="mb-4">Nuevo Concierto</Button>
      </Link>
      <AdminTable title="Conciertos" collection={concerts} editRoute="/admin/concerts/edit/" deleteOnClick={() => {}} />
    </div>
  );
}

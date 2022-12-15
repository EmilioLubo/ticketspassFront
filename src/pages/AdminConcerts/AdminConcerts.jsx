import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AdminTable from "../../utils/AdminTable/AdminTable";
import adminConcertsActions from "../../redux/actions/adminConcertsActions";
import "./AdminConcerts.css";
import { Spinner } from "react-bootstrap";

export default function AdminConcerts() {
  const dispatch = useDispatch();
  const { getInitialData } = adminConcertsActions;
  const { concerts, message, loading } = useSelector(store => store.adminConcerts);

  useEffect(() => {
    dispatch(getInitialData());
  }, []);

  return (
    <div>
      <Link to="/admin/concerts/new">
        <Button variant="success" className="mb-4">
          Nuevo Concierto
        </Button>
      </Link>
      {loading ? (
        <div className="d-flex justify-content-center">
          <Spinner className="text-center" />
        </div>
      ) : concerts.length > 0 ? (
        <AdminTable
          title="Conciertos"
          collection={concerts}
          editRoute="/admin/concerts/edit/"
          deleteOnClick={() => {}}
        />
      ) : (
        <h2 className="text-center text-main">{message}</h2>
      )}
    </div>
  );
}

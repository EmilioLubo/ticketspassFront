import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { BASE_URL } from "../../api/url";

export default function ProcessPayment() {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
    useEffect(() => {
      let payment_id = searchParams.get("payment_id");
      let status = searchParams.get("status");
      if(payment_id && status === "approved") {
        try {
          let res = axios.get(`${BASE_URL}/api/cart/feedback?payment_id=${payment_id}&status=${status}`);
          setLoading(false);
          setMessage(res.data.message);
        } catch(error) {
          setLoading(false);
          setMessage(error.response ? error.response.data.message || error.response.data : error.message)
        }
      }

    }, [])
  
  return (
    
    <div>
      <h1>Payment</h1>
      {loading ? (
        <>
          <h3>Processing...</h3>{" "}
          <div className="d-flex justify-content-center">
            <Spinner className="text-center mt-5" />
          </div>
        </>
      ) : (
        <h3>Processed</h3>
      )}
    </div>
  );
}

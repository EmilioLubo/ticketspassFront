import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { BASE_URL } from "../../api/url";

export default function ProcessPayment() {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [searchParams] = useSearchParams();
  const { token } = useSelector(store => store.user);

  useEffect(() => {
    processPayment(); //eslint-disable-next-line
  }, []);

  const processPayment = async () => {
    let payment_id = searchParams.get("payment_id");
    let status = searchParams.get("status");
    if (payment_id && status === "approved") {
      try {
        let headers = {
          headers: {
            Authorization: `Bearer ${
              process.env.REACT_APP_ACCESS_TOKEN ||
              "TEST-8860171556781549-121815-67b8e761a44a0a285b0cf70d68a80aac-1267029718"
            }`,
          },
        };
        let resPayment = await axios.get(`https://api.mercadopago.com/v1/payments/${payment_id}`, headers);
        if (resPayment.data.status === "approved") {
          console.log(resPayment);
          let userHeaders = { headers: { Authorization: `Bearer ${token}` } };
          let res = await axios.post(
            `${BASE_URL}/api/orders/`,
            {
              payment_id,
              status: resPayment.data.status,
              date: resPayment.data.date_approved,
              orderId: resPayment.data.order.id,
              transaction_amount: resPayment.data.transaction_amount,
            },
            userHeaders
          );
          setMessage(res.data.message);
        } else {
          console.log("not approved");
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setMessage(error.response ? error.response.data.message || error.response.data : error.message);
      }
    }
    setLoading(false);
  };

  return (
    <div>
      <h1 className="text-center mt-5 ">Payment</h1>
      {loading ? (
        <>
          <h3 className="text-center mt-5 ">Processing...</h3>{" "}
          <div className="d-flex justify-content-center">
            <Spinner className="text-center mt-5" />
          </div>
        </>
      ) : (
        <div className="mt-5">
          <h3 className="text-center">{message}</h3>
        </div>
      )}
    </div>
  );
}

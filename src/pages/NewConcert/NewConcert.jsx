import React, { useEffect, useState } from "react";
import { Field, FieldArray, Form, Formik } from "formik";
import "./NewConcert.css";
import { Button, Spinner } from "react-bootstrap";
import { BASE_URL } from "../../api/url";
import axios from "axios";
import "./NewConcert.css";
import Swal from "sweetalert2";

const initialValues = {
  name: "",
  photo: "",
  banner: "",
  artists: [""],
  venue: "",
  date: "",
  type: "",
  description: "",
  category: {
    name: "",
    price: 0,
    area: "",
  },
};

export default function NewConcert() {
  const [venues, setVenues] = useState([]);
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const getVenues = () => axios.get(`${BASE_URL}/api/venues`);
    const getArtists = () => axios.get(`${BASE_URL}/api/artists`);
    Promise.all([getVenues(), getArtists()])
      .then(results => {
        let [venuesRes, artistsRes] = results;
        setVenues(venuesRes.data.response);
        setArtists(artistsRes.data.data);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        setMessage(error.message);
      });
  }, []);

  const sendData = async (values, resetForm) => {
    const headers = {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTc3ZDc2ZDNhNzRkYTJlNzE3OGQ3MCIsIm5hbWUiOiJJdsOhbiIsInBob3RvIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUxtNXd1MG96NXBVSjZ3WWVCdDdsNm1jaWxIbzRGRkRQTVdEMlJ1cTk0Qjc9czI4OC1wLXJ3LW5vIiwibG9nZ2VkIjp0cnVlLCJyb2xlIjoidXNlciIsImlhdCI6MTY3MTA2NzY5MSwiZXhwIjoxNjcxMTU0MDkxfQ.r9Gq8bD4uF0AZx14TMoJczBLnl9YL06yc4pSjNM9FJw`,
      },
    };
    try {
      let res = await axios.post(`${BASE_URL}/api/concerts`, values, headers);
      Swal.fire({
        title: "Success",
        text: res.data.message,
        icon: "success"
      });
      resetForm(initialValues)
    }catch(error) {
      if(error.response) {
        if(Array.isArray(error.response.data.message)) {
          Swal.fire({
            title: "error",
            text: error.response.data.message.join("\n"),
            icon: "error"
          })
        } else {
          Swal.fire({
            title: "error",
            text: error.response.data.message || error.response.data,
            icon: "error"
          })
        }
      } else {
        Swal.fire({
          title: "error",
          text: error.message,
          icon: "error"
        })
      }
    }

  };

  return (
    <div>
      <h1>New Concert</h1>
      {loading ? (
        <div className="d-flex justify-content-center">
          <Spinner className="text-center" />
        </div>
      ) : venues.length > 0 && artists.length > 0 ? (
        <Formik
          initialValues={initialValues}
          onSubmit={(values, {resetForm}) => {
            sendData(values, resetForm);
          }}
        >
          {({ values }) => (
            <Form className="Form">
              <div className="Form-col">
                <label htmlFor="name">Name:</label>
                <Field name="name" placeholder="Name" />
              </div>
              <div className="Form-col">
                <label htmlFor="photo">Photo:</label>
                <Field name="photo" placeholder="Photo" />
              </div>
              <div className="Form-col">
                <label htmlFor="banner">Banner:</label>
                <Field name="banner" placeholder="Banner" />
              </div>
              <div className="Form-col">
                <label htmlFor="date">Date:</label>
                <Field name="date" type="datetime-local" />
              </div>
              <div>
                <label htmlFor="type">Type:</label>
                <br />
                <Field as="select" name="type">
                  <option value="">-- Select Type --</option>
                  <option value="concert">Concert</option>
                  <option value="festival">Festival</option>
                </Field>
              </div>

              <div>
                <label htmlFor="venue">Venue:</label>
                <br />
                <Field as="select" name="venue">
                  <option value="">-- Select Venue --</option>
                  {venues.map(venue => (
                    <option key={venue._id} value={venue._id}>
                      {venue.name}
                    </option>
                  ))}
                </Field>
              </div>

              <div className="Form-category ms-3">
                <FieldArray
                  name="artists"
                  render={arrayHelpers => (
                    <div>
                      <h3 className="fs-4 mt-2">Artists</h3>
                      {values.artists.map((artistValue, index) => (
                        <div key={index} className="mb-4">
                          <Button
                            type="button"
                            className="me-2 px-2 py-0"
                            onClick={() => arrayHelpers.remove(index)}
                            variant="danger"
                          >
                            X
                          </Button>
                          <Field as="select" name={`artists.${index}`} className="FormConcert-select">
                            <option value="">-- Select Artist --</option>
                            {artists.map(artist => (
                              <option key={artist._id} value={artist._id}>
                                {artist.name}
                              </option>
                            ))}
                          </Field>
                        </div>
                      ))}
                      <Button type="button" onClick={() => arrayHelpers.push("")}>
                        Add Artist
                      </Button>
                    </div>
                  )}
                />
              </div>

              <div className="Form-category ms-3">
                <h3 className="fs-4 mt-2">Category</h3>
                <div className="Form-col">
                  <label htmlFor="categoryName">Category Name:</label>
                  <Field name="category.name" id="categoryName" type="text" />
                </div>
                <div className="Form-col">
                  <label htmlFor="categoryPrice">Category Price:</label>
                  <Field name="category.price" id="categoryPrice" type="number" />
                </div>
                <div className="Form-col">
                  <label htmlFor="categoryArea">Category Area:</label>
                  <Field name="category.area" id="categoryArea" type="text" />
                </div>
              </div>
              <div className="Form-col">
                <label htmlFor="description">Description:</label>
                <Field as="textarea" name="description"></Field>
              </div>
              <Button type="submit" variant="success">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      ) : (
        <h2 className="text-center text-main">{message}</h2>
      )}
    </div>
  );
}

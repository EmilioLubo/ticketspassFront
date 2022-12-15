import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ConcertCard.css";

export default function ConcertCard({ concert }) {
  return (
    <Card className="Concert-card border-0 h-100">
      <Link to={`/concerts/${concert._id}`} className="stretched-link">
        <div className="Concert-card-imageContainer">
          <Card.Img className="Concert-card-image fluid" variant="top" src={concert.photo} />
        </div>
      </Link>
      <Card.Body>
        <Card.Text className="text-capitalize">
          {concert.venue.name} / <span className="text-main fw-bold">{concert.type}</span>
        </Card.Text>
        <Card.Title className="text-capitalize mb-0">{concert.name}</Card.Title>
        
      </Card.Body>
      <Card.Footer className="bg-white">
      <Card.Text className="text-muted mt-auto">{concert.date.split("T")[0].split("-").reverse().join("-")}</Card.Text>
      </Card.Footer>
    </Card>
  );
}

import React from 'react'
import { Card } from 'react-bootstrap'
import './ConcertCard.css'

export default function ConcertCard({concert}) {
  return (
    <Card className="Concert-card border-0 mb-5">
        <a href="/concerts/id" className="stretched-link">
        <div className="Concert-card-imageContainer">
          <Card.Img
            className="Concert-card-image fluid"
            variant="top"
            src="https://pukaomusic.com/noticias/wp-content/uploads/2020/02/lollapalooza-argentina.jpg"
          />
        </div>
        </a>
        <Card.Body>
            <Card.Text className='text-capitalize'>{concert.venue.name} / <span className="text-main fw-bold">{concert.type}</span></Card.Text>
          <Card.Title className='text-capitalize'>
            {concert.name}
          </Card.Title>
          <Card.Text className="text-muted">{concert.date.split("T")[0].split("-").reverse().join("-")}</Card.Text>
        </Card.Body>
      </Card>
  )
}

// Imports
import Card from 'react-bootstrap/Card';
import React from 'react'

//Styles
import './TopArtist.css'
const axios = require('axios');

export default function M2_TOP_ARTIST() {
    return (
        <>
            <div className='module2-artist-container'>
                <h2 className='module2-h2'>Top trending artists</h2>
                <div className='module2-cards-artist'>
                    {/* CARD 1 */}
                    <Card className="bg-dark text-white module2-cards">
                        <Card.Img className='module2-cards-image' src="https://i.scdn.co/image/ab67616d0000b27373c4c5f774c0b078e746d64f" alt="Card image" />
                        <Card.ImgOverlay className='module2-cards-overlay'>
                            <Card.Text className='module2-cards-text'>Nicki Nicole</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    {/* CARD 2 */}
                    <Card className="bg-dark text-white module2-cards">
                        <Card.Img className='module2-cards-image' src="https://jenesaispop.com/wp-content/uploads/2022/03/daddy-yankee-legendaddy-696x637.jpg" alt="Card image" />
                        <Card.ImgOverlay className='module2-cards-overlay'>
                            <Card.Text className='module2-cards-text'>Daddy Yankee</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    {/* CARD 3 */}
                    <Card className="bg-dark text-white module2-cards">
                        <Card.Img className='module2-cards-image' src="https://c-fa.cdn.smule.com/rs-s35/arr/80/a1/f1c068e7-5f7d-4367-b7e1-fa1c20213180.jpg" alt="Card image" />
                        <Card.ImgOverlay className='module2-cards-overlay'>
                            <Card.Text className='module2-cards-text'>Romeo Santos</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    {/* BTN & REDIRECT */}
                    <div className='module2-btn-artist'>
                        <button className='module2-btn-artist-text'>See More</button>
                    </div>
                </div>
            </div>
        </>
    )
}
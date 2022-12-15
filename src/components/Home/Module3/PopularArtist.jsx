// Imports
import Card from 'react-bootstrap/Card';
import React from 'react'
import { BASE_URL } from '../../../api/url';
import { useEffect, useState } from 'react';

//Styles
import './PopularArtist.css'

export default function PopularArtist() {
    const [data, setData] = useState([])
    useEffect(() => {
        getConcerts()
    }, [])
    async function getConcerts() {
        const response = await fetch(`${BASE_URL}/api/concerts`)
        const data = await response.json()
        console.log(data)
        // Here you can manage the total of artists you want to show - BB
        const artists = data.response.slice(0, 7)
        // Avoid promise setting a state after component unmount - BB
        setData(artists)
    }
    return (
        <>
            <div className='module2-artist-container'>
                <h2 className='module2-h2'>Incoming Concerts</h2>
                <div className='module2-cards-artist'>
                    {data.map((concerts) => {
                        return (
                            <Card className="bg-dark text-white module2-cards">
                                <Card.Img className='module2-cards-image' src={concerts.photo} alt="Card image" />
                                <Card.ImgOverlay className='module2-cards-overlay'>
                                    <Card.Text className='module2-cards-text'>{concerts.name}</Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        )
                    }
                        )}
                    {/* BTN & REDIRECT */}
                    <div className='module2-btn-artist'>
                        <button className='module2-btn-artist-text'>See More</button>
                    </div>
                </div>
            </div>
        </>
    )
}
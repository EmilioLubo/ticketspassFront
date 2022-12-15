// Imports
import Card from 'react-bootstrap/Card';
import React, { useEffect } from 'react'
import {BASE_URL} from '../../../api/url'
import { useState } from 'react';
//Styles
import './TopArtist.css'
import { useNavigate } from 'react-router';

export default function TopArtist() {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    useEffect(() => {
        getArtist()
    }, [])
    async function getArtist() {
        const response = await fetch(`${BASE_URL}/api/artists`)
        const data = await response.json()
        // Here you can manage the total of artists you want to show - BB
        const artists = data.data.slice(0, 7)
        // Avoid promise setting a state after component unmount - BB
        setData(artists)
    }
    return (
        <>
            <div className='module2-artist-container'>
                <h2 className='module2-h2'>Our Trending Artists</h2>
                <div className='module2-cards-artist'>
                    {/* CARD 1 */}
                    {data.map((artist) => {
                        return (
                            <Card key={artist._id} className="bg-dark text-white module2-cards">
                                <Card.Img className='module2-cards-image' src={artist.photo} alt="Card image" />
                                <Card.ImgOverlay className='module2-cards-overlay'>
                                    <Card.Text className='module2-cards-text'>{artist.name}</Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        )
                    }
                    )}
                    {/* BTN & REDIRECT */}
                    <div className='module2-btn-artist'>
                        <button className='module2-btn-artist-text' onClick={e=> navigate('/artists')}>See More</button>
                    </div>
                </div>
            </div>
        </>
    )
}
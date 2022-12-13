// Imports
import Card from 'react-bootstrap/Card';
import React from 'react'

//Styles
import './PopularArtist.css'

export default function PopularArtist() {
    return (
        <>
            <div className='module2-artist-container'>
                <h2 className='module2-h2'>Most Popular artists</h2>
                <div className='module2-cards-artist'>
                    {/* CARD 1 */}
                    <Card className="bg-dark text-white module2-cards">
                        <Card.Img className='module2-cards-image' src="https://i.pinimg.com/550x/f9/f3/77/f9f377dcc36e7da2677a807e1f8802ba.jpg" alt="Card image" />
                        <Card.ImgOverlay className='module2-cards-overlay'>
                            <Card.Text className='module2-cards-text'>Coldplay</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    {/* CARD 2 */}
                    <Card className="bg-dark text-white module2-cards">
                        <Card.Img className='module2-cards-image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVDHBqZpasvidmQlcGEm9tp67jiNglciahlL7xvPtQdGVahHCXMqjdB2HJej4Du-gxzDc&usqp=CAU" alt="Card image" />
                        <Card.ImgOverlay className='module2-cards-overlay'>
                            <Card.Text className='module2-cards-text'>Rihanna</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    {/* CARD 3 */}
                    <Card className="bg-dark text-white module2-cards">
                        <Card.Img className='module2-cards-image' src="https://c-fa.cdn.smule.com/rs-s40/arr/4e/6b/1b42344c-74cf-42e0-946b-c07a8bd22c71.jpg" alt="Card image" />
                        <Card.ImgOverlay className='module2-cards-overlay'>
                            <Card.Text className='module2-cards-text'>Drake</Card.Text>
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
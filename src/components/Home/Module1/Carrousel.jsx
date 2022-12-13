// This module is the first module of the home page, it contains only the initial carrousel.


// Imports
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

// Styles
import './Carrousel.css';

// Export the module
export default function M1Carrousel() {
    return (
            <Carousel fade className='sssdcontainer'>
              <Carousel.Item className='carrousel-container'>
                <img
                  className="home-module-carrousel "
                  src="https://festivalvillamaria.com/imagenes/festivales-y-fiestas/cosquin-rock/banner-festival-cosquin-rock-2023-001.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item className='carrousel-container'>
                <img
                  className="home-module-carrousel "
                  src="https://2023-ubbidubbifestival-com.imgix.net/2022/11/314916f5-horizontal.jpg"
                  alt="Second slide"
                />
        
              </Carousel.Item>
              <Carousel.Item className='carrousel-container'>
                <img
                  className="home-module-carrousel"
                  src="https://umfworldwide.com/wp-content/uploads/2022/10/2023-phase-1-thumb.png"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          )
        }

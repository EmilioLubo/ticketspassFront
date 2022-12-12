// This module is the first module of the home page, it contains only the initial carrousel.


// Imports
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

// Styles
import './Carrousel.css';

// Export the module
export default function M1_Carrousel() {
    return (
            <Carousel fade>
              <Carousel.Item className='home-module-carrousel'>
                <img
                  className=" w-100 home-module-carrousel-image"
                  src="https://images.pagina12.com.ar/styles/focal_16_9_960x540/public/2022-10/659173-11-10-2022-a-tres-anios-de-su.jpg?itok=izbJu13_"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item className='home-module-carrousel'>
                <img
                  className=" w-100"
                  src="https://2023-ubbidubbifestival-com.imgix.net/2022/11/314916f5-horizontal.jpg"
                  alt="Second slide"
                />
        
              </Carousel.Item>
              <Carousel.Item className='home-module-carrousel'>
                <img
                  className=" w-100"
                  src="https://umfworldwide.com/wp-content/uploads/2022/10/2023-phase-1-thumb.png"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          )
        }
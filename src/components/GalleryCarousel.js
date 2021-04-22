import Carousel from 'react-bootstrap/Carousel'

import image_1 from "../images/image_1.jpeg"
import image_2 from "../images/image_2.jpeg"
import image_3 from "../images/image_3.png"
import "../index.css"


function GalleryCarousel() {
    return (
        <Carousel>

          <Carousel.Item>
            <img
            className="d-block w-100"
            width={800} height={600}
            src={image_1}
            alt="First slide"
            />
            <Carousel.Caption>
              <h3 className="Carousel-text">Alexis Virgen</h3>
              <p className="Carousel-text">Este dibujo bla bla bla bla.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
            className="d-block w-100"
            width={800} height={600}
            src={image_2}
            alt="Second slide"
            />
            <Carousel.Caption>
              <h3 className="Carousel-text">Alexis Virgen</h3>
              <p className="Carousel-text">Este dibujo bla bla bla bla.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
            className="d-block w-100"
            width={800} height={600}
            src={image_3}
            alt="Third slide"
            />
            <Carousel.Caption>
              <h3 className="Carousel-text">Alexis Virgen</h3>
              <p className="Carousel-text">Este dibujo bla bla bla bla.</p>
            </Carousel.Caption>
          </Carousel.Item>
      </Carousel>
    );
  }
  
  export default GalleryCarousel;
  
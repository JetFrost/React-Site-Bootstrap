import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../Assets/1.jpg';
import img2 from '../Assets/2.jpg';
import img3 from '../Assets/3.jpg';


class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img1}
                    alt="1"
                    />
                    <Carousel.Caption>
                        <h3>Fire Image 1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, maxime.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img2}
                    alt="2"
                    />
                    <Carousel.Caption>
                        <h3>Fire Image 2</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, maxime.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img3}
                    alt="3"
                    />
                    <Carousel.Caption>
                        <h3>Fire Image 3</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, maxime.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CarouselBox;
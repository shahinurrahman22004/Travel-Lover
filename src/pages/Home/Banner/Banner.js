import React from 'react';
import { Carousel } from 'react-bootstrap';


const Banner = () => {
    return (
        <div>
            <>
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src='https://i.ibb.co/TMzp2HS/bg.jpg' alt="First Slide"
                />
                <Carousel.Caption>
                    <h1 className="text-white fw-bold">TRAVELLING AROUND THE WORLD</h1>
                    <p className="text-white">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <button className="btn simle-btn">READ MORE</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://i.ibb.co/SXXtR87/bg-try-4.jpg"
                alt="Second slide"
                />

                <Carousel.Caption>
                    <h1 className="text-white fw-bold">TRAVELLING AROUND THE WORLD</h1>
                    <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <button className="btn simle-btn">READ MORE</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                className="d-block w-100"
                src="https://i.ibb.co/K54j490/bg-try.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                    <h1 className="text-white fw-bold">TRAVELLING AROUND THE WORLD</h1>
                    <p className="text-white">
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    <button className="btn simle-btn">READ MORE</button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </>
        </div>
    );
};

export default Banner;
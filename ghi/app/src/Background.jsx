import React from 'react'
// import {Carousel} from 'bootstrap'
import './App.css';

const BackGround = () => {
    return(
        <>
            {/* <Carousel>
                <Carousel.Item interval={1000}>
                    <img src="https://i.imgur.com/UdLeXQs.jpeg" className="d-block w-100" alt="First Slide"/>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img src="https://i.imgur.com/NA77D75.jpeg" className="d-block w-100" alt="..."/>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img src="https://i.imgur.com/l4LhiQA.jpeg" className="d-block w-100" alt="..."/>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img src="https://i.imgur.com/oGdSqFe.jpeg" className="d-block w-100" alt="..."/>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img src="https://i.imgur.com/NA77D75.jpeg" className="d-block w-100" alt="..."/>
                </Carousel.Item>
            </Carousel> */}
    <div className="BackGround">
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="https://i.imgur.com/UdLeXQs.jpeg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item interval-500">
                <img src="https://i.imgur.com/NA77D75.jpeg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src="https://i.imgur.com/l4LhiQA.jpeg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src="https://i.imgur.com/oGdSqFe.jpeg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src="https://i.imgur.com/NA77D75.jpeg" className="d-block w-100" alt="..."/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
        </div>
        </>
    )
}

export default BackGround
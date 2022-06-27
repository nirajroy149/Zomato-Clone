import React, { Component } from "react";
import Slider from "react-slick";
import "./style.css"
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";

const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    initialSlide: 0,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 0
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
};

function Carousel({ CarouselItem }) {

    return (
        <div className='Carousel-whole-container'>
            <div className='max-width'>
                <Slider {...settings}>
                    {CarouselItem && CarouselItem.map((item) => {
                        return <div id={item.id} key={item.id} className="each-carousel-container">
                            <div className="carousel-img-container">
                                <img className="carousel-img" src={item.imgUrl} alt="not found"></img>
                            </div>
                            <div className="carousel-name">{item.name}</div>
                            {item.time && <div className="carousel-time">{item.time}</div>}
                        </div>
                    })}

                </Slider>
            </div>
        </div>
    );
}


export default Carousel
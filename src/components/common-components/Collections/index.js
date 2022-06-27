import React, { Component } from "react";
import Slider from "react-slick";
import "./style.css"
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";
import CollectionCard from './collectionCard';

const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    initialSlide: 0,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
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

const Collections = ({ list, collectionTitle }) => {
    return (
        <div className='collection-whole-container bg-grey'>
            <div className='collection-inner-container max-width'>
                <div className='title'>Collections</div>
                <div className='about-collection flex-row'>
                    <div className='about-collection-title'>{collectionTitle}</div>
                    <div className='with-caret flex-row'>
                        <div>All collections in Kolkata</div>
                        <i class="fas fa-caret-right"></i>
                    </div>
                </div>
                {list && <Slider {...settings}>

                    {list.map((collection) => <CollectionCard list={collection}/>)}

                </Slider>}

            </div>
        </div>
    )
}

export default Collections
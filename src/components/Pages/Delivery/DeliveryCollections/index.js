import React from 'react'
import "./style.css"
import Carousel from '../../../common-components/Carousel/Carousel'

const DeliveryItems = [
    {
        id: 1,
        imgUrl: "https://b.zmtcdn.com/data/dish_images/da37534e55d5f1450ea9771c0627a8d81641644205.png",
        name: "Home Style"
    },
    {
        id: 2,
        imgUrl: "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
        name: "Chicken",
    },
    {
        id: 3,
        imgUrl: "https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png",
        name: "Noodles",
    },
    {
        id: 4,
        imgUrl: "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
        name: "Biryani",
    },
    {
        id: 5,
        imgUrl: "https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png",
        name: "Momos",
    },
    {
        id: 6,
        imgUrl: "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
        name: "Rolls",
    },
    {
        id: 7,
        imgUrl: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
        name: "Pizza"
    },
    {
        id: 8,
        imgUrl: "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
        name: "Burger"
    },
    {
        id: 9,
        imgUrl: "https://b.zmtcdn.com/data/dish_images/1437bc204cb5c892cb22d78b4347f4651634827140.png",
        name: "Chaat"
    },
    {
        id: 10,
        imgUrl: "https://b.zmtcdn.com/data/dish_photos/4c6/4f2cb1bfb215d0af454e65291aec74c6.jpg",
        name: "Kebabs"
    },
    {
        id: 11,
        imgUrl: "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
        name: "Thali"
    },
    {
        id: 12,
        imgUrl: "https://b.zmtcdn.com/data/o2_assets/c5f679b7ce4d7cf0b08f120e77d22e2d1632716660.png",
        name: "Dal"
    }
]
const deliveryTitle = "Eat what makes you happy"


const DeliveryCollections = () => {
    return (
        <div className='carousel-with-title bg-grey'>
            <div className='max-width'>
                <div className='title'>{deliveryTitle}</div>
                <Carousel  CarouselItem={DeliveryItems} />
            </div>
            
        </div>

    )
}

export default DeliveryCollections
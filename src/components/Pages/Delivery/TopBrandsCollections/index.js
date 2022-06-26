import React from 'react'
import Carousel from '../../../common-components/Carousel/Carousel'

const TopBrands = [
    {
        id: 1,
        imgUrl: "https://b.zmtcdn.com/data/brand_creatives/logos/cc214b60b95cba868170d1a8d66bcab3_1629438962.png?output-format=webp",
        name: "WOW! Momo",
        time: "34 min"
    },
    {
        id: 8,
        imgUrl: "https://b.zmtcdn.com/data/brand_creatives/logos/560b209a689eefa9feb367b5d5604097_1611382952.png?output-format=webp",
        name: "KFC",
        time: "39 min",
    },
    {
        id: 9,
        imgUrl: "https://b.zmtcdn.com/data/brand_creatives/logos/fe5db95ae85292933996d4043f600d3b_1611320738.png?output-format=webp",
        name: "Arsalan",
        time: "30 min",
    },
    {
        id: 10,
        imgUrl: "https://b.zmtcdn.com/data/brand_creatives/logos/b8da5e372048dceb188471efcb7042c1_1629440093.png?output-format=webp",
        name: "Tea Junction",
        time: "33 min",
    },
    {
        id: 11,
        imgUrl: "https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png?output-format=webp",
        name: "Pizza Hut",
        time: "46 min",
    },
    {
        id: 12,
        imgUrl: "https://b.zmtcdn.com/data/brand_creatives/logos/94e8d80f54135ba39669774c68e9ecff_1567764102.png?output-format=webp",
        name: "Kasturi Restaurant",
        time: "45 min",
    },
    {
        id: 2,
        imgUrl: "https://b.zmtcdn.com/data/brand_creatives/logos/396a89cdb1f7a999717b01aa98da7017_1631990960.png?output-format=webp",
        name: "Subway",
        time: "28 min"
    },
    {
        id: 3,
        imgUrl: "https://b.zmtcdn.com/data/brand_creatives/logos/a2531dc570196c0cd9322814eb010d94_1605102324.png?output-format=webp",
        name: "Gupta Brothers",
        time: "24 min"
    },
    {
        id: 4,
        imgUrl: "https://b.zmtcdn.com/data/brand_creatives/logos/902d5ca562d33893ba868c87cbe08659_1629440174.png?output-format=webp",
        name: "Kwality Wall’s Frozen Dessert and Ice Cream Shop",
        time: "35 min"
    },
    {
        id: 5,
        imgUrl: "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188103.png?output-format=webp",
        name: "Burger King",
        time: "31 min"
    },
    {
        id: 6,
        imgUrl: "https://b.zmtcdn.com/data/brand_creatives/logos/0b4a596580e55368edd9c0711bfcf424_1629439244.png?output-format=webp",
        name: "Haldiram's Prabhuji",
        time: "41 min"
    },
    {
        id: 7,
        imgUrl: "https://b.zmtcdn.com/data/brand_creatives/logos/bc147ba527d53d26dea988e723f36f75_1574669489.png?output-format=webp",
        name: "Monginis",
        time: "21 min"
    }
]
const topTitle = "Top brands for you"

const TopBrandsCollections = () => {
    return (
        <div className='carousel-with-title'>
            <div className='max-width'>
                <div className='title'>{topTitle}</div>
                <Carousel CarouselItem={TopBrands} />
            </div>

        </div>
    )
}

export default TopBrandsCollections
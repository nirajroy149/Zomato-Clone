import React from 'react'
import "./style.css"

const ExploreCard = ({ restaurent }) => {

    const name = restaurent?.info?.name ?? "";
    const coverImg = restaurent?.info?.image?.url;
    const deliveryTime = restaurent?.order?.deliveryTime;
    const rating = restaurent?.info?.rating?.rating_text;
    const approxPrice = restaurent?.info?.cfo?.text;
    const offers = restaurent?.bulkOffers ?? [];
    const cuisines = restaurent?.info?.cuisine?.map((item) => item.name).slice(0, 3);
    const risingimg = restaurent?.bottomContainers[0]?.image?.url;
    const risingtext = restaurent?.bottomContainers[0]?.text;
    const maxSafeImg = restaurent?.bottomContainers[1]?.image.url;
    const discount = offers.length > 1 ? offers[0].text : null;
    const proOff = offers.length > 1 ? offers[1].text : offers.length === 1 ? offers[0].text : null;

    return (
        <div className='exploreCard'>
            <div className='explore-img-container'>
                <img className='explore-cover-img' src={coverImg} alt={name}></img>
                {deliveryTime && <div className='time'>{deliveryTime}</div>}
                {proOff && <div className='pro-off'>{proOff}</div>}
                {discount && <div className='discount'>{discount}</div>}
            </div>

            {name && <div className='flex-row name-with-rating'>
                <div className='card-restaurent-name title'>{name}</div>
                {rating && (<div className='restaurent-rating flex-row'><div>{rating}</div><i className="fas fa-star"></i></div>)}
            </div>}

            {cuisines && <div className='cuisines-with-price flex-row'>
                <div className='cuisines-name'>{cuisines[0]}, {cuisines[1]}, {cuisines[2]}</div>
                {approxPrice && <div className='approx-price'>{approxPrice}</div>}
            </div>}

            {risingimg && <>
                <div className='seprator'></div>
                <div className='bottom-container flex-row'>
                    <div className='rising-container flex-row'>
                        <img className='rising-img' src={risingimg} alt="not found"></img>
                        <div className='rising-text'>{risingtext}</div>
                    </div>
                    {maxSafeImg && <img src={maxSafeImg} alt="not found" className='max-safe-img'></img>}
                </div></>}


        </div>
    )
}

export default ExploreCard
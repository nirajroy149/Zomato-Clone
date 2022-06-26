import React from 'react'
import "./style.css"

const CollectionCard = ({ list }) => {
    return (
        <div className='collection-each-card'>
            {list.imgUrl && <img src={list.imgUrl} alt="not found" className='collection-card-img'></img>}
            <div className='bg-gradient'></div>
            {list.name && <div className='collection-name'>{list.name}</div>}
            {list.places && <div className='flex-row place-with-caret'>
                <div className='collection-place'>{list.places}</div>
                <i class="fas fa-caret-right"></i>
            </div>}
        </div>
    )
}

export default CollectionCard
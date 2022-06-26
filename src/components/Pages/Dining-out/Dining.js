import React from 'react'
import Collections from '../../common-components/Collections'
import ExploreSection from '../../common-components/exploreSection/exploreSection'
import Filter from '../../common-components/Filter/Filter'
import { dining } from '../../data/dining'

const diningOutFilter = [
  {
      id: 1,
      name: "Filters",
      icon: <i className="sc-rbbb40-1 iFnyeo" size="18" color="#9C9C9C"><svg xmlns="http://www.w3.org/2000/svg" fill="#9C9C9C" width="18" height="18" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 iwHbVQ"><title>filter</title><path d="M2.14 6.42h7.26c0.353 1.207 1.45 2.074 2.75 2.074s2.397-0.867 2.745-2.054l0.005-0.020h2.96c0.343-0.059 0.6-0.355 0.6-0.71s-0.258-0.651-0.596-0.709l-0.004-0.001h-2.94c-0.341-1.226-1.447-2.11-2.76-2.11s-2.419 0.885-2.755 2.090l-0.005 0.020h-7.26c-0.343 0.059-0.6 0.355-0.6 0.71s0.257 0.651 0.596 0.709l0.004 0.001zM12.16 4.28c0.776 0.011 1.4 0.643 1.4 1.42 0 0.784-0.636 1.42-1.42 1.42-0.777 0-1.409-0.624-1.42-1.399l-0-0.001c-0-0.006-0-0.013-0-0.020 0-0.784 0.636-1.42 1.42-1.42 0.007 0 0.014 0 0.021 0l-0.001-0zM17.86 13.58h-7.24c-0.328-1.245-1.443-2.148-2.77-2.148s-2.442 0.903-2.766 2.128l-0.004 0.020h-2.94c-0.036-0.006-0.077-0.010-0.12-0.010-0.398 0-0.72 0.322-0.72 0.72s0.322 0.72 0.72 0.72c0.042 0 0.084-0.004 0.124-0.011l-0.004 0.001h2.96c0.353 1.207 1.45 2.074 2.75 2.074s2.397-0.867 2.745-2.054l0.005-0.020h7.26c0.343-0.059 0.6-0.355 0.6-0.71s-0.258-0.651-0.596-0.709l-0.004-0.001zM7.84 15.72c-0.776-0.011-1.4-0.643-1.4-1.42 0-0.784 0.636-1.42 1.42-1.42 0.777 0 1.409 0.624 1.42 1.399l0 0.001c0 0.006 0 0.013 0 0.020 0 0.784-0.636 1.42-1.42 1.42-0.007 0-0.014-0-0.021-0l0.001 0z"></path></svg></i>
  },
  {
      id: 2,
      name: "Rating: 4.0+"
  },
  {
      id: 4,
      name: "Outdoor Seating"
  },
  {
      id: 5,
      name: "Serves Alcohol",
  },
  {
      id: 6,
      name: "Open Now",
  }
]
const exploreTitle = "Dine-Out Restaurants in Ruby Hospital Area";

const diningCollections = [
  {
      id: 1,
      name: "Newly Opened",
      places: "7 Places",
      imgUrl: "	https://b.zmtcdn.com/data/collections/b22194cb38ed18a5200b387ad8f243f0_1582015799.jpg"
  },
  {
      id: 2,
      name: "Trending This Week",
      places: "30 Places",  
      imgUrl: "https://b.zmtcdn.com/data/collections/f60eb469dbcdadaaa48c8be4f5ba48b3_1646040552.png"
  },
  {
      id: 3,
      name: "Best of Kolkata",
      places: "59 Places",
      imgUrl: "https://b.zmtcdn.com/data/collections/712ee166f48312fa572eac04f5b71d59_1615435760.jpg"
  },
  {
      id: 4,
      name: "Brilliant Biryani",
      places: "30 Places",
      imgUrl: "	https://b.zmtcdn.com/data/collections/d66334f10b958a3ca6df9f4e4d7a881c_1631862999.jpg"
  },
  {
      id: 5,
      name: "Aromatic Coffee", 
      places: "29 Places",    
      imgUrl: "https://b.zmtcdn.com/data/collections/2e0b63986e33036c45cf17fef3a740ac_1611749485.jpg"
  },
  {
      id: 6,
      name: "Street Food",
      places: "24 Places",
      imgUrl: "	https://b.zmtcdn.com/data/collections/4c59b895acfa4879b87f6c1d81ca5855_1615437858.jpg"
  },
  {
      id: 7,
      name: "Rooftops",
      places: "29 Places",
      imgUrl: "	https://b.zmtcdn.com/data/collections/14fa741ee65b838680a95a4cd7b9faa4_1582201565.jpg"
  },
  {
      id: 6,
      name: "Kickass Burgers",
      places: "7 Places",
      imgUrl: "	https://b.zmtcdn.com/data/collections/d38669ed7b829ceb2814678420a629da_1560353561.jpg"
  }
]


const Dining = () => {
  return (
    <>
      <Collections list={diningCollections} collectionTitle={"Explore curated lists of top restaurants, cafes, pubs, and bars in Kolkata, based on trends"}/>
      <Filter content={diningOutFilter}/>
      <ExploreSection list={dining} exploreTitle={exploreTitle}/>
    </>
  )
}

export default Dining
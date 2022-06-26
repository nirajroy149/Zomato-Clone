import React from 'react'
import ExploreSection from '../../common-components/exploreSection/exploreSection'
import Filter from '../../common-components/Filter/Filter'
import { nightlife } from '../../data/nightlife'
import Collections from '../../common-components/Collections'

const NightFilter = [
  {
      id: 1,
      name: "Filters",
      icon: <i className="sc-rbbb40-1 iFnyeo" size="18" color="#9C9C9C"><svg xmlns="http://www.w3.org/2000/svg" fill="#9C9C9C" width="18" height="18" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 iwHbVQ"><title>filter</title><path d="M2.14 6.42h7.26c0.353 1.207 1.45 2.074 2.75 2.074s2.397-0.867 2.745-2.054l0.005-0.020h2.96c0.343-0.059 0.6-0.355 0.6-0.71s-0.258-0.651-0.596-0.709l-0.004-0.001h-2.94c-0.341-1.226-1.447-2.11-2.76-2.11s-2.419 0.885-2.755 2.090l-0.005 0.020h-7.26c-0.343 0.059-0.6 0.355-0.6 0.71s0.257 0.651 0.596 0.709l0.004 0.001zM12.16 4.28c0.776 0.011 1.4 0.643 1.4 1.42 0 0.784-0.636 1.42-1.42 1.42-0.777 0-1.409-0.624-1.42-1.399l-0-0.001c-0-0.006-0-0.013-0-0.020 0-0.784 0.636-1.42 1.42-1.42 0.007 0 0.014 0 0.021 0l-0.001-0zM17.86 13.58h-7.24c-0.328-1.245-1.443-2.148-2.77-2.148s-2.442 0.903-2.766 2.128l-0.004 0.020h-2.94c-0.036-0.006-0.077-0.010-0.12-0.010-0.398 0-0.72 0.322-0.72 0.72s0.322 0.72 0.72 0.72c0.042 0 0.084-0.004 0.124-0.011l-0.004 0.001h2.96c0.353 1.207 1.45 2.074 2.75 2.074s2.397-0.867 2.745-2.054l0.005-0.020h7.26c0.343-0.059 0.6-0.355 0.6-0.71s-0.258-0.651-0.596-0.709l-0.004-0.001zM7.84 15.72c-0.776-0.011-1.4-0.643-1.4-1.42 0-0.784 0.636-1.42 1.42-1.42 0.777 0 1.409 0.624 1.42 1.399l0 0.001c0 0.006 0 0.013 0 0.020 0 0.784-0.636 1.42-1.42 1.42-0.007 0-0.014-0-0.021-0l0.001 0z"></path></svg></i>
  },
  {
      id: 2,
      name: "Distance",
      icon: <i className="sc-rbbb40-1 iFnyeo" size="18" color="#9C9C9C"><svg xmlns="http://www.w3.org/2000/svg" fill="#9C9C9C" width="18" height="18" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 iwHbVQ"><path d="M9.9,14.8l-2.3,2.3V9c0-0.5-0.4-0.8-0.8-0.8S5.9,8.5,5.9,9v8.2l-2.3-2.3c0,0,0,0,0,0c-0.3-0.3-0.9-0.3-1.2,0 c-0.3,0.3-0.3,0.8,0,1.2l3.7,3.7c0.3,0.3,0.8,0.3,1.2,0l3.7-3.7c0.2-0.2,0.2-0.4,0.2-0.6c0-0.2-0.1-0.4-0.2-0.6 C10.8,14.5,10.3,14.5,9.9,14.8z"></path><path d="M17.6,4l-3.7-3.7c-0.3-0.3-0.8-0.3-1.2,0L8.9,4C8.7,4.1,8.6,4.4,8.7,4.6c0,0.2,0.1,0.4,0.2,0.6c0.3,0.3,0.8,0.3,1.2,0 l2.3-2.3V11c0,0.5,0.4,0.8,0.8,0.8c0.5,0,0.8-0.4,0.8-0.8V2.9l2.3,2.3c0,0,0,0,0,0c0.3,0.3,0.9,0.3,1.2,0C17.9,4.8,17.9,4.3,17.6,4 z"></path></svg></i>
  },
  {
      id: 3,
      name: "Rating: 4.0+"
  },
  {
      id: 4,
      name: "Pubs & Bars"
  }
]
const collectionList = [
  {
    id: 1,
    name: "Microbreweries",
    places: "8 Places",
    imgUrl: "https://b.zmtcdn.com/data/collections/bcfc1254994ef56dd65ee0807394b953_1633340036.jpg"
  },
  {
    id: 2,
    name: "Where's The Party?",
    places: "29 Places",
    imgUrl: "https://b.zmtcdn.com/data/collections/4c645d68d0ad4c624abab81374c8997c_1582106595.jpg"
  }
]
const collectionTitle = "Explore curated lists of top restaurants, cafes, pubs, and bars in Kolkata, based on trends";

const exploreTitle = "Nightlife Restaurants in Ruby Hospital Area";

const Night = () => {
  return (
    <>
      <Collections list={collectionList} collectionTitle={collectionTitle} />
      <Filter content={NightFilter}/>
      <ExploreSection list={nightlife} exploreTitle={exploreTitle}/>
    </>
  )
}

export default Night
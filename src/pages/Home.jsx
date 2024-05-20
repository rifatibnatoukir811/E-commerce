import React from 'react'
import Banner from '../components/Banner'
import Ads from '../components/Ads'
import Speacialoffer from '../components/Speacialoffer'
import Newarrivals from '../components/Newarrivals.jsx'


const Home = () => {
    return (
        <>
            <Banner />
            <Ads />
            <Newarrivals/>
            <Speacialoffer/>
        </>
    )
}

export default Home
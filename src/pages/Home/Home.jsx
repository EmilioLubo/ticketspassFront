import React from 'react'
import Carrousel from '../../components/Home/Module1/Carrousel'
import Divisor from '../../components/Home/Divisor/Divisor'
import TopArtists from '../../components/Home/Module2/TopArtist'
import PopularArtists from '../../components/Home/Module3/PopularArtist'
export default function Home() {
    return (
        <div>
           <Carrousel/>
           <Divisor/>
           <TopArtists/>
           <PopularArtists/>
        </div>
    )
    }
import React from 'react'
import Carrousel from '../../components/Home/Module1/Carrousel'
import Divisor from '../../components/Home/Divisor/Divisor'
import TopArtists from '../../components/Home/Module2/TopArtist'
import ComingSoonEvents from '../../components/Home/Module3/ComingSoonEvents'
export default function Home() {
    return (
        <div>
           <Carrousel/>
           <Divisor/>
           <TopArtists/>
           <ComingSoonEvents/>
        </div>
    )
    }
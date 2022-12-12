import React from 'react'
import M1_Carrousel from '../../components/Home/Module1/Carrousel'
import Divisor from '../../components/Home/Divisor/Divisor'
import M2_TopArtists from '../../components/Home/Module2/TopArtist'
import M3_POPULAR_ARTIST from '../../components/Home/Module3/PopularArtist'
export default function Home() {
    return (
        <div>
           <M1_Carrousel/>
           <Divisor/>
           <M2_TopArtists/>
           <M3_POPULAR_ARTIST/>
        </div>
    )
    }
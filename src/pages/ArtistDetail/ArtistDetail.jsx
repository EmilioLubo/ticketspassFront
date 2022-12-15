import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../../api/url'
import  {Spinner} from 'react-bootstrap'
import './ArtistDetail.css'

const ArtistDetail = () => {
    let {id} = useParams()
    let [artist, setArtist] = useState({})
    let [load, setLoad] = useState(true)
    let [error, setError] = useState('')
    useEffect(() => {
        axios.get(`${BASE_URL}/api/artists/${id}`)
            .then(res => {
                setArtist(res.data.data)
                setLoad(false)
            })
            .catch(err => {
                setLoad(false)
                err.response ?
                setError(err.response.data.message) :
                setError(err.message)
            })
    }, [id])
  return (
    <div className='w-100 mb-2 d-flex justify-content-center align-items-center'>
        {
            load ?
            <Spinner/> :
            artist.name ?
            <div>
                <h2 className='text-center text-light bg-dark'>{artist.name}</h2>
                <div className='d-flex flex-column flex-md-row'>
                    <div className='detail__image--container'>
                        <img className='detail__image' src={artist.photo} alt={artist.name} />
                    </div>
                    <div className='p-3'>
                        <p>{artist.description}</p>
                        <p><span className='genre__key'>Genre:</span> {artist.genre.join(", ")}</p>
                        <a href="http://">link</a>
                    </div>
                </div>
            </div> :
            <h2 className='text-center'>{error}</h2>
        }
    </div>
  )
}

export default ArtistDetail
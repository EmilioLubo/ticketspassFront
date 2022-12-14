import React, {useEffect} from 'react'
import { Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import ArtistsCard from '../../components/Artists/ArtistsCard'
import artistsActions from '../../redux/actions/artistsactions'

export const Artists = () => {

  let {artists, loading} = useSelector(state => state.artistsReducer)
  let dispatch = useDispatch()
  let {getArtists} = artistsActions

    useEffect(() => {
        dispatch(getArtists())
        // eslint-disable-next-line
    }, [])

  return (
    <div className='d-flex w-100 justify-content-around gap-3 align-items-center p-3 flex-wrap'>
      {
        loading ?
        <Spinner/> :
        artists.length > 0 ?
        artists.map(el => <ArtistsCard key={el._id} id={el._id} name={el.name} photo={el.photo}/>) :
        <h2>No artist found</h2>
      }
    </div>
  )
}

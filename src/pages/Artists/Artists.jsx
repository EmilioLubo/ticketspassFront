import React, {useEffect} from 'react'
import { Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import artistsActions from '../../redux/actions/artistsactions'

export const Artists = () => {

  let {artists} = useSelector(state => state.artistsReducer)
  let dispatch = useDispatch()
  let {getArtists} = artistsActions

    useEffect(() => {
        dispatch(getArtists())
        // eslint-disable-next-line
    }, [])

  return (
    <div className='d-flex justify-content-center align-items-center gap-3 flex-wrap'>
      {
        artists.length > 0 ?
        artists.map(el => <div key={el._id}><h2>{el.name}</h2><img src={el.photo} alt={el.name} width='200'/></div>):
        <Spinner/>
      }
    </div>
  )
}

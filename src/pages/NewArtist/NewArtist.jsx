import React, {useRef} from 'react'

const NewArtist = () => {

    const formRef = useRef()
    const genres = ['Ambient', 'Blues', 'Country', 'Electronic', 'Funk', 'Hip-hop', 'Jazz', 'Latin', 'Metal', 'Pop', 'Punk', 'R&B and Soul', 'Rap', 'Reggae', 'Reggaeton', 'Rock', 'Ska', 'Trap']

    let submit = () => {

    }

  return (
    <div className='container'>
        <h1 className='text-center'>Add a new artist</h1>
        <form ref={formRef} className='d-flex flex-column p-1' onSubmit={submit}>
            <label className='d-flex flex-column fs-6 m-1'>Name: 
                <input className='ms-1' type="text" name="name" required/>
            </label>
            <label className='d-flex flex-column fs-6 m-1'>Photo url: 
                <input className='ms-1' type="url" name="photo" required/>
            </label>
            <fieldset>
                <legend className='fs-6'>Genres:</legend>
                <div className='d-flex align-items-center justify-content-center flex-wrap gap-3'>
                    {genres.map(el => 
                    <label key={el} className='m-1'>
                        <input className='me-1' type="checkbox" name="genre" value={el}/>{el}
                    </label>)}
                </div>
            </fieldset>
            <label className='d-flex flex-column fs-6 m-1'>Description: 
                <textarea className='ms-1 w-100' name="description" rows="10" required></textarea>
            </label>
            <label className='d-flex flex-column fs-6 m-1'>YouTube Video: 
                <input className='ms-1' type="url" name="youtubeVideo"/>
            </label>
            <label className='d-flex flex-column fs-6 m-1'>YouTube Channel: 
                <input className='ms-1' type="url" name="youtubeChannel"/>
            </label>
            <label className='d-flex flex-column fs-6 m-1'>Spotify playlist: 
                <input className='ms-1' type="url" name="spotifyPlaylist"/>
            </label>
            <div className='d-flex justify-content-evenly align-items-center'>
                <input className='btn btn-outline-danger' type="reset" value={'Clear'}/>
                <input className='btn btn-outline-success' type="submit" value={'Submit'}/>
            </div>
        </form>
    </div>
  )
}

export default NewArtist
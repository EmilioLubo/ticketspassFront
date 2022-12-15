import artistsReducer from "./artistReducer"
import concertsReducer from './concertsReducer';
import filterArtistReducer from "./filterArtistReducer";

const rootReducer = {
    artistsReducer,
    filterArtistReducer,
    concerts: concertsReducer,
}

export default rootReducer
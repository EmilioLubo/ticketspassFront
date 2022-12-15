
import artistsReducer from "./artistReducer"
import concertsReducer from './concertsReducer';
import filterArtistReducer from "./filterArtistReducer";
import adminConcertsReducer from './adminConcertsReducer';
import userReducers from './userReducers';

const rootReducer = {
    artistsReducer,
    filterArtistReducer,
    concerts: concertsReducer,
    user: userReducers,
    adminConcerts: adminConcertsReducer
}

export default rootReducer
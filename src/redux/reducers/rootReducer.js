import artistsReducer from "./artistReducer"
import concertsReducer from './concertsReducer';

const rootReducer = {
    artistsReducer,
    concerts: concertsReducer,
}

export default rootReducer
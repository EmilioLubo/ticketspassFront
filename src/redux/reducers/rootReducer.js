import adminConcertsReducer from './adminConcertsReducer';
import concertsReducer from './concertsReducer';

const rootReducer = {
  concerts: concertsReducer,
  adminConcerts: adminConcertsReducer
}

export default rootReducer
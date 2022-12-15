import adminConcertsReducer from './adminConcertsReducer';
import concertsReducer from './concertsReducer';
import userReducers from './userReducers';

const rootReducer = {
  concerts: concertsReducer,
  user: userReducers,
  adminConcerts: adminConcertsReducer
}

export default rootReducer
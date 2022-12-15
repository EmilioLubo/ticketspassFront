import concertsReducer from './concertsReducer';
import userReducers from './userReducers';

const rootReducer = {
  concerts: concertsReducer,
  user: userReducers,
}

export default rootReducer
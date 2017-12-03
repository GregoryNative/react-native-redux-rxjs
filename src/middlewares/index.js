import { applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { ENV } from 'react-native-dotenv';

import track from './track';
import { fetchUsersRx } from '../actions/users';

const middlewares = [ thunk, track, createEpicMiddleware(fetchUsersRx) ];
if (ENV === 'dev') {
    middlewares.push(logger);
}

export default applyMiddleware(...middlewares);

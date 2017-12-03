import { persistStore, persistCombineReducers } from 'redux-persist';
import { applyMiddleware, createStore } from 'redux';
import { AsyncStorage } from 'react-native';

import reducers from '../reducers';
import middlewares from '../middlewares';

const persistReducers = persistCombineReducers({
    key: 'root',
    storage: AsyncStorage
}, reducers);

export default function configureStore() {
    const store = createStore(persistReducers, middlewares);
    const persistor = persistStore(store);

    return { store, persistor };
};
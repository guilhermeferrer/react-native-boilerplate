import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import reducers from './modules';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['todo']
}

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export {
    store,
    persistor
}
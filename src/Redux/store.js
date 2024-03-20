import { configureStore } from "@reduxjs/toolkit";
import { rootreducer } from "./rootReducer";
import createSagaMiddleware from 'redux-saga'
import recipeSaga from "./recipesaga";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
  };
const persistedReducer = persistReducer(persistConfig, rootreducer);

const saga =createSagaMiddleware();

const store = configureStore({
    reducer:persistedReducer,
    middleware:()=>[saga]
})
export const persistor = persistStore(store);

saga.run(recipeSaga)
export default store;
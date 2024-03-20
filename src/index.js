import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { persistor } from './Redux/store';
import store from './Redux/store';
import { PersistGate } from 'redux-persist/integration/react';


store.subscribe(() => console.log("Store", store.getState()));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={<div><h1>...Loading</h1></div>} persistor={persistor}>
      <App />
    </PersistGate>
    </Provider>
   
  </React.StrictMode>
);

//  store.subscribe(console.log("store",store.getState()))

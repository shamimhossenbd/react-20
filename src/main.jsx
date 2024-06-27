import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import { store } from './Store.js'
import { Provider } from 'react-redux'
import firebaseConfig from '../firebase.config.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>
    <App />
  </Provider>,
   
  </React.StrictMode>,
)

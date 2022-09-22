import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap';
import { BrowserRouter } from 'react-router-dom';
import App from './App'
// import "../node_modules/font-awesome/css/font-awesome.min.css"


import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
)

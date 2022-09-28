import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App'
import './index.css'
import Texteditor from './components/Texteditor/texteditor'

const router = createBrowserRouter([
  {path: '/textedit', element: <Texteditor/>},
  {path: '/', element: <App/>},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)

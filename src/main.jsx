import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './routes/routes.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProviders from './AuthProviders/AuthProviders'
import { ToastContainer, toast } from 'react-toastify';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
    <RouterProvider router={router} />
    <ToastContainer />
    </AuthProviders>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthContextProvider from './Context/AuthContext.jsx'
import UserProvider from './Context/UserContext.jsx'
import { GoogleOAuthProvider } from "@react-oauth/google";

const ClientId = import.meta.env.VITE_Client_Id
const SecretId = import.meta.env.VITE_Client_Secret

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
    <UserProvider>
    <GoogleOAuthProvider clientId={ClientId}> 
    <App />
    </GoogleOAuthProvider>
    </UserProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)

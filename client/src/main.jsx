import { StrictMode } from 'react'
import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      {/* Wrap the App component with AuthProvider to provide authentication context */}
      <App />
    </AuthProvider>
  </StrictMode>,
)

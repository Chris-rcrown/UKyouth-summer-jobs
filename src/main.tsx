import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { MsalProvider } from '@azure/msal-react';
import msalInstance from './auth/msalInstance.tsx';
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MsalProvider instance={msalInstance}>
      <App />
    </MsalProvider>
  </StrictMode>,
)

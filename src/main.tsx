import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import i18n from './i18n'
import './index.css'

import { DashboardContextProvider } from './contexts/dashboard-context'

import { I18nextProvider as TranslatorProvider } from 'react-i18next'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TranslatorProvider i18n={i18n}>
      <DashboardContextProvider>
        <App />
      </DashboardContextProvider>
    </TranslatorProvider>
  </React.StrictMode>
)

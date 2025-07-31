import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SidebarProvider } from './components/ui/sidebar'
import { Provider } from 'react-redux'
import { store } from './redux/store'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SidebarProvider>
      <Provider store={store}>

        <App />
      </Provider>

    </SidebarProvider>
  </StrictMode>,
)

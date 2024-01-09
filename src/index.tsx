import ReactDOM from 'react-dom/client'
import App from './App'
import EntityContextProvider from './context/EntityContext'

import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <EntityContextProvider>
    <App />
  </EntityContextProvider>
)

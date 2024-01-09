import Header from './components/header/Header'
import Sidebar from './components/sidebarmenu/Sidebarmenu'
import Main from './components/main/Main'

import './App.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Sidebar />
        <Main />
      </div>
    </div>
  )
}

export default App

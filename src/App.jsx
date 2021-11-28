import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import { Provider } from 'react-redux'
import store from './store'
import NavbarHeader from './layout/NavbarHeader'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <NavbarHeader />
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  )
}

export default App

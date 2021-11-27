import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Dashboard from './pages/Dashboard'
import { Provider } from 'react-redux'
import store from './store'
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  )
}

export default App

import axios from 'axios'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import createStore from './store/store'
import Routes from './routes'
import './App.css'

axios.defaults.baseURL = 'https://opentdb.com/api.php'
const store = createStore()

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  )
}

export default App

import ShowDetails from './pages/ShowDetails'
import './App.css'
import 'sweetalert2/dist/sweetalert2.css'
import ShowContextProvider from './context/show-context'

const App = () => (
  <ShowContextProvider>
    <ShowDetails />
  </ShowContextProvider>
)

export default App

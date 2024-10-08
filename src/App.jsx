import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { BrowserRouter as Router , Route , Routes }  from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/about' element={<About></About>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
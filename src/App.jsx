import Navbar from './components/Navbar'
import { BrowserRouter as Router , Route , Routes }  from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/about' element={<About></About>} />
      </Routes>
      <Footer></Footer>
    </Router>
    </>
  )
}

export default App
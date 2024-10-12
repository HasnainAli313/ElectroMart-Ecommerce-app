import Navbar from './components/Navbar'
import { BrowserRouter as Router , Route , Routes }  from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/Footer'
import BestSelling from './components/BestSelling'
import ContactUs from './pages/ContactUs'

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' 
        element={
          <>
        <Home/>
          <BestSelling/>
          </>
        } />
        <Route path='/about' element={<About></About>} />
        <Route path='/contactus' element={<ContactUs></ContactUs>} />
      </Routes>
      <Footer></Footer>
    </Router>
    </>
  )
}

export default App

import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from  './components/Navbar'
import Hero from './components/Hero'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App

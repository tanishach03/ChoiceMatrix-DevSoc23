import './App.css'
import Footer from './components/Footer';
import Landing from './components/Landing'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Feedback from './components/Feedback';

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Landing />} />
        <Route path='/about' exact element={<Landing/>}/>
        <Route path='/register' exact element={<Register/>}/>
        <Route path='/feedback' exact element={<Feedback/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App

import './App.css'
import Landing from './components/Landing'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Landing />} />
        <Route path='/about' exact element={<Landing/>}/>
      </Routes>
    </>
  )
}

export default App

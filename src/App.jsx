import './App.css'
import Footer from './components/Footer';
import Landing from './components/Landing'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom';
import UserRegister from './components/UserRegister';
import Feedback from './components/Feedback';
import Contact from './components/Contact';
import Subscriptions from './components/subscriptions';
import Projects from './components/Projects';
import EmpRegister from './components/EmpRegister';

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Landing />} />
        <Route path='/about' exact element={<Landing/>}/>
        <Route path='/userregister' exact element={<UserRegister/>}/>
        <Route path='/feedback' exact element={<Feedback/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/subscriptions' element={<Subscriptions/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/empregister' exact element={<EmpRegister/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App

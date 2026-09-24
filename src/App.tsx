/**/
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Navbar  from './components/Navbar.jsx';
import Menu from './components/Menu.jsx'
import { useState } from 'react';
import Home from './pages/Home.jsx';
import ContactUs from './pages/ContactUs.jsx';
import AboutUs from './pages/AboutUs.jsx';
import SignIn from './pages/SignIn.jsx';
import LoginPage from './pages/LoginPage.tsx';
import LoadingPage from './pages/LoadingPage.tsx';

const App = () => {
  const [clicked, isClicked] = useState<boolean>(false)
  return (
    <>
      <Router>
        <Navbar clicked={clicked} isClicked={isClicked}/>
        { clicked ? <Menu/> : null }
        <Routes>
          <Route path="" element={<Home/>}/>
          <Route path="contact-us" element={<ContactUs/>}/>
          <Route path="about-us" element={<AboutUs/>}/>
          <Route path="sign-in" element={<SignIn/>}/>
          <Route path="log-in" element={<LoginPage/>}/>
          <Route path="sign-up" element={<SignIn/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;

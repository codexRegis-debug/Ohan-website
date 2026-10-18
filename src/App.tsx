/**/
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Navbar  from './components/Navbar.jsx';
import Menu from './components/Menu.jsx'
import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import Home from './pages/Home.jsx';
import ContactUs from './pages/ContactUs.jsx';
import AboutUs from './pages/AboutUs.jsx';
import SignIn from './pages/SignIn.jsx';
import LoginPage from './pages/LoginPage.tsx';
import { AppLoader } from './components/AppLoader.tsx';
import { GridBackground } from './components/GridBackground.tsx';
import { Box } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  const [clicked, isClicked] = useState<Dispatch<SetStateAction<boolean>>>(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Box position='relative' minH='100vh' bg='black' overflow='hidden'>
        <GridBackground/>
        <Box position='relative' zIndex={1}>
          <AnimatePresence mode='wait'>
            {isLoading && <AppLoader/>}
          </AnimatePresence>
          {!isLoading && (
            <div>
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
            </div>
          )}
        </Box>
      </Box>
    </>
  )
}

export default App;

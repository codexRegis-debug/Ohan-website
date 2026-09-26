/**/
import './Menu.css';
import { NavLink } from 'react-router-dom';

function Menu() {
  return (
    <div className='Navbars'>
      <ul className='NavbarWrappers'>
        <li className='NavbarElements'>
          <NavLink className='Link' to='/'>Home</NavLink>
        </li>
        <li className='NavbarElements'>
          <NavLink className='Link' to='/about-us'>About Us</NavLink>
        </li>
        <li className='NavbarElements'>
          <NavLink className='Link' to='/sign-in'>Sign In</NavLink>
        </li>
        <li className='NavbarElements'>
          <NavLink className='Link' to='/contact-us'>Contact Us</NavLink>
        </li>
        <li className='NavButton'>
          <NavLink className='Link' to='/sign-up'>Sign Up</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Menu

/**/
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';

const Navbar = ({ clicked, isClicked }) => {
  const handleClicked = () => {
    isClicked(!clicked);
    console.log('clicked');
  }

  return (
    <div className="Nav">
      <ul className="NavWrapper">
        <li className="Navlogo">
          <Link className="Link" to="/"> Navbar</Link>
        </li>
        <li className="NavItems">
          <NavLink className="Link" to="/"> Home</NavLink>
        </li>
        <li className="NavItems">
          <NavLink className="Link" to="/about-us"> About Us</NavLink>
        </li>
        <li className="NavItems">
          <NavLink className="Link" to="/contact-us"> Contact Us</NavLink>
        </li>
        <li className="NavItems">
          <NavLink className="Link" to="/sign-in"> Sign In</NavLink>
        </li>
        <li className="NavButton">
          <NavLink className="Link" to="/sign-up"> Sign Up</NavLink>
        </li>
      </ul>
      {!clicked ? (
        <GiHamburgerMenu className='Icon' onClick={handleClicked} />
      ) : (
        <ImCross className='Icon' onClick={handleClicked} />
      )}
    </div>
  )
}

export default Navbar

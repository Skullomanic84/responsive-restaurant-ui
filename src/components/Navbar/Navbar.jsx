import React, { useState } from 'react';
//style
import './Navbar.css';
//components
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from 'react-icons/md';
//images
import images from '../../constants/images';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  
  return (
            <nav className='app__navbar'>
              <div className='app__navbar-logo'>
                <img src={images.gericht} alt="app logo" />
              </div>

              <ul className="app__navbar-links">
                <li className='p__opensans'><a href='#about'>About</a></li>
                <li className='p__opensans'><a href='#menu'>Menu</a></li>
                <li className='p__opensans'><a href='#awards'>Awards</a></li>
                <li className='p__opensans'><a href='#contact'>Contact</a></li>
                <li className='p__opensans'><a href='#home'>Home</a></li>
              </ul>

              <div className="app__navbar-login">
                <a href='#login' className='p__opensans'>Log in / Register</a>
                <div></div>
                <a href='/' className='p__opensans'>Book a table</a>
              </div>

              <div className="app__navbar-smallscreen">
                <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />

                {toggleMenu && (
                <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                  <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
                  <ul className="app__navbar-smallscreen-links">
                    <li className='p__opensans'><a href='#about'>About</a></li>
                    <li className='p__opensans'><a href='#menu'>Menu</a></li>
                    <li className='p__opensans'><a href='#awards'>Awards</a></li>
                    <li className='p__opensans'><a href='#contact'>Contact</a></li>
                    <li className='p__opensans'><a href='#home'>Home</a></li>
                  </ul>
                </div> 
                )}

              </div>
            </nav>
          );
}
export default Navbar;
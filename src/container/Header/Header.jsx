import React from 'react';
//style
import './Header.css';
//components
import { images } from '../../constants';
import SubHeading from '../../components/SubHeading/SubHeading';




const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour"/>
      <h1 className="app__header-h1">The Key to Fine Dining</h1>

      <p className="p__opensans" style={{ margin: '2rem 0' }}>
      Coined the ‘Wolves of Brooklyn Bridge’, the Gerich team is committed to providing guests with the ultimate eating experience through exceptional service and value for money. We invite you to come and taste a bit of the Gerich culture.The restaurant’s setting provides private dining, closed booths and terrace seating options utilised by many clients for their business and leisure needs.
      </p>
      <button type="button" className='custom__button'>Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" srcset="" />
    </div>

  </div>
);

export default Header;

import React from 'react';
//style
import './Chef.css';
//components
import { images } from '../../constants';
import { SubHeading } from '../../components'

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>

    {/* image container */}
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    {/* content section */}
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>
    
    {/* chef's quote container */}
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans italic">
          A beautiful restaurant, Excellent decorating. What a wonderful experience and meals.I felt as If I was sitting comfortably in my own kitchen, being given great service. Well designed space.
          </p> 
        </div>
        <p className='p__opensans italic'>The service was outstanding. Quality is everything we need. This restaurant is getting 5 of 5 every time I come here. Every staff member was courteous and helpful.
        </p>
      </div>

    {/* chef's signature */}
        <div className="app__chef-sign">
          <p>Kevin Luo</p>
          <p className="p__opensans">Chef & Founder</p>
          <img src={images.sign} alt="sign" />
        </div>
    </div>
  </div>
);

export default Chef;

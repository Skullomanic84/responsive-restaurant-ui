import React from 'react';
//styles
import './AboutUs.css';
//components
import { images } from '../../constants';

const AboutUs = () => (
  
    <div className="app__aboutus app__bg flex__center section__padding" id="about">
      {/* center piece */}
      <div className="app__aboutus-overlay flex__center">
        <img src={images.G} alt="letter g" />
      </div>
      {/* About us main section */}
      <div className="app__aboutus-content flex__center">

        {/* about us section */}
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About us</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">Gerich is a family owned restaurant run by Alex and Tina. Situated in the heart of Fourways with quintessential views overlooking beautiful old buildings and oak trees, Gerich’s serves simple, contemporary food made using locally sourced, seasonal ingredients.</p>

          <button type='button' className="custom__button">Know more</button>
        </div>

        {/* knife section */}
          <div className="app__aboutus-content_knife flex__center">
            <img src={images.knife} alt="about_knife"  />
          </div>

        {/* history section */}
        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">Gerich is a family owned restaurant run by Alex and Tina. Situated in the heart of Fourways with quintessential views overlooking beautiful old buildings and oak trees, Gerich’s serves simple, contemporary food made using locally sourced, seasonal ingredients.</p>

          <button type='button' className="custom__button">Know more</button>
        </div>
      </div>
    </div>
  
);

export default AboutUs;

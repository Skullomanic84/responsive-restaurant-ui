import React from 'react';
//styles
import './SpecialMenu.css';
//components
import { images, data } from '../../constants';
import { SubHeading, MenuItem } from '../../components';



const SpecialMenu = () => (
  //Main menu listing
  <div className='app__specialMenu flex__center section__padding' id="menu">
    {/* menu title */}
    <div className="app__specialMenu-title">
      <SubHeading title="Menu That Fits Your Palatte"/>
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>

    {/* menu section */}
    <div className="app__specialMenu-menu">

      {/* wine and beer listing */}
      <div className="app__specialMenu-menu_wine flex__center">
        <p className='app__specialMenu_menu_heading'>Wine & Beer</p>

        {/* maping the wine list */}
        <div className="app__specialMenu_menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>

      {/* mixology bottle section */}
      <div className="app__specialMenu-menu_img">
            <img src={images.menu} alt="menu img" srcset="" />
      </div>
      
      {/* cocktail listing */}
      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className='app__specialMenu_menu_heading'>Cocktail</p>

        {/* maping the cocktail list */}
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>

    {/* button section */}
    <div style={{ marginTop: '15px' }}>
        <button type='button' className='custom__button'>View More</button>
    </div>
  </div>
);

export default SpecialMenu;

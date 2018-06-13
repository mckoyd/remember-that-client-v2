import React from 'react';
import '../styles/iou-banner.css';

const IOUBannerImage = require('../images/throwing-money-away.jpg');
export const IOUBanner = () => (
  <section className='iou-banner' id='ious'>
    <img src={IOUBannerImage} alt="Woman holding a wad of money shaped into a globe"/>
    <h2>
      I
      O
      U
      S
    </h2>
  </section>
);
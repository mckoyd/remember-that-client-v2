import React from 'react';
import '../styles/uome-banner.css';

const UOMeBannerImage = require('../images/getting-money-min.jpg');
export const UOMeBanner = () => (
  <section className='uome-banner' id='uomes'>
    <div>
      <img src={UOMeBannerImage} alt="Man holding a wad of rolled up bills"/>
      <h2>UOMES</h2>
    </div>
  </section>
);
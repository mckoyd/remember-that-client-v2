import React from 'react';
import '../styles/receipts-banner.css';

const ReceiptBannerImage = require('../images/receipt.jpg');
export const ReceiptBanner = () => (
  <section className='receipt-banner' id='receipts'>
    <div>
      <img src={ReceiptBannerImage} alt="Man holding a wad of rolled up bills"/>
      <h2>RECEIPTS</h2>
    </div>
  </section>
);
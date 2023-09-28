import React from 'react'
import "./Checkout.css";
import ad from './images/ad.png'
import Subtotal from './Subtotal';
function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img className="checkout_ad" src={ad} alt='pic' />
        <div>
            <h2 className="checkout_title"> Your shopping Basket</h2>
            {/* Basketitem */}
            {/* Basketitem */}
            {/* Basketitem */}
            {/* Basketitem */}
            {/* Basketitem */}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout

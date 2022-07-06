import React from 'react'
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import './Subtotal.css'

export default function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='subtotal'>
         <p>
              Subtotal ({basket.length} items): <strong><small>$</small>{getBasketTotal(basket)}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
      <button>Proceed to checkout</button>
      </div>
  )
}

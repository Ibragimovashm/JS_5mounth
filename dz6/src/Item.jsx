import React from 'react';
import { itemData } from './itemData';
import './item.css'

import { useSelector, useDispatch } from 'react-redux';
import { cartAction } from './redux/cart';

const Item = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const addToCart = (item) => {
    console.log(item);
    const isAdded = cart.some((e) => {
      return e.id === item.id;
    });
    if (!isAdded) {
      dispatch(
        cartAction.add({
          id: item.id,
          name: item.name,
          price: item.price,
          amount: 1,
        }),
      );
    } else {
      dispatch(cartAction.inc(cart.find((e) => e.id === item.id).id))
    }
  };
  return (
    <div className='card'>
      {itemData.map((e) => {
        return (
          <div className='box'  key={e.id}>
            <img src={e.picture} alt="" />
            <h3>{e.name}</h3>
            <p className='price'>{e.price}</p>
            <button  className='btn' onClick={addToCart.bind(this, e)}>Add to cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default Item;

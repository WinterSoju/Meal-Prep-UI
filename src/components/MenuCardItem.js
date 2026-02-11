import React from 'react';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';

function MenuCardItem(props) {
  return (
    <li className='menu-card__item'>
      <Link className='menu-card__image-link' to={props.path}>
        <figure className='menu-card__pic-wrap' data-category={props.label}>
          <img className='menu-card__img' alt='Menu Item' src={props.src} />
        </figure>
      </Link>
      <div className='menu-card__info'>
        <h5 className='menu-card__text'>{props.text}</h5>
        <p className='menu-card__description'>{props.description}</p>
        <StarRating rating={5} /> 
        <button className='menu-card__button' onClick={props.handleOrder}>ADD TO PLAN ↗ </button>
      </div>
    </li>
  );
}

export default MenuCardItem;
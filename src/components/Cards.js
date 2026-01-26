import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>BROWSE RECIPES</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/bbfood.jpg'
              text='Bodybuilding '
              label='High Protein'
              path='/services'
            />
            <CardItem
              src='/lowcarb.jpg'
              text='Weight Loss '
              path='/services'
            />   
            <CardItem
              src='/balancedfood.jpg'
              text='Maintenance'
              label='Whole Foods'
              path='/services'
            /> 
            <CardItem
              src='/keto.jpg'
              text='Ketogenic'
              label='High Fat Low Carb'
              path='/services'
            /> 
            <CardItem
              src='/vegan.jpg'
              text='Vegan'
              label='Plant-Based'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
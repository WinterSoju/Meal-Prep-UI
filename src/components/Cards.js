import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import bbfood from '../bbfood.jpg'
import lowcarb from '../lowcarb.jpg'
import balanced from '../balancedfood.jpg'
import keto from '../keto.jpg'
import vegan from '../vegan.jpg'

function Cards() {
  return (
    <div className='cards'>
      <h1>BROWSE RECIPES</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={bbfood}
              text='Bodybuilding '
              label='High Protein'
              path='/services'
            />
            <CardItem
              src={lowcarb}
              text='Weight Loss'
              path='/services'
            />   
            <CardItem
              src={balanced}
              text='Maintenance'
              label='Whole Foods'
              path='/services'
            /> 
            <CardItem
              src={keto}
              text='Ketogenic'
              label='High Fat Low Carb'
              path='/services'
            /> 
            <CardItem
              src= {vegan}
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
import React from 'react';
import './BBMenuCards.css';
import MenuCardItem from './MenuCardItem';
import stroganoff from '../stroganoff.jpg'
import salmon from '../salmon.jpg'
import beefpasta from '../beefpasta.jpg'

function BBMenuCards() {
  return (
    <div className='menu-cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <MenuCardItem
              src={stroganoff}
              text='CHICKEN STROGANOFF'
              description='Lean chicken breast in a creamy mushroom sauce, packed with protein to support muscle recovery and growth. A satisfying, meal-prep–friendly classic that fuels your training without weighing you down.'
              path='/services'
              label="400Kcal  · 42g Protein · 25g Carbs · 10g Fat"
            />
            <MenuCardItem
              src= {salmon}
              text='CREAMY GARLIC SALMON'
              description='Flaky salmon fillet coated in a rich garlic cream sauce, loaded with quality protein and healthy fats to support muscle recovery. A satisfying, meal-prep–friendly option that keeps you fueled and full.'
              path='/services'
              label="580Kcal  · 40g Protein · 6g Carbs · 48g Fat"
            />
            <MenuCardItem
              src={beefpasta}
              text= 'GROUND BEEF & PASTA'
              description='Hearty ground beef tossed with pasta in a rich, savoury sauce, delivering quality protein to support muscle growth and recovery. A filling, meal-prep–friendly classic built to fuel your training.'
              path='/services'
              label="500Kcal  · 35g Protein · 30g Carbs · 20g Fat"
            ></MenuCardItem>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BBMenuCards;
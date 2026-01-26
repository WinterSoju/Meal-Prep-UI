import React from 'react';
import './BBMenuCards.css';
import MenuCardItem from './MenuCardItem';

function BBMenuCards() {
  return (
    <div className='menu-cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <MenuCardItem
              src='/stroganoff.jpg'
              text='CHICKEN STROGANOFF'
              description='Lean chicken breast in a creamy mushroom sauce, packed with protein to support muscle recovery and growth. A satisfying, meal-prep–friendly classic that fuels your training without weighing you down.'
              path='/services'
            />
            <MenuCardItem
              src='/salmon.jpg'
              text='CREAMY GARLIC SALMON'
              description='Flaky salmon fillet coated in a rich garlic cream sauce, loaded with quality protein and healthy fats to support muscle recovery. A satisfying, meal-prep–friendly option that keeps you fueled and full.'
              path='/services'
            />
            <MenuCardItem
              src='/beefpasta.jpg'
              text= 'GROUND BEEF & PASTA'
              description='Hearty ground beef tossed with pasta in a rich, savoury sauce, delivering quality protein to support muscle growth and recovery. A filling, meal-prep–friendly classic built to fuel your training.'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BBMenuCards;
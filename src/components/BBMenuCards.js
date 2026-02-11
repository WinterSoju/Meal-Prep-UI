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
              description='Lean chicken in a creamy mushroom sauce, high in protein to support recovery without weighing you down.'
              path='/services'
              label="🔥 400 Kcal 💪 42g Protein 🍚 25g Carbs 🥑 10g Fat"
            />
            <MenuCardItem
              src= {salmon}
              text='CREAMY GARLIC SALMON'
              description='Flaky salmon in a rich garlic cream sauce, packed with protein and healthy fats to keep you full and fueled.'
              path='/services'
              label="🔥 580 Kcal 💪 40g Protein 🍚 6g Carbs 🥑 48g Fat"
            />
            <MenuCardItem
              src={beefpasta}
              text= 'GROUND BEEF & PASTA'
              description='Hearty ground beef tossed with pasta in a savory sauce, delivering balanced energy for training and recovery.'
              path='/services'
              label="🔥 500 Kcal 💪 35g Protein 🍚 30g Carbs 🥑 20g Fat"
            ></MenuCardItem>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BBMenuCards;
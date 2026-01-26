    import React from 'react';
    import './WhyUs.css';
    import WhyUsItem from './WhyUsItem';    

    function whyUs() {
    return (
        <div className='whyUs_cards'>
        <div className='whyUs_cards__container'>
            <div className='whyUs_cards__wrapper'>
            <ul className='whyUs_cards__items' img src="/2.jpg">
                <WhyUsItem
                    icon="🥗"
                    text="Fresh Ingredients"
                    description="We source only the freshest produce to make your meals healthy and tasty."
                    path="/services"
                    />
                    <WhyUsItem
                    icon="⚙️"
                    text="Customizable Plans"
                    description="Pick meals that fit your goals and dietary preferences."
                    path="/services"
                    />
                    <WhyUsItem
                    icon="🚚"
                    text="Fast Delivery"
                    description="Your meals arrive fresh and ready to eat, on your schedule."
                    path="/services"
                />
            </ul>
            </div>
        </div>
        </div>
    );
    }

    export default whyUs;
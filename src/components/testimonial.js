import React from 'react'
import './Testimonial.css';
import TestimonialItem from './TestimonialItem';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import jane from '../janedoe.jpeg'
import aimale1 from '../aimale1.jpg'
import aifemale1 from '../aifemale1.jpg'
import micheal from '../michaelbrown.jpg'
import sarah from '../sarahdavis.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Testimonial () {
return (
    <section className="testimonial">
        <h1 className="testimonial-heading">WHAT OUR CUSTOMERS SAY</h1>
        <Swiper
        modules={[Navigation, A11y, Autoplay]}
        spaceBetween={3}
        slidesPerView={"auto"}
        navigation
        centeredSlidesBounds={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
       
        breakpoints={{
            1024: {  
                slidesPerView: 3,  
                spaceBetween: 30,
            },
            768: {  
                slidesPerView: 2,  
                spaceBetween: 20,
            },
            0: {     
                slidesPerView: 1,
                spaceBetween: 10,
        },
  }}
        style={{ 
                    backgroundColor: "#dce2d1",
                    fontSize: "20px",
                    fontFamily: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif", 
                    color: "#ffffff"
                }}
            >
        <SwiperSlide>
            <TestimonialItem
                feedback="The meal plans have transformed my health! The food is delicious and convenient."
                authorImage={jane}  
                authorName="Jane Doe"
                name="Jane Doe"
                role="Fitness Enthusiast"
                path="/services"
            />
        </SwiperSlide>
        <SwiperSlide>
            <TestimonialItem
                feedback="I love the variety of meals available. It makes sticking to my diet so much easier!"
                authorImage={aimale1}
                authorName="John Smith"
                name="John Smith"
                role="Busy Professional"
                path="/services"
            />
        </SwiperSlide>
        <SwiperSlide>
            <TestimonialItem
                feedback="Excellent service and tasty food! Highly recommend to anyone looking to eat healthier."
                authorImage={aifemale1}
                authorName="Emily Johnson"
                name="Emily Johnson"
                role="Health Coach"
                path="/services"
            />
        </SwiperSlide>
        <SwiperSlide>
            <TestimonialItem
                feedback="The customizable plans allowed me to find meals that fit my dietary needs perfectly."
                authorImage={micheal}
                authorName="Michael Brown"
                name="Michael Brown"
                role="Athlete"
                path="/services"
            />
        </SwiperSlide>
        <SwiperSlide>
            <TestimonialItem
                feedback="Fast delivery and fresh ingredients every time. This service has made my life so much easier!"
                authorImage={sarah}
                authorName="Sarah Davis"
                name="Sarah Davis"
                role="Mom on the Go"
                path="/services"
            />
        </SwiperSlide>
        </Swiper>
    </section>
  );
};


export default Testimonial

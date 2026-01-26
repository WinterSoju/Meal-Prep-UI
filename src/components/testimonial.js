import React from 'react'
import './Testimonial.css';
import TestimonialItem from './TestimonialItem';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

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
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={"auto"}
        navigation
        centeredSlidesBounds={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
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
                slidesPerView: "auto",
                spaceBetween: 10,
        },
  }}
        style={{ 
                    backgroundColor: "#f5ffe7",
                    
                    fontSize: "20px",
                    fontFamily: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif", 
                    color: "#ffffff"
                }}
            >
        <SwiperSlide>
            <TestimonialItem
                feedback="The meal plans have transformed my health! The food is delicious and convenient."
                authorImage="/customers/janedoe.jpeg"  
                authorName="Jane Doe"
                name="Jane Doe"
                role="Fitness Enthusiast"
                path="/services"
            />
        </SwiperSlide>
        <SwiperSlide>
            <TestimonialItem
                feedback="I love the variety of meals available. It makes sticking to my diet so much easier!"
                authorImage="/customers/aimale1.jpg"
                authorName="John Smith"
                name="John Smith"
                role="Busy Professional"
                path="/services"
            />
        </SwiperSlide>
        <SwiperSlide>
            <TestimonialItem
                feedback="Excellent service and tasty food! Highly recommend to anyone looking to eat healthier."
                authorImage="/customers/aifemale1.jpg"
                authorName="Emily Johnson"
                name="Emily Johnson"
                role="Health Coach"
                path="/services"
            />
        </SwiperSlide>
        <SwiperSlide>
            <TestimonialItem
                feedback="The customizable plans allowed me to find meals that fit my dietary needs perfectly."
                authorImage="/author4.jpg"
                authorName="Michael Brown"
                name="Michael Brown"
                role="Athlete"
                path="/services"
            />
        </SwiperSlide>
        <SwiperSlide>
            <TestimonialItem
                feedback="Fast delivery and fresh ingredients every time. This service has made my life so much easier!"
                authorImage="/author5.jpg"
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

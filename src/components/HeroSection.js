import React from 'react'
import './HeroSection.css'
import '../App.css'
import { Button } from './Button'

function HeroSection() {
  return (
    <div className="hero-container">
        <img src="/hero2.jpg" alt="Hero-Image" className="hero-image" />
        <h1>Your Goals, Your Plate</h1>
        <p>Healthy doesn’t have to be boring. Find meal preps and recipes that match your goals—and actually taste good.</p>
        <div className="hero-btns">
            <button 
            className="btns" 
            buttonStyle='btn--outline' 
            buttonSize='btn--large'
            >
                Explore Now
            </button>
          
        </div>
    </div>
  )
}

export default HeroSection

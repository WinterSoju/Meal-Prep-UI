import React from 'react'
import './HeroSection.css'
import '../App.css'
import { Button } from './Button'
import heroImage from '../hero2.jpg'

function HeroSection() {
  return (
    <div className="hero-container">
        <div className="hero-content">
            <h1>Your Goals, Your Plate</h1>
            <p>Healthy doesn’t have to be boring. Find meal preps and recipes that match your goals—and actually taste good.</p>
            <div className="hero-btns">
                <button 
                className="btns" 
                buttonStyle='btn--outline' 
                buttonSize='btn--large'
                >
                    BROWSE RECIPE
                </button>
                <button 
                className='btns2'
                buttonStyle='btn--outline' 
                buttonSize='btn--large'
                >
                    EXPLORE MENU
                </button>
            </div>
        </div>
    </div>
  )
}

export default HeroSection

import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='sb_footer section_padding'>
            <div className='sb_footer-links'>
                <div className='sb_footer-links_div'>
                    <h4>About</h4>
                    <a href='/about'>
                        <p>Our Story</p>
                    </a>
                    <a href='/team'>
                        <p>Team</p>
                    </a> 
                    <a href='/careers'>
                        <p>Careers</p>
                    </a>
                    <a href='/blog'>
                        <p>Blog</p>
                    </a>
                </div>
                <div className='sb_footer-links_div'>
                    <h4>Food</h4>
                    <a href='/RTG'>
                        <p>Ready To Go</p>
                    </a>
                    <a href='/interim'>
                        <p>Meals Plans Interim</p>
                    </a>
                    <a href='/order'>
                        <p>Meal Plans Order</p>
                    </a>
                        <a href='/rewards'>
                        <p>Rewards</p>
                    </a>
                </div>
                <div className='sb_footer-links_div'>
                    <h4>Contact</h4>
                    <a href='/number'>
                        <p> 🕿 +65 9119 1199</p>
                    </a>
                    <a href='/email'>
                        <p> ✉ leanlab@gmail.com</p>
                    </a>
                    <a href='/socials'>
                        <p> 🌏︎ Singapore</p>
                    </a>
                </div>
                <div className="newsletter">
                    <form>
                        <h3>Sign up to our newsletter and get $20 off your first order!</h3>
                        <input 
                            type="email"
                            name="newsletter_email"
                            id="newsletter_email"
                            placeholder='Email'
                        />
                        <input type="button" value="Submit" />
                    </form>
            </div>
            </div>
            
            <div className='sb_footer-below'>
                <div className='sb_footer-copyright'>
                    <p>
                        @{new Date().getFullYear()} LeanLab. All Rights Reserved.
                    </p>
                </div>
                 <div className='sb_footer-below-links'>
                <a href="/terms"><div><p>Terms & Conditions</p></div></a>
            </div>
            </div>
           
        </div>

    </div>
  )
}

export default Footer

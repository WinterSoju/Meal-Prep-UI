import React from 'react'
import './Footer.css'


function Footer() {
  return (
    <div className='footer'>
        <div className='sb_footer section_padding'>
            <div className='sb_footer-links'>
                <div className='sb_footer-links_div'>
                    <h4>ABOUT</h4>
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
                    <h4>FOOD</h4>
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
                    <h4>CONTACT</h4>
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
                    <a href="/terms"><div className='links'><p>Terms & Conditions</p></div></a>
                </div>
                <div className='sb_footer-socialmedia'>
                    <p>Social Media</p>
                    <a href="#" className='fb-icon'>
                        <svg
                            viewBox='-337 273 123.5 256' 
                            className='icon'>
                            <path
                                d="M-260.9,327.8c0-10.3,9.2-14,19.5-14c10.3,0,21.3,3.2,21.3,3.2l6.6-39.2c0,0-14-4.8-47.4-4.8c-20.5,0-32.4,7.8-41.1,19.3
                                c-8.2,10.9-8.5,28.4-8.5,39.7v25.7H-337V396h26.5v133h49.6V396h39.3l2.9-38.3h-42.2V327.8z"
                                fill="currentColor"
                            /> 
                        </svg>
                    </a>
                    <a href="#" className='ig-icon'>
                        <svg
                            className="icon"
                            viewBox="-271 273 256 256">
                                    <defs>
                                <linearGradient id="igGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stop-color="#f9ce34" />
                                    <stop offset="50%" stop-color="#ee2a7b" />
                                    <stop offset="100%" stop-color="#6228d7" />
                                </linearGradient>
                                </defs>
                            <path
                                d="M-64.5,273h-157c-27.3,0-49.5,22.2-49.5,49.5v52.3v104.8c0,27.3,22.2,49.5,49.5,49.5h157c27.3,0,49.5-22.2,49.5-49.5V374.7
                                v-52.3C-15.1,295.2-37.3,273-64.5,273z M-50.3,302.5h5.7v5.6v37.8l-43.3,0.1l-0.1-43.4L-50.3,302.5z M-179.6,374.7
                                c8.2-11.3,21.5-18.8,36.5-18.8s28.3,7.4,36.5,18.8c5.4,7.4,8.5,16.5,8.5,26.3c0,24.8-20.2,45.1-45.1,45.1s-44.9-20.3-44.9-45.1
                                C-188.1,391.2-184.9,382.1-179.6,374.7z M-40,479.5C-40,493-51,504-64.5,504h-157c-13.5,0-24.5-11-24.5-24.5V374.7h38.2
                                c-3.3,8.1-5.2,17-5.2,26.3c0,38.6,31.4,70,70,70c38.6,0,70-31.4,70-70c0-9.3-1.9-18.2-5.2-26.3H-40V479.5z"
                                fill="currentColor"
                            />
                        </svg>
                    </a>
                    <a href="#" className='x-icon'>
                        <svg
                            className="icon"
                            viewBox="0 0 16 16">
                            <path
                                d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
                                fill="currentColor"
                            />
                        </svg>
                    </a>
                        <a href="#" className='yt-icon'>
                        <svg
                            className="icon"
                            viewBox="0 0 16 16">
                            <path
                                d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"
                                fill="currentColor"
                            />
                        </svg>
                    </a>
                </div>
            </div>
           
        </div>

    </div>
  )
}

export default Footer

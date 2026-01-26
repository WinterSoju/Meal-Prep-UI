import { click } from '@testing-library/user-event/dist/click'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import { Button } from './Button'

function NavBar() {
    const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  React.useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);


  return (
   <>
    <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-logo">
                LeanLab <i className="fa fa-flask"></i>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                    <Link to="/menu" className="nav-links" onClick={closeMobileMenu}>
                        Menu
                    </Link>
                </li>   
                 <li className="nav-item">
                    <Link to="/order" className="nav-links" onClick={closeMobileMenu}>
                        Order
                    </Link>
                </li>   
                     <li className="nav-item">
                    <Link to="/recipes" className="nav-links" onClick={closeMobileMenu}>
                        Recipes
                    </Link>
                </li> 
                     <li className="nav-item">
                    <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                        About
                    </Link>
                </li> 
                <li className="nav-item">
                    <Link to="/contactus" className="nav-links" onClick={closeMobileMenu}>
                        Contact Us
                    </Link>
                </li>   
                     <li className="nav-item">
                   <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
                >
                        Search
                    </Link>
                </li> 
            </ul>
            {button && <Button buttonStyle='btn--outline'>
                <i className="fa fa-search" aria-hidden="true"></i>
                </Button>}
            {button && <Button buttonStyle='btn--outline'>
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                </Button>}    
              
        </div>
    </nav>
   </>
  )
}

export default NavBar;

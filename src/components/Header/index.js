import './styles.css';
import Logo from '../../images/logo.png';
import menuLogo from '../../images/menu.png';
import closeLogo from '../../images/close.png';
import { useState } from 'react';

function Header() {
    const [showNav,setshowNav] = useState(false);

  return (
    <div class="navbar" style={{maxHeight: showNav === false ? '0px':'200px',padding: showNav === false ? '0px':'10px'}}>
    <img src={Logo} className="logo" alt=''/>
    <nav>
        <ul>
              <li><a href="#home" onClick={() => {setshowNav(false)}}>HOME</a></li>
              <li><a href="#feature" onClick={() => {setshowNav(false)}}>FEATURES</a></li>
              <li><a href="#service" onClick={() => {setshowNav(false)}}>SERVICES</a></li>
              <li><a href="#testimonial" onClick={() => {setshowNav(false)}}>TESTIMONIALS</a></li>
              <li><a href="#footer" onClick={() => {setshowNav(false)}}>MEET US</a></li>
        </ul>
    </nav>
    <div id="menuBtn" onClick={() => {
    if(showNav === false){
      setshowNav(true)
    } else {
      setshowNav(false)
    }
  }}>
    {showNav === false ? (
      <img src={menuLogo} id="menu" alt=''></img>
     ):
      <img src={closeLogo} id="close" alt=''/>}
    </div>
  </div>
);
}

export default Header;
import React from 'react';
import logo from '../assets/logo.png';
import './mobile-navigation-view.scss';
import { Link } from "react-router-dom";


 export class MobileNavbar extends React.Component {
        constructor() {
            super() 
            this.state = {

            }
        }


  render () {
    
    return <div className='navbar'>
  <header className="header">
  <Link to={"/"} className="logoLink"><img className="logoImg" src={logo} alt="" />
  <h1 className="title_mobile">Collection</h1>
  </Link>
  <input className="menu-btn" type="checkbox" id="menu-btn" />
  <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
  <ul className="menu">
      <li><Link to={"/artist"}>
       <button>Artists</button>
        </Link></li>
      <li><Link to={"/about"}>
       <button>About</button>
        </Link></li>
  </ul>
</header>
    </div>
  }
}
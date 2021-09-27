import React from 'react'
import logo from '../assets/logo.png';
import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import './logo-loader-view.scss'

export class LogoLoader extends React.Component {



  render () {

    return <>
    <div className="fullscreenLoader">
        <div>
            <img src={logo} alt=""  />
            <h1>Collection</h1>
            </div>
</div>
</>
  }
}

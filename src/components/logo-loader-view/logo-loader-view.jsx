import React from 'react'
import logo from '../assets/logo.png';
import './logo-loader-view.scss'

export class LogoLoader extends React.Component {



  render () {

    return <>
    <div className="fullscreenLoader">
        <div>
            <img src={logo} alt=""  />
            <h1 className="title_view">Collection</h1>
            </div>
</div>
</>
  }
}

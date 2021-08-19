import React from 'react';
import logo from 'url:./logo.svg'
import './logo-view.scss'
import 'url:../../fonts/edwardian-script-itc-regular.ttf';


export class LogoView extends React.Component {
    render () {
        return (
            <div className="logo"><img src={logo} alt="logo image"/>
            <h1>Collection</h1>
            </div>
        )
    }
}
import React from 'react';
import logo from '../assets/logo.png'
import './logo-view.scss'


export class LogoView extends React.Component {
    render () {
        return (
            <div className="logo"><img src={logo} alt="logo image"/>
            <h1>Collection</h1>
            </div>
        )
    }
}
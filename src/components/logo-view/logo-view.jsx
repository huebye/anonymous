import React from 'react';
import logo from '../assets/logo.png';
import './logo-view.scss';
import { Link } from "react-router-dom";


export class LogoView extends React.Component {
    render () {
        return (
            <div className="logo">
                <Link to={"/"}>
                <img className="logoImg" src={logo} alt="logo image"/>
            <h1>Collection</h1>
                </Link>
            </div>
        )
    }
}
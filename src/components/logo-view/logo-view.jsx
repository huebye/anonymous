import React from 'react';
import logo from '../assets/logo.png';
import './logo-view.scss';
import { Link } from "react-router-dom";


export class LogoView extends React.Component {
    render () {
        return (
            <div className="logo">
                <Link to={"/"}>
                <img className="logoImg11" src={logo} alt="logo image"/>
            <h1 className="title_view">Collection</h1>
                </Link>
            </div>
        )
    }
}
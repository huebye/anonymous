import React from 'react';
import './navigation-view.scss'
import { Link } from "react-router-dom";


export class NavigationView extends React.Component {
    render () {
        return (
            <div className="navigation">
            <Link to={"/artist"}>
            <button>Artists</button>
            </Link><br />
            <Link to={"/about"}>
            <button>About</button>
            </Link>
            </div>
        )
    }
}
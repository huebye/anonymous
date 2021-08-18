import React from 'react';
import './navigation-view.scss'
import { Link } from "react-router-dom";


export class NavigationView extends React.Component {
    render () {
        return (
            <div className="navigation">
            <Link to to={"/artist"}>
            <button>Artist</button>
            </Link><br />
            <Link to to={"/"}>
            <button>About</button>
            </Link>
            </div>
        )
    }
}
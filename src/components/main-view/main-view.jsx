import React from 'react';
import './main-view.scss'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LogoView } from '../logo-view/logo-view';
import { NavigationView } from '../navigation-view/navigation-view';
import { ImageSlideView } from '../imageslide-view/imageslide-view';
const axios = require('axios');


export class MainView extends React.Component {
    constructor() {
        super();
        this.state = {
            art: {},
            imagePath: {},
        }
        
    }


    componentDidMount() {
        this.getArt();
        console.log(art);
      }

      getArt() {
        axios.get('https://shrouded-caverns-29574.herokuapp.com/art')
        .then(response => {
          this.setState({
            art: response.data,   
            imagePath: response.data[0].ImagePath                                          
          });
        })
        .catch(function (error) {
          console.log(error);
        });
      }

    render () {
        return (
        <Router>
        <div>
            <Route exact path="/">
            <LogoView />
                <div className="start">
            <NavigationView />
            <ImageSlideView art={art} image={this.state.imagePath}/>
                </div>
            </Route>

            <Route exact path="/artist">
            <LogoView />
            <div className="start">
            <NavigationView />
            </div>
            </Route>
        </div>
        </Router>
            
        );
    }
}
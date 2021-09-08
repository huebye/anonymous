import React from 'react';
import axios from 'axios';
import './main-view.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LogoView } from '../logo-view/logo-view';
import { NavigationView } from '../navigation-view/navigation-view';
import { ImageSlideView } from '../imageslide-view/imageslide-view';



export class MainView extends React.Component {
    constructor() {
        super();
        this.state = {
          data: {}
        }
    }


    componentDidMount() {
      this.getArt();
      }

      
      getArt = () => {
        axios.get('https://shrouded-caverns-29574.herokuapp.com/art', {
          headers: {'Cross-Origin-Resource-Policy': 'require-corp' }
        })
        .then(response => {
         const data = response.data[0];
          this.setState({
           data: data
         });
        })
        .catch(function (error) {
          console.log(error);
        });
      };

    render () {
      let data = this.state.data;
      console.log(data.Name);
        return (
        <Router>
        <div>
            <Route exact path="/">
            <LogoView />
                <div className="start">
            <NavigationView />
            <ImageSlideView data={data} />
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
import React from 'react';
import axios from 'axios';
import './main-view.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LogoView } from '../logo-view/logo-view';
import { NavigationView } from '../navigation-view/navigation-view.jsx';
import { ImageSlideView } from '../imageslide-view/imageslide-view.jsx';
import { ArtistList } from '../artist-list-view/artist-list-view';
import { Artist } from '../artist-view/artist-view';
import { About } from '../about-view/about-view';
import { LogoLoader } from '../logo-loader-view/logo-loader-view';





export class MainView extends React.Component {
    constructor() {
        super();
        this.state = {
          data: [],
          loader: true
        }
    }


    componentDidMount() {
      this.getArt()
      setTimeout(() => {
        this.setState({loader: false})
      }, 4000);
      }

      
      getArt() {
        axios.get('https://shrouded-caverns-29574.herokuapp.com/art',{
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
        })
        .then(response => {
         const data = response.data;
          this.setState({
           data: data
         });
        })
        .catch(function (error) {
          console.log(error);
        });
      };

    render () {
      let { data, loader } = this.state;

      if(loader === true) {
        return <LogoLoader />
      }

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
            <div className="artist_list">
            <ArtistList data={data}/>
            </div>
            </div>
            </Route>

            <Route exact path="/artist/:name" render={() => {
              return <>
                  <LogoView />
                  <div className="start">
                  <NavigationView /> 
                  <div className="artist_list">     
               <Artist />
                  </div>
              </div> 
              </>       
            }}/>

            <Route exact path="/about">
              <LogoView />
              <div className="start">
              <NavigationView />
              <About />
              </div>
            </Route>
        </div>
        </Router>         
        );
    }
}


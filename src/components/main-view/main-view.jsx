import React, { useState } from 'react';
import axios from 'axios';
import './main-view.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LogoView } from '../logo-view/logo-view';
import { NavigationView } from '../navigation-view/navigation-view.jsx';
import { ImageSlideView } from '../imageslide-view/imageslide-view.jsx';
import { ArtistList } from '../artist-list-view/artist-list-view';
import { Artist } from '../artist-view/artist-view';



export class MainView extends React.Component {
    constructor() {
        super();
        this.state = {
          data: [],
        }
    }


    componentDidMount() {
      this.getArt();
      console.log(this.state.data)
      }

      
      getArt() {
        axios.get('https://shrouded-caverns-29574.herokuapp.com/art',{
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
        })
        .then(response => {
         const data = response.data;
        // response.data.forEach(element => {
           //let allNames = element.Name;
           //this.setState({
          //   name: allNames
          // })
       //  });
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
      console.log(data);
      //console.log(names);
      
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

            <Route exact path="/artist/:name" render={({ match, history }) => {
              return (
                <div className="artist_collection">
                  <LogoView />
                  <div className="start">
                  <NavigationView /> 
                  <div className="artist_list">     
              <Artist artist={data.filter(d => d.Name === match.params.name)} onBackClick={() => history.goBack()}/>
                  </div>
              </div> 
              </div>
              
              )
            }}/>
        </div>
        </Router>
            
        );
    }
}


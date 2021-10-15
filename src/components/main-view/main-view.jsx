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
import { MobileNavbar } from '../mobile-navigation-view/mobile-navigation-view';




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
      }, 2500);
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

      const images = data.map(elem => {
        return{
             original: elem.ImagePath,
             description: elem.Name + ' - ' + elem.Title,
             originalAlt: elem.Name + ' - ' + elem.Title,
           }
          });

          const imagesGallery = images.sort(()=> Math.random() - 0.5);
   // console.log(dataShuffled)
   //console.log(imagesGallery);

      if(loader === true) {
        return <LogoLoader />
      }

        return (
        <Router>
        <div>
            <Route exact path="/">
            <LogoView />
                <div className="start">
                  <div>
                  <NavigationView />
                  <MobileNavbar />
                  </div>
            <ImageSlideView data={imagesGallery} />
                </div>
            </Route>

            <Route exact path="/artist">
            <LogoView />
            <div className="start">
            <div>
                  <NavigationView />
                  <MobileNavbar />
                  </div>
            <div className="artist_list fade-in">
            <ArtistList data={data}/>
            </div>
            </div>
            </Route>

            <Route exact path="/artist/:name" render={() => {
              return <>
                  <LogoView />
                  <div className="start">
                  <div className="navView">
                  <NavigationView />
                  <MobileNavbar />
                  </div>
                  <div className="artist_list">     
               <Artist  data={data}/>
                  </div>
              </div> 
              </>       
            }}/>

            <Route exact path="/about">
              <LogoView />
              <div className="start">
              <div>
                  <NavigationView />
                  <MobileNavbar />
                  </div>
              <About />
              </div>
            </Route>
        </div>
        </Router>         
        );
    }
}


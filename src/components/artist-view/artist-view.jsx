import React, {useState, useEffect} from 'react';
import Zoom from 'react-medium-image-zoom';
import { useParams } from 'react-router';
import 'react-medium-image-zoom/dist/styles.css';
import './artist-view.scss';
import axios from 'axios';

export function Artist() {   
const [artist, setArtist] = React.useState([])

const { name } = useParams();

 const getArtistData = () => {
  axios.get('https://shrouded-caverns-29574.herokuapp.com/art',{
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
      })
      .then(response => {
        const data = response.data;
        const artistFiltered = data.filter(d => d.Name === name);
        setArtist(artistFiltered);
      });
      }
 
      React.useEffect(() => {
        getArtistData()
        return () => {
          setArtist([]);
        }
      }, [])


console.log(artist)
  return (
    <div className="artist_grid">
    <div className="artistName">
      <h2>{name}</h2>
      </div>
    <div className="art">
          {artist.map((d,index) => {
            return (
          <div className="artist_view" key={index}>
         <Zoom transitionDuration={0} overlayBgColorEnd='rgba(0,0,0,1)'  zoomMargin={190}><img className="artist_images" src={d.ImagePath} alt="" /></Zoom>
                <p><strong>Title:</strong> {d.Title} <br /><strong>Edition:</strong> {d.Edition} <br /> <strong>Material:</strong> {d.Material} <br /> <strong>Size:</strong> {d.Size}</p>
          </div>

            )
          })
  }
    
    </div>
    </div>
  )
}

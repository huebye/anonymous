import React, {useState, useEffect} from 'react';
import Zoom from 'react-medium-image-zoom';
import { useParams } from 'react-router';
import 'react-medium-image-zoom/dist/styles.css';
import './artist-view.scss';
import axios from 'axios';

export function Artist(props) {   
const [artist, setArtist] = React.useState([])
//console.log(props)
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
        console.log('set fetch')
      });
      }
 
      React.useEffect(() => {
        if(props.data) {
          const dataProps = props.data;
          const artistFilteredProps = dataProps.filter(d => d.Name === name);
          setArtist(artistFilteredProps);
          console.log('set props')
        } else
        getArtistData()
        return () => {
          setArtist([]);
        }
      }, [])


//console.log(artist)
  return (
    <>
    <div className="artist_grid">
    <div className="artistName">
      <h2>{name}</h2>
      </div>
    <div className="art fade-in">
          {artist.map((d,index) => {
            return (
          <div className="artist_view" key={index}>
         <Zoom transitionDuration={0} overlayBgColorEnd='rgba(0,0,0,1)'  zoomMargin={90}><img loading="lazy" className="artist_images fade-in" src={d.ImagePath} alt={d.Name + d.Title}  /></Zoom>
                <p><strong>Title:</strong>  {d.Title} <br /><strong>Year:</strong> {d.Year} <br /><strong>Material:</strong> {d.Material} <br /> <strong>Size:</strong> {d.Size} <br /> <strong>Edition:</strong> {d.Edition}</p>
          </div>

            )
          })
  }
    
    </div>
    </div>
    <h2 className="name_bottom">{name}</h2>
    </>
  )
}

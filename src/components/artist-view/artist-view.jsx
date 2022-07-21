import React, {useState, useEffect} from 'react';
import Zoom from 'react-medium-image-zoom';
import { Controlled as ControlledZoom } from 'react-medium-image-zoom';
import { useParams } from 'react-router';
import 'react-medium-image-zoom/dist/styles.css';
import './artist-view.scss';
import axios from 'axios';

export function Artist(props) {   
const [artist, setArtist] = React.useState([]);
const [switchNameFinal, setName] = React.useState('');
const [isZoomed, setZoom] = React.useState(false);
const [clickedImage, setClickedImage] = React.useState(null);
const [fullscreen, setFullscreen] = React.useState(false)

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

      const handleZoomChange = () => {
        if(isZoomed === true) {
          setZoom(false)
          setFullscreen(false)
        } else {
          setZoom(true)
        }
      }; 

      const imageClicked = (event) => {
        setFullscreen(true)
        setZoom(true)
        setClickedImage(event.target.src)
      }
 
      React.useEffect(() => {
        if(props.data) {
          const dataProps = props.data;
          const artistFilteredProps = dataProps.filter(d => d.Name === name);
          setArtist(artistFilteredProps);
          switchName(name)
        } else
        getArtistData()
        switchName(name)
        return () => {
          setArtist([]);
        }
      }, [])

      const switchName = (nameArtist) => {
        let firstWord = nameArtist.split(" ")[0]
        let secondWord = nameArtist.split(" ")[1]
        let thirdWord = nameArtist.split(" ")[2]
        let fourthWord = nameArtist.split(" ")[3]

        if (thirdWord === undefined) {
          const switchedName = secondWord + ' ' + firstWord;
          return setName(switchedName)
        } else if ((fourthWord === undefined) && (thirdWord === undefined)) {
          const switchedName = secondWord + ' ' + firstWord ;
          return setName(switchedName)
        } else if ((fourthWord != undefined) && (thirdWord != undefined)) {
          const switchedName = secondWord + ' ' + thirdWord + ' ' + fourthWord + ' ' + firstWord 
          return setName(switchedName)
        } else if (thirdWord != undefined) {
          const switchedName = secondWord + ' ' + thirdWord + ' ' + firstWord;
          return setName(switchedName)
        }
      };

  return (

    <>
  <div className="artist_grid">
    <div className="artistName">
      <h2>{switchNameFinal}</h2>
      </div>
     <div className="art fade-in">
          {artist.map((d) => {
    
              return (
                <div className="artist_view" key={d._id}>
                              <img loading="lazy" className="artist_images fade-in" src={d.ImagePath} alt={d.Name + d.Title} onClick={imageClicked.bind(this)} />
                  <p><strong>Title:</strong> <span>{d.Title.toUpperCase()}</span> <br /><strong>Year:</strong> {d.Year} <br /><strong>Material:</strong> {d.Material} <br /> <strong>Size:</strong> {d.Size}</p>
                  {fullscreen === true &&
                  <div className='artist_view_zoom'>
                    <ControlledZoom   isZoomed={isZoomed} onZoomChange={handleZoomChange.bind(this)} transitionDuration={0} overlayBgColorEnd='rgba(0,0,0,1)' zoomMargin={5}>
                <img loading="lazy" className="artist_images_zoom fade-in " src={clickedImage} />
                </ControlledZoom>
                  </div>
                  }
                </div>
                  )
            
          })
  } 
     </div>
  </div>
    <h2 className="name_bottom">{switchNameFinal}</h2>
    </>
  )
}

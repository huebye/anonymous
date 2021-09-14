import React from 'react'
import ReactDOM from 'react-dom';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import './artist-view.scss';

export class Artist extends React.Component {   
  constructor() {
    super()
    this.state= {
  
    }
  }

render () {
  const { artist } = this.props

  //console.log(artist);

  return (
    <div className="art">
          <h2>{artist[0].Name}</h2>
          {artist.map((d,index) => {
            return (
          <div className="artist_view" key={index}>
         <Zoom transitionDuration={0} overlayBgColorEnd='rgba(0,0,0,1)'  zoomMargin={190}><img className="artist_images" src={d.ImagePath} alt="" /></Zoom>
                <p>Edition: {d.Edition}, Material: {d.Material}</p>
          </div>

            )
          })
  }
    
    </div>
  )
}
}
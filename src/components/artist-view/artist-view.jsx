import React from 'react'
import ReactDOM from 'react-dom';
import './artist-view.scss';

export function Artist(props) {   

  const { artist } = props

  console.log(artist);

  return (
    <div>

          {artist.map((d,index) => {
            return (
          <div className="artist_view" key={index}>
                <img src={d.ImagePath} alt="" />
          </div>

            )
          })
  }
    
    </div>
  )
}
import React from 'react'
import ReactDOM from 'react-dom';
import './artist-list.view.scss';
import { Artist } from '../artist-view/artist-view';
import { Link } from "react-router-dom";

export function ArtistList(props) {



  const { data } = props;
  const madeArr = Array.from(data);
  
//console.log(madeArr);
  return (
    <ul>
      {madeArr.map((d,index) => {
        return (
<div key={index} className="artist-list-view">
          
        <li key={d._id}>
          <Link to={`/artist/${d.Name}`}>
            ´<button className="artist_btn" variant="link">{d.Name}</button>
          </Link>
            </li>
          
        </div>
        )
    
      })}
    </ul>

  )
}

  

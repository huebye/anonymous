import React from 'react';
import './artist-list.view.scss';
import { Link } from "react-router-dom";

export class ArtistList extends React.Component {
constructor() {
    super()
    this.state = {

    } 

}


getUniqueListBy(arr, key) {
  return [...new Map(arr.map(item => [item[key], item])).values()]
}



render() {

  const { data } = this.props;
  const madeArr = Array.from(data);
  const dataNames = madeArr.map((d) => (
    {
      Name: d.Name
    }
  ));

  const namesNoDouble = this.getUniqueListBy(dataNames, 'Name');


  const group = namesNoDouble
    .sort((a, b) => a.Name.localeCompare(b.Name))
    .reduce((r, e) => {
      const key = e.Name[0];
      if(!r[key]) r[key] = []
      r[key].push(e);
      return r;
    }, {});


  return <div className="artist-list-view">
  {Object.entries(group)
    .map(([key, value], i) => {
      return <div key={i}>
        <strong className="strong_letter">{key}</strong>
        {value.map((item, j) => <div className="list_names" key={j}>
          <Link to={`/artist/${item.Name}`}>
            <button className="artist_btn" variant="link">{item.Name}</button>
          </Link></div>)}
      </div>
    })}
    </div>
}
}

  

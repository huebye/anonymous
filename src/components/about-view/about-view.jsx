import React from 'react';
import './about-view.scss';

export class About extends React.Component {

  render () {
    return <div className='aboutSection'>
     <p>The presented artworks are part of a private collection located in Berlin, Germany. <br /><br />
        In order to offer the beauty and excellence of the <span>artworks</span>  and their creators, the <span>artists</span>, to a wider audience, the presentation of the collection takes place online with the idea to form a digital off-space.<br />
      <br />
        We hope you are enjoying this idea and get to know artworks which would be hidden otherwise. <br />

        In case of questions, please contact us: 

        anonymous@anonymouscollection.com <br /><br />

        Have a nice day and stay healthy!</p>
    </div>
  }
}
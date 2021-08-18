import React from 'react';
import './imageslide-view.scss';
import TwoTrucks from './TwoTrucks.png';
import WillyBrandt from './WillyBrandt.png';
import CorporateIdentity from './CorporateIdentity.png'
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';


export class ImageSlideView extends React.Component {
    constructor() {
        super();
      }

    render () {
        
        return (
            <div className="imageslide">
                <Zoom zoomMargin={120} overlayBgColorEnd='rgba(0,0,0,0.7)'>
                <img className="image1" src={TwoTrucks} alt="art piece"/ >
                </Zoom>
            </div>
        )
    }
}
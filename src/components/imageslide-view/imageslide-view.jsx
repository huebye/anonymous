import React from 'react';
import './imageslide-view.scss';
import TwoTrucks from './TwoTrucks.png';
import WillyBrandt from './WillyBrandt.png';
import CorporateIdentity from './CorporateIdentity.png'
import Zoom from 'react-medium-image-zoom';
import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


const images = [
    {
      original: WillyBrandt ,
      description: '• Willy Brandt',
    },
    {
      original: TwoTrucks ,
      description: '• Two Trucks',
    },
    {
      original: CorporateIdentity ,
      description: '• Corporate Identity',
    }
  ];

export class ImageSlideView extends React.Component {
    constructor() {
        super();
        this.state= {
            slideDuration:0,
            slideInterval: 3500,
            showGalleryPlayButton: false,
            showNav: false,
            showPlayButton: false,
            showBullets: false,
            infinite: true,
            showThumbnails: false,
            showFullscreenButton: false,
            showGalleryFullscreenButton: false,
            autoPlay: true,
            useTranslate3D: true,
            swipeThreshold: 0,
            lazyLoad: true,
            stopPropagation: false,
            clickedImage: null,
            isZoomed: true,
            fullscreen: false,
            imageIndex: 0
        }
      }

      _onImageClick(event) {
        let image = event.target.src;
        let index = this._imageGallery.getCurrentIndex();
        console.log(index);
        this.setState({
            clickedImage: image,
            isZoomed: true,
            fullscreen: true,
            imageIndex: index
          });
      }
      _handleZoomChange() {
        this.setState({
            isZoomed: false,    
            clickedImage: null,
            fullscreen: false
        })
      };  

      

    render () {
    const { fullscreen ,isZoomed} = this.state
if(fullscreen === false) {
  return (
    <div className="imageslide">
    <ImageGallery 
    items={images}
    ref={i => this._imageGallery = i}   
    slideDuration={this.state.slideDuration}
    slideInterval={this.state.slideInterval}
    showPlayButton={this.state.showPlayButton}
    infinite={this.state.infinite}
    showThumbnails={this.state.showThumbnails}
    showGalleryFullscreenButton={this.state.showGalleryFullscreenButton}
    showFullscreenButton={this.state.showFullscreenButton}
    showBullets={this.state.showBullets}
    autoPlay={this.state.autoPlay}
    showNav={this.state.showNav}
    useTranslate3D={this.state.useTranslate3D}
    isRTL={this.state.isRTL}
    swipeThreshold={this.state.swipeThreshold}
    additionalClass="app-image-gallery"
    lazyLoad={this.state.lazyLoad}
    stopPropagation={this.state.stopPropagation}
    onClick={this._onImageClick.bind(this)}
    startIndex={this.state.imageIndex}
    />
</div>
)
} else if(fullscreen === true) {
  return (
    <div className="fullscreen">
        <ControlledZoom transitionDuration={0} isZoomed={isZoomed} zoomMargin={190} overlayBgColorEnd='rgba(0,0,0,1)' onZoomChange={this._handleZoomChange.bind(this)} ><div><img src={this.state.clickedImage} alt="" /></div></ControlledZoom>
  </div>
  )

}
        
            
    }
}
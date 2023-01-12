import React from 'react';
import './imageslide-view.scss';
import { Controlled as ControlledZoom } from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


export class ImageSlideView extends React.Component {
    constructor() {
        super();
        this.state= {
            slideDuration:0,
            slideInterval: 4000,
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
            clickedDescription: null,
            isZoomed: true,
            fullscreen: false,
            imageIndex: 0,
            swipingTransitionDuration: 1000,
        }
      }

      _onImageClick(event) {
        let image = event.target.src;
        let index = this._imageGallery.getCurrentIndex();
        this.setState({
            clickedImage: image,
            isZoomed: true,
            fullscreen: true,
            autoPlay: false,
            imageIndex: index,
            clickedDescription: event.target.alt,
          });
      }
      _handleZoomChange() {
        this.setState({
            isZoomed: false,    
            clickedImage: null,
            fullscreen: false,
            autoPlay: true,
            clickedDescription: null,
        })
      };  

      generateStyles(element) {
        let style = {}

        if(element === 'img') {
          if(window.innerWidth < 600) {
            style.maxWidth = '200px'
            style.maxHeight = '200px'
          } else if(window.innerWidth > 600 && window.innerWidth < 800) {
            style.maxWidth = '400px'
            style.maxHeight = '400px'
          } else {
            style.maxWidth = '800px'
            style.maxHeight = '500px'
          }
        }

        if(element === 'divFull') {
          if(window.innerWidth < 500) {
            style.transform = 'scale(1.9)'
          } 
        }

        if(element === 'desc') {
          if(window.innerWidth < 500) {
            style.fontSize = '7px'
            style.textAlign = 'center'
          } 
        }
        return style
      }

      

    render () {
    const { fullscreen ,isZoomed} = this.state
    const {data} = this.props

    const styles = {
      maxHeight: '800px',
    }
   
if(fullscreen === false) {
  return (
    <div className="imageslide" >
    <ImageGallery 
    lazyLoad={this.state.lazyLoad}
    items={data}
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
    stopPropagation={this.state.stopPropagation}
    onClick={this._onImageClick.bind(this)}
    startIndex={this.state.imageIndex}
    swipingTransitionDuration={this.state.swipingTransitionDuration}
    />
</div>
)
} else if(fullscreen === true) {
  return (
    <div className="fullscreen" style={this.generateStyles('divFull')} onClick={this._handleZoomChange.bind(this)}>
        <img loading='lazy' style={this.generateStyles('img')} src={this.state.clickedImage} alt={this.state.clickedDescription} />
        <p className="fullscreen_description" style={this.generateStyles('desc')}>{this.state.clickedDescription}</p>
  </div>
  )

}
        
            
    }
}
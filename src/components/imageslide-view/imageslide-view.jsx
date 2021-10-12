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
        console.log(event.target.alt)
        let image = event.target.src;
        let index = this._imageGallery.getCurrentIndex();
        console.log(index)
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
    lazyLoad={true}
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
    lazyLoad={this.state.lazyLoad}
    stopPropagation={this.state.stopPropagation}
    onClick={this._onImageClick.bind(this)}
    startIndex={this.state.imageIndex}
    swipingTransitionDuration={this.state.swipingTransitionDuration}
    />
</div>
)
} else if(fullscreen === true) {
  return (
    <div className="fullscreen">
        <ControlledZoom transitionDuration={0} isZoomed={isZoomed} zoomMargin={190} overlayBgColorEnd='rgba(0,0,0,1)' onZoomChange={this._handleZoomChange.bind(this)} ><div className="fullscreen_div fade-in"><img style={styles} src={this.state.clickedImage} alt={this.state.clickedDescription} />
        <p className="fullscreen_description">{this.state.clickedDescription}</p>
        </div>
        </ControlledZoom>
  </div>
  )

}
        
            
    }
}
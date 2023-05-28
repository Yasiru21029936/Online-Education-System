import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import '../Styles/Slider.css'



const fadeImages = [
  {
  url: '11.jpg',
  caption: 'First Slide'
  },
  {
  url: '11.jpg',
  caption: 'First Slide'
  },
  {
  url: '11.jpg',
  caption: 'First Slide'
  },
  {
  url: '11.jpg',
  caption: 'First Slide'
  },
  {
  url: '11.jpg',
  caption: 'First Slide'
  },
  {
  url: '11.jpg',
  caption: 'Second Slide'
  },
  {
  url: '11.jpg',
  caption: 'Third Slide'
  },
];

const AdSlideShow = () => {
  return (
    <div className = "slideMain">

    <center>

        <div className="slide-container" style={{height:"50%",marginTop:'1%'}}>
        
        
          <Fade>
            {fadeImages.map((fadeImage, index) => (
              <div className="each-fade" key={index} >
                <div className="image-container">
                  <img src = {require(`../images/${fadeImage.url}`)} width='100%' height='100%' />
                </div>
                <div style={{padding:'10px'}}>
                </div>
                
              </div>
            ))}
          </Fade>
        </div>
        
            </center>
        </div>
  )
}
export default AdSlideShow
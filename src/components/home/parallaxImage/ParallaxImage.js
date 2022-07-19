import React from 'react';
import { Parallax } from 'react-parallax';

import headerImage from './headerImage.jpg';
import './ParallaxImage.css'

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };

//this below is for the positioning of the text 
const inlineStyle = {
    left: '50%',
    top: '50%',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    width: '100%'
}

//Question: Do you want the parallax or no?
function ParallaxImage() {
    return (
        <div style={styles}>
            <div style={{ height: '10vh' }}></div>
            <Parallax
                bgImage={headerImage}
                bgImageStyle={{ height: 'auto', width: '100%' }}
                strength={500}
            >
                {/* this styling is for the parallax itself */}
                <div style={{ 
                    height: 800,
                    width: '100%',
                    }}>
                    <div style={inlineStyle}>
                        <h1 className={"parallax-image-text-color parallax-inner-header"}>Avant Design STUDIO</h1>
                        <p className={"parallax-image-text-color parallax-support-text"}>Curating Living Spaces</p>
                    </div>
                </div>
            </Parallax>
            <div style={{ height: '10vh' }}></div>
        </div>
    )
}

export default ParallaxImage;
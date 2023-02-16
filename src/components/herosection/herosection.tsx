import Head from 'next/head'
import Image from 'next/image'
import { Collapse, Typography } from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import heroImageOne from 'public/images/Image 1@2x.png'
import heroImageTwo from 'public/images/Image 2@2x.png'
import heroImageThree from 'public/images/Image 3@2x.png'
import { style } from '@mui/system';
import React, {useState} from "react";
import { Animation, Typer } from 'react-easy-animations'
import styles from '@/styles/Herosection.module.css'
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

const herosection = () => {

    return (
        <div className={styles.carouselWrapper}>
            <Carousel className={styles.carousel} infiniteLoop autoPlay
            interval={10000} showThumbs={false} showArrows={false} 
            showIndicators={false} showStatus={false} transitionTime={700}>

                <div>
                    <Image className={styles.heroImage} src={heroImageThree} 
                    alt = "hero image 3" placeholder="blur" />
                </div>

                <div>
                    <Image className={styles.heroImage} src={heroImageTwo}
                    alt = "hero image 2" placeholder="blur" />
                </div>

                <div>
                    <Image className={styles.heroImage} src={heroImageOne}
                    alt = "hero image 1" placeholder="blur" />
                </div>
            </Carousel>
           
            <div className={styles.sloganAndCTASection}>
                <div className={styles.sloganAndCTATextWrapper}> 
                    {/* <MouseParallaxContainer className={styles.mouseParallaxCon} globalFactorX={0.1} globalFactorY={0.1}>
                        <MouseParallaxChild factorX={0.3} factorY={0.3}> */}
                            <Typography className={styles.sloganText} variant="h1" component="div">
                                <Typer dataText={['INTERACTIVE','IMMERSIVE','BREATHTAKING','HYPNOTIC']}
                                cursorColor="#2196f3" /> 
                                CONCERT EXPERIENCES
                            </Typography>
                    
                            <Typography className={styles.descriptionText} variant="h3" component="div">
                                Experience your favourite artists like never before <br /> 
                                from the comfort of your own home
                            </Typography>
                       {/* </MouseParallaxChild>
                    </MouseParallaxContainer> */}
                </div>
            </div>
         

            <div className={styles.scrolldown}>
              <div className={styles.chevrons}>
                <div className={styles.chevrondown}></div>
                <div className={styles.chevrondown}></div>
              </div>
            </div>     
        </div>
    );
}

export default herosection;
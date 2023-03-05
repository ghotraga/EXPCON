import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
//For the half side of my large monitor// import { ParallaxBanner } from "react-scroll-parallax"

// import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types"
// import imageBackground from 'public/images/image5.jpg'
// import imageForeground from 'public/images/imageRemoveBG.png'
// import styles from "@/styles/Home.module.css";

// export const ParallaxComponent = () => {
//     const background: BannerLayer = {
//     image:
//     "https://gagandeepghotra.com/Projects/expconImages/imageBackbackground.png",
//   translateY: [0, 9],
//   opacity: [0.5, 1],
//   scale: [1.05, 1, "easeInCubic"],
//   shouldAlwaysCompleteAnimation: false
//     };

// const headline: BannerLayer = {
//   translateY: [0, 44],
//   opacity: [0, 1],
//   scale: [1, 1.05, "easeOutCubic"],
//   shouldAlwaysCompleteAnimation: true,
//   expanded: false,
//   children: (
//     <div className={styles.center}>
//       <h1 className={styles.headline}>FRONT ROW SEAT EXPERIENCE</h1>
//     </div>
//   )
// };

// const foreground: BannerLayer = {
//   image:
//     "https://gagandeepghotra.com/Projects/expconImages/imageForeforeground.png",
//   translateY: [0, 7.2],
//   scale: [1.03, 1, "easeInCubic"],
//   shouldAlwaysCompleteAnimation: true
// };

// const gradientOverlay: BannerLayer = {
//     translateY: [6, 0],
//   opacity: [0.3, 1, "easeOutCubic"],
//   shouldAlwaysCompleteAnimation: true,
//   expanded: false,
//   children: <div className={styles.gradient} />
// };

// return (
//   <ParallaxBanner
//     layers={[background, headline, foreground, gradientOverlay]}
//     className={styles.full}
//   />
// );
// };

// For 1080p monitors
import { ParallaxBanner } from "react-scroll-parallax"
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types"
//import imageBackground from 'public/images/image5.jpg'
//import imageForeground from 'public/images/imageRemoveBG.png'
import styles from "@/styles/Home.module.css";
import { Collapse, Typography } from '@mui/material';
import React, {useState} from "react";
import { Animation, Typer } from 'react-easy-animations'
import styles1 from '@/styles/Herosection.module.css'

export const ParallaxComponent = () => {
    const background: BannerLayer = {
    image:
    "https://gagandeepghotra.com/Projects/expconImages/cleanCompressedBg.png",
  translateY: [0, 12],
  opacity: [0.3, 1],
  scale: [1.1, 1, "easeOutCubic"],
  shouldAlwaysCompleteAnimation: true,
  };

const headline: BannerLayer = {
  translateY: [0, 64],
  opacity: [0, 1],
  scale: [1, 1.1, "easeInExpo"],
  shouldAlwaysCompleteAnimation: true,
  expanded: false,
  children: (
    <div className={styles.center}>
      <h1 className={styles.headline}>
        FRONT ROW SEAT TO THE ACTION
      </h1>
    </div>
  )
};

const foreground: BannerLayer = {
  image:
    "https://gagandeepghotra.com/Projects/expconImages/image5-transformed-removebg-preview.png",
  translateY: [0, 1],
  scale: [1.1, 1.4, "easeInCubic"],
  shouldAlwaysCompleteAnimation: true
};

const gradientOverlay: BannerLayer = {
    translateY: [0, 6],
  opacity: [0.3, 0.6, "easeOutCubic"],
  shouldAlwaysCompleteAnimation: true,
  expanded: false,
  children: <div className={styles.gradient} />
};

return (
  <ParallaxBanner
    layers={[background, headline, foreground, gradientOverlay]}
    className={styles.full}
  />
);
};
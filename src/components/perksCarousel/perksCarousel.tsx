import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Collapse, Typography } from '@mui/material';
import styles from "@/styles/PerksCarousel.module.css";

// const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 2,
//     arrows: true,
//     rows: 1
// };

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  centerMode: true,
  adaptiveHeight: true,
  adaptiveWidth: true,
  arrows: true,
  autoplaySpeed: 5000,
  rows: 2
};

const PerkSectionCarousel = () => {
    return (
      <div>
        <Slider {...settings} className={styles.sliderCarousel}>
            <div>
            <div className={styles.perkONESPM}>
              <div className={styles.lineDividerPERKONE}></div>
              <Typography
                className={styles.perkOneTitle}
                variant="h1"
                component="div"
              >
                Convenience
              </Typography>

              <Typography
                className={styles.perkOneDescription}
                variant="h1"
                component="div"
              >
                Experience live concerts from the comfort of your own home
                without having to worry about traveling to a physical venue
              </Typography>
            </div>
            </div>
            <div className={styles.perkTWONFCP}>
              <div className={styles.lineDividerPERKTWO}></div>
              <Typography
                className={styles.perkTWOTitle}
                variant="h1"
                component="div"
                sx={{ flexGrow: 1 }}
              >
                Accessibility
              </Typography>
              <Typography
                className={styles.perkTWODescription}
                variant="h1"
                component="div"
                sx={{ flexGrow: 1 }}
              >
                Attend concerts from anywhere in the world,
                providing a level of accessibility that traditional concerts
                cant match
              </Typography>
            </div>

            <div className={styles.perkTHREESPM}>
              <div className={styles.lineDividerPERKTHREE}></div>
              <Typography
                className={styles.perkTHREETitle}
                variant="h1"
                component="div"
                sx={{ flexGrow: 1 }}
              >
                No Crowds
              </Typography>
              <Typography
                className={styles.perkTHREEDescription}
                variant="h1"
                component="div"
                sx={{ flexGrow: 1 }}
              >
                No more needing to fight through crowds and stand in line,
                providing a more relaxed and enjoyable concert experience for
                you
              </Typography>
            </div>

            <div className={styles.perkFOURSPM}>
              <div className={styles.lineDividerPERKFOUR}></div>
              <Typography
                className={styles.perkFOURTitle}
                variant="h1"
                component="div"
                sx={{ flexGrow: 1 }}
              >
                Cost Savings
              </Typography>
              <Typography
                className={styles.perkFOURDescription}
                variant="h1"
                component="div"
                sx={{ flexGrow: 1 }}
              >
                Eliminating the need for travel and other expenses associated 
                with attending concerts in person, EXP|CON can provide cost 
                savings to users  
              </Typography>
            </div>
        </Slider>
      </div>
    );
  }

  export default PerkSectionCarousel;
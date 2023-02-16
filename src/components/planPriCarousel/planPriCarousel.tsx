import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Collapse, Typography, Button} from '@mui/material';
//import styles from "@/styles/PerksCarousel.module.css";
import styles from '@/styles/planpricing.module.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote';

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
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    adaptiveWidth: true
};

const PlanPriCarousel = () => {
    return (
        <div>
            <Slider {...settings} className={styles.sliderCarousel}>
                <div className={styles.pricingONE}>
                    <Typography className={styles.priceOneTier} variant="h1" component="div">
                        BASIC
                    </Typography>
                    <div className={styles.priceOneLineDivider}></div>
                    <Typography className={styles.priceOneType} variant="h3" component="div">
                        MONTHLY
                    </Typography>
                    <Typography className={styles.priceOneCost} variant="h3" component="div">
                        $9
                    </Typography>
                    <Typography className={styles.priceOneDescription} variant="h3" component="div">
                        <MusicNoteIcon style={{ width: '35px', height: '33px' }}></MusicNoteIcon>Very good <br />
                        <MusicNoteIcon style={{ width: '35px', height: '33px' }}></MusicNoteIcon>Amazing <br />
                        <MusicNoteIcon style={{ width: '35px', height: '33px' }}></MusicNoteIcon>Perfect job <br />
                        <MusicNoteIcon style={{ width: '35px', height: '33px' }}></MusicNoteIcon>Love this <br />
                        <MusicNoteIcon style={{ width: '35px', height: '33px' }}></MusicNoteIcon>It’s so good <br />
                        <MusicNoteIcon style={{ width: '35px', height: '33px' }}></MusicNoteIcon>Features
                    </Typography>

                    <div className={styles.buttonONEContainer}>
                        <Button className={styles.buttonONEPRICING}>
                            <span className={styles.buttonONEText}>SELECT</span>
                        </Button>
                    </div>
                </div>
                <div className={styles.pricingTWO}>
                    <Typography className={styles.priceTwoTier} variant="h1" component="div">
                        ADVANCED
                    </Typography>
                    <div className={styles.priceTwoLineDivider}></div>
                    <Typography className={styles.priceTwoType} variant="h3" component="div">
                        YEARLY
                    </Typography>
                    <Typography className={styles.priceTwoCost} variant="h3" component="div">
                        $99
                    </Typography>
                    <Typography className={styles.priceTwoDescription} variant="h3" component="div">
                        <MusicNoteIcon style={{ width: '35px', height: '33px' }}></MusicNoteIcon>Very Very good <br />
                        <MusicNoteIcon style={{ width: '35px', height: '33px' }}></MusicNoteIcon>Even Amazing <br />
                        <MusicNoteIcon style={{ width: '35px', height: '33px' }}></MusicNoteIcon>Perfect job <br />
                        <MusicNoteIcon style={{ width: '35px', height: '33px' }}></MusicNoteIcon>Love this more<br />
                        <MusicNoteIcon style={{ width: '35px', height: '33px' }}></MusicNoteIcon>It’s so so good <br />
                        <MusicNoteIcon style={{ width: '35px', height: '33px' }}></MusicNoteIcon>More Features
                    </Typography>

                    <div className={styles.buttonTWOContainer}>
                        <Button className={styles.buttonTWOPRICING}>
                            <span className={styles.buttonTWOText}>SELECT</span>
                        </Button>
                    </div>
                </div>
                <div className={styles.pricingTHREE}>
                    <Typography className={styles.priceThreeTier} variant="h1" component="div">
                        PRO
                    </Typography>
                    <div className={styles.priceThreeLineDivider}></div>
                    <Typography className={styles.priceThreeType} variant="h3" component="div">
                        YEARLY
                    </Typography>
                    <Typography className={styles.priceThreeCost} variant="h3" component="div">
                        $120
                    </Typography>
                    <Typography className={styles.priceThreeDescription} variant="h3" component="div">
                        <MusicNoteIcon style={{ width: '35px', height: '33px' }}></MusicNoteIcon>Very Very good <br />
                        <MusicNoteIcon style={{ width: '35px', height: '33px' }}></MusicNoteIcon>Even More Amazing <br />
                        <MusicNoteIcon style={{ width: '35px', height: '33px' }}></MusicNoteIcon>Perfect job <br />
                        <MusicNoteIcon style={{ width: '35px', height: '33px' }}></MusicNoteIcon>Love this more<br />
                        <MusicNoteIcon style={{ width: '35px', height: '33px' }}></MusicNoteIcon>It’s so so good <br />
                        <MusicNoteIcon style={{ width: '35px', height: '33px' }}></MusicNoteIcon>More Features
                    </Typography>

                    <div className={styles.buttonTHREEContainer}>
                        <Button className={styles.buttonTHREEPRICING}>
                            <span className={styles.buttonTHREEText}>SELECT</span>
                        </Button>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default PlanPriCarousel;
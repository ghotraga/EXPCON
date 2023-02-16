import Head from "next/head";
import Image from "next/image";
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import HeroSection from "../components/herosection/herosection";
import Header from "../components/header/header";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import KUTE from "kute.js";
import { ParallaxProvider } from "react-scroll-parallax";
import { ParallaxComponent } from "../components/parallax/parallaxsection";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import { Carousel } from "react-responsive-carousel";
import PerkSectionCarousel from "../components/perksCarousel/perksCarousel";
import imgSectionREDSpeakerOne from "public/images/medium17@2x.png";
import imgSectionREDSpeakerTwo from "public/images/medium27@2x.png";
import imgSectionReviewSmallSpeakerOne from "public/images/SmallSpeaker1-03@2x.png";
import imgSectionReviewSmallSpeakerTwo from "public/images/SmallSpeaker2-03@2x.png";
import { Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { Container, Row, Col } from 'react-grid-system';

const inter = Inter({ subsets: ["latin"] });

// const tween = () => {
//   KUTE.fromTo(blob1, {path: blob1}, {path: blob2}, {repeat: 999, duration: 3000});
// };

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // const blob1: HTMLElement = document.querySelector("#blob1")!;
    // const blob2: HTMLElement = document.querySelector("#blob2")!;
    // KUTE.fromTo('#blob1', {path: '#blob1'}, {path: '#blob2'}, {repeat: 999, duration: 3000});
    //   const script = document.createElement('script');
    //   script.src = "https://cdn.jsdelivr.net/npm/kute.js@2.2.4/dist/kute.min.js";
    //   script.async = true;
    //   document.body.appendChild(script);
    //   return () => {
    //     document.body.removeChild(script);
    //   }
  }, []);

  const handleClick = () => {
    router.push('/pricing');
  }

  return (
    <>
      {/* Created using Next.js, Typescript, Three.Js, SASS, Reat, NPM, Eslint*/}

      <Head>
        <title>Exp|con</title>
        <meta name="description" content="Exp|con" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../../public/images/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <HeroSection />

        <section className={styles.sectionPERKS}>
          <div className={styles.containerPERKS}>
            <Typography
              className={styles.sloganTextPERKS}
              variant="h1"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              PERKS
            </Typography>
            {/* <PerkSectionCarousel /> */}
            <Container fluid className={styles.perksContainerFluid}>
              <Row align="center" justify="center" direction="row">
                <Col md={5} xs={12}>
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
                </Col>

                <Col md={5} xs={12}>
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
                </Col>
{/* 
                <Col md={5} xs={12}>
                  <div className={styles.perkFIVESPM}>
                    <div className={styles.lineDividerPERKFIVE}></div>
                    <Typography
                      className={styles.perkFIVETitle}
                      variant="h1"
                      component="div"
                    >
                      Access to exclusive events
                    </Typography>

                    <Typography
                      className={styles.perkFIVEDescription}
                      variant="h1"
                      component="div"
                    >
                      Some concerts are only available to those who can attend in person,
                      but with EXP|CON, you may be able to access exclusive events that
                      you wouldn't be able to attend otherwise
                    </Typography>
                  </div>
                </Col> */}
              </Row>
            </Container>
          </div>
        </section>

        <section className={styles.sectionYELLOW}>
          <ParallaxProvider>
            <ParallaxComponent />
            <div className={styles.center}>
              <h1 className={styles.headline}></h1>
            </div>
          </ParallaxProvider>
        </section>

        {/* <Script id="animateSectionRED">{`const tween = KUTE.fromTo('#blob1',{ path: '#blob1' },{ path: '#blob2' },{ repeat: 999, duration: 3000})`}</Script> */}
        <section className={styles.sectionRED}>
          <MouseParallaxContainer
            className={styles.mouseParallaxCon}
            globalFactorX={0.2}
            globalFactorY={0.2}
          >
            <MouseParallaxChild factorX={0.3} factorY={0.3}>

              <Container fluid className={styles.perksContainerFluid}>
                <Row direction="row">
                  <Col md={12} xs={12}>
                    {/* <AnimationOnScroll
                      animatePreScroll={false}
                      animateIn="animate__bounceIn"
                    > */}
                      <Typography
                        className={styles.sloganTextRED}
                        variant="h1"
                        component="div"
                      >
                        SUPERIOR SOUND
                      </Typography>
                    {/* </AnimationOnScroll> */}

                    {/* <AnimationOnScroll
                      animatePreScroll={false}
                      animateIn="animate_fadeInLeft"
                    > */}
                      <Typography
                        className={styles.descriptiveTextRED}
                        variant="h3"
                        component="div"
                      >
                        Experience live versions of your <br />
                        favourite songs.
                      </Typography>
                    {/* </AnimationOnScroll> */}

                    <button className={styles.CTAButtonRED} onClick={handleClick}>
                      <span className={styles.CTAButtonTextRED}>SEE DEMO</span>
                    </button>
                  </Col>

                   <Col md={12} xs={12}>
                    {/* <AnimationOnScroll
                      animatePreScroll={false}
                      animateIn="animate__bounceInDown"
                      animateOut="animate__backOutDown"
                    > */}
                      <div className={styles.medium17SpeakerRED}>
                        <Image
                          className={styles.medium17SpeakerREDimg}
                          src={imgSectionREDSpeakerOne}
                          alt=""
                        />
                      </div>
                    {/* </AnimationOnScroll> */}

                    {/* <AnimationOnScroll
                      animatePreScroll={false}
                      animateIn="animate__bounceInUp"
                      animateOut="animate__backOutUp"
                    > */}
                      <div className={styles.medium27SpeakerRED}>
                        <Image
                          className={styles.medium27SpeakerREDimg}
                          src={imgSectionREDSpeakerTwo}
                          alt=""
                        />
                      </div>
                    {/* </AnimationOnScroll> */}
                  </Col>
                </Row>
              </Container>
            </MouseParallaxChild>
          </MouseParallaxContainer>
        </section>

        <section className={styles.sectionReviews}>
          <div className={styles.reviewsContainer}>
            <Container fluid className={styles.perksContainerFluid}>
              <Row direction="row">
                <Col md={4}>
                  <div className={styles.speakerImagesContainer}>
                    <div className={styles.speakerOne}>
                      <Image
                        priority
                        className={styles.smallSpeaker1}
                        src={imgSectionReviewSmallSpeakerOne}
                        alt=""
                      />
                    </div>
                    <div className={styles.speakerTwo}>
                      <Image
                        priority
                        className={styles.smallSpeaker2}
                        src={imgSectionReviewSmallSpeakerTwo}
                        alt=""
                      />
                    </div>
                  </div>
                </Col>

                <Col md={6}>
                  <div className={styles.sloganTextReviewsContainer}>
                    <Typography className={styles.sloganTextREVIEWS}>
                      REVIEWS
                    </Typography>

                    <div className={styles.reviews}>
                      <Container fluid className={styles.perksContainerFluid}>
                        <Row direction="row">
                          <Col md={4} xs={8}>
                            <div className={styles.reviewONE}>
                              <div className={styles.fiveStarsContainer}>
                                <StarIcon className={styles.starIcon}></StarIcon>
                                <StarIcon className={styles.starIcon}></StarIcon>
                                <StarIcon className={styles.starIcon}></StarIcon>
                                <StarIcon className={styles.starIcon}></StarIcon>
                                <StarIcon className={styles.starIcon}></StarIcon>
                              </div>

                              <Typography className={styles.reviewerNameOne} variant="h3">
                                ARTIST
                              </Typography>

                              <Typography
                                className={styles.reviewDescriptionOne}
                                variant="h3"
                              >
                                “Love it, it’s the <br />
                                best. I can’t live <br /> without it!”
                              </Typography>
                            </div>
                          </Col>

                          <Col md={4} xs={8}>
                            <div className={styles.reviewTWO}>
                              <div className={styles.fiveStarsContainer}>
                                <StarIcon className={styles.starIcon}></StarIcon>
                                <StarIcon className={styles.starIcon}></StarIcon>
                                <StarIcon className={styles.starIcon}></StarIcon>
                                <StarIcon className={styles.starIcon}></StarIcon>
                                <StarIcon className={styles.starIcon}></StarIcon>
                              </div>

                              <Typography className={styles.reviewerNameTwo} variant="h3">
                                PRODUCER
                              </Typography>

                              <Typography className={styles.reviewDescriptionTwo} variant="h3">
                                “Love it, it’s the <br />
                                best. I can’t live <br /> without it!”
                              </Typography>
                            </div>
                          </Col>

                          <Col md={4} xs={8}>
                            <div className={styles.reviewTHREE}>
                              <div className={styles.fiveStarsContainer}>
                                <StarIcon className={styles.starIcon}></StarIcon>
                                <StarIcon className={styles.starIcon}></StarIcon>
                                <StarIcon className={styles.starIcon}></StarIcon>
                                <StarIcon className={styles.starIcon}></StarIcon>
                                <StarIcon className={styles.starIcon}></StarIcon>
                              </div>

                              <Typography className={styles.reviewerNameThree} variant="h3">
                                JHON
                              </Typography>

                              <Typography className={styles.reviewDescriptionThree} variant="h3">
                                “Love it, it’s the <br />
                                best. I can’t live <br /> without it!”
                              </Typography>
                            </div>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>

        <section className={styles.sectionGetAppNow}>
          <div className={styles.containerGETAPPNOW}>

            <Typography className={styles.sloganTextGetAppNow} variant="h1">
              GET EXP|CON NOW
            </Typography>

            <Typography className={styles.decriptionTextGetAppNow} variant="h3">
              Purchase and download the app
            </Typography>

            <button className={styles.CTAButtonGETAPPNOW} onClick={handleClick}>
              <span className={styles.CTAButtonTextGETAPPNOW}>
                TRY IT NOW
              </span>
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

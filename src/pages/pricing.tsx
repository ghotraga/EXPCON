import React, { useState, useEffect } from 'react';
import styles from '@/styles/planpricing.module.css'
import { Typography, Button } from "@mui/material";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import PerkSectionCarousel from "../components/perksCarousel/perksCarousel";
import PlanPriCarousel from "../components/planPriCarousel/planPriCarousel";
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Container, Row, Col } from 'react-grid-system';

export default function Pricing() {
    const router = useRouter();
    const [data, setData] = useState({ pricingPlan: '' });
    const basic: string = "BASIC | $9 Monthly";
    const advanced: string = "ADVANCED | $99 Yearly";
    const pro: string = "PRO | $120 Yearly";

    // const fetchPlanName = (plan: string) => {


    // }

    const handleClick = (plan1: string) => {

        // router.push({
        //     pathname: '/payment',
        //     query: {pricingPlan: plan1}
        // }, '/payment');

        if (plan1 === "BASIC | $9 Monthly") {
            router.push({ pathname: 'https://buy.stripe.com/fZe29meNV1Jc0TucMM' })
        }

        else if (plan1 === "ADVANCED | $99 Yearly") {
            router.push({ pathname: 'https://buy.stripe.com/bIY5ly49hafI59KdQR' })
        }

        else if (plan1 === "PRO | $120 Yearly") {
            router.push({ pathname: 'https://buy.stripe.com/7sI29m9tB9bE59KcMO' })
        }
    }

    // useEffect(() => {
    //     handleClick();
    // }, [data]);

    return (
        <div className={styles.pricingPage}>
            <section className={styles.planpricingRoot}>
                <div className={styles.containerPRICING}>
                    <Typography className={styles.pricingTITLE} variant="h1" component="div">
                        PRICING
                    </Typography>

                    <Typography className={styles.pricingDESCRIPTION} variant="h3" component="div">
                        Test out our app today! Choose from three subscription
                        <br /> Based payment models.
                    </Typography>

                    <Container fluid className={styles.pricingContainer}>
                        {/* <PlanPriCarousel /> */}
                        <Row align="center" justify="center" direction="row">
                            <Col md={3} xs={8}>
                                <div className={styles.pricingONE}>
                                    <Col md={3} xs={8}>
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
                                        <Button className={styles.buttonONEPRICING} value={basic} onClick={(event) => handleClick(basic)}>
                                            {/* <Link href={{
                                        pathname: '/payment',
                                        query: data
                                    }}> */}
                                            <span className={styles.buttonONEText}>SELECT</span>
                                            {/* </Link> */}
                                        </Button>
                                    </div>
                                    </Col>
                                </div>
                            </Col>

                            <Col md={3} xs={8}>
                                <div className={styles.pricingTWO}>
                                <Col md={3} xs={8}>
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
                                        <Button className={styles.buttonTWOPRICING} value={advanced} onClick={(event) => handleClick(advanced)}>
                                            <span className={styles.buttonTWOText}>SELECT</span>
                                        </Button>
                                    </div>
                                    </Col>
                                </div>
                            </Col>

                            <Col md={4} xs={8}>
                                <div className={styles.pricingTHREE}>
                                <Col md={3} xs={8}>
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
                                        <MusicNoteIcon style={{ width: '35px', height: '33px' }}></MusicNoteIcon>Even Amazing <br />
                                        <MusicNoteIcon style={{ width: '35px', height: '33px' }}></MusicNoteIcon>Perfect job <br />
                                        <MusicNoteIcon style={{ width: '35px', height: '33px' }}></MusicNoteIcon>Love this more<br />
                                        <MusicNoteIcon style={{ width: '35px', height: '33px' }}></MusicNoteIcon>It’s so so good <br />
                                        <MusicNoteIcon style={{ width: '35px', height: '33px' }}></MusicNoteIcon>More Features
                                    </Typography>

                                    <div className={styles.buttonTHREEContainer}>
                                        <Button className={styles.buttonTHREEPRICING} value={pro} onClick={(event) => handleClick(pro)}>
                                            <span className={styles.buttonTHREEText}>SELECT</span>
                                        </Button>
                                    </div>
                                    </Col>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>

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
              </Row>
            </Container>
                </div>
            </section>
        </div>
    );
}
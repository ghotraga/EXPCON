import React, { useEffect } from "react";
import Link from "next/link";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import styles from "@/styles/Header.module.css";
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 0 && window.scrollY <= 1074) {
        document.querySelector(".tryNowButton")!.className =
          "tryNowButton tryNowButton-PerksSection";
      }

      if (window.scrollY >= 1075 && window.scrollY <= 1934) {
        document.querySelector(".tryNowButton")!.className =
          "tryNowButton tryNowButton-PerksSection";
      }

      if (window.scrollY >= 1935 && window.scrollY <= 3100) {
        document.querySelector(".tryNowButton")!.className =
          "tryNowButton tryNowButton-YellowSection";
      }

      if (window.scrollY >= 3101 && window.scrollY <= 4065) {
        document.querySelector(".tryNowButton")!.className =
          "tryNowButton tryNowButton-RedSection";
      }

      if (window.scrollY >= 4066 && window.scrollY <= 4635) {
        document.querySelector(".tryNowButton")!.className =
          "tryNowButton tryNowButton-ReviewsSection";
      }

      if (window.scrollY >= 4636) {
        document.querySelector(".tryNowButton")!.className =
          "tryNowButton";
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  const handleClick = () => {
    router.push('/pricing');
  }

  const handleClickHome = () => {
    router.push('/');
  }

  return (
    <div className={styles.header}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          className={styles.AppBar}
          position="fixed"
          color="transparent"
          elevation={0}
        >
          <Toolbar>
              {/* <Link href="/"> */}
              {/* <Button style={{background : "transparent", color: "white"}} onClick={handleClickHome}> */}
              <Typography
                className={styles.appTitle}
                variant="h2"
                component="div"
                sx={{ flexGrow: 1 }}
                >
                  EXP|CON
                </Typography>
              {/* </Button> */}
              {/* </Link> */}

              <div className={styles.buttonTryNow}>
                <Button className="tryNowButton" onClick={handleClick}>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ flexGrow: 1 }}
                  >
                    TRY IT NOW
                  </Typography>
                </Button>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Header;

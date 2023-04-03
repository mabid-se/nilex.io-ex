import React from "react";
import { Box } from "@mui/material";

import MainAppBar from "../components/MainAppBar";
import TokenomicsHero from "../components/tokenomics-page/TokenomicsHero";
import TokenAndScalability from "../components/tokenomics-page/TokenAndScalability";
import MainFooter from "../components/MainFooter";

import Ellipse6 from "../assets/images/Ellipse6.png";
import TokenomicsHeroMobile from "../components/tokenomics-page/TokenomicsHeroMobile";
import TokenAndScalabilityMobile from "../components/tokenomics-page/TokenAndScalabilityMobile";

const styles = {
  outContainer: {
    backgroundImage: `url(${Ellipse6})`,
    backgroundPosition: "top center",
    backgroundSize: "1180px 900px",
    backgroundRepeat: "no-repeat",
  },

  mainContainer: {
    position: "absoulte",
    background:
      "linear-gradient(187.54deg, rgba(34,72,183,0.13) 27.33%, rgba(2,255,73,0.08) 164.44%)",
  },
};

const Tokenomics = (props) => {
  return (
    <>
      <Box
        style={styles.outContainer}
        sx={{ display: { xs: "none", sm: "none", lg: "block", xl: "block" } }}
      >
        <Box style={styles.mainContainer}>
          <MainAppBar colorz={props.colorData} />

          <TokenomicsHero />
        </Box>

        <TokenAndScalability />
      </Box>

      <Box
        style={styles.outContainer}
        sx={{ display: { xs: "block", sm: "block", lg: "none", xl: "none" } }}
      >
        <Box style={styles.mainContainer}>
          <MainAppBar colorz={props.colorData} />
          <TokenomicsHeroMobile />
        </Box>

        <TokenAndScalabilityMobile />
      </Box>

      <MainFooter />
    </>
  );
};

export default Tokenomics; // 54

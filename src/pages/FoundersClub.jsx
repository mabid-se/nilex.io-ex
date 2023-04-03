import React from "react";
import { Box } from "@mui/material";

import MainAppBar from "../components/MainAppBar";
import FoundersHero from "../components/founders-page/FoundersHero";
import TiersRoadmap from "../components/founders-page/TiersRoadmap";
import AirdropCriteria from "../components/founders-page/AirdropCriteria";
import FoundersHeroMobile from "../components/founders-page/FoundersHeroMobile";
import TiersRoadmapMobile from "../components/founders-page/TiersRoadmapMobile";
import AirdropCriteriaMobile from "../components/founders-page/AirdropCriteriaMobile";
import MainFooter from "../components/MainFooter";
import Ellipse10 from "../assets/images/Ellipse10.png";

const styles = {
  outContainer: {
    backgroundImage: `url(${Ellipse10})`,
    backgroundPosition: "top center",
    backgroundSize: "1650px 1250px",
    backgroundRepeat: "no-repeat",
  },
  mainContainer: {
    position: "absoulte",
    background:
      "linear-gradient(187.54deg, rgba(34,72,183,0.13) 27.33%, rgba(2,255,73,0.08) 164.44%)",
    backdropFilter: "blur(50px)",
  },
};

const FoundersClub = (props) => {
  return (
    <>
      <Box
        sx={{ display: { xs: "none", sm: "none", lg: "block", xl: "block" } }}
      >
        <Box style={styles.outContainer}>
          <Box style={styles.mainContainer}>
            <MainAppBar colorz={props.colorData} />

            <FoundersHero />
          </Box>

          <TiersRoadmap />
        </Box>

        <AirdropCriteria />
      </Box>

      <Box
        sx={{ display: { xs: "block", sm: "block", lg: "none", xl: "none" } }}
      >
        <Box style={styles.outContainer}>
          <Box style={styles.mainContainer}>
            <MainAppBar colorz={props.colorData} />

            <FoundersHeroMobile />
          </Box>

          <TiersRoadmapMobile />
        </Box>

        <AirdropCriteriaMobile />
      </Box>

      <MainFooter />
    </>
  );
};

export default FoundersClub; // 54

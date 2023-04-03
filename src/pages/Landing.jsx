import React from "react";
import { Box } from "@mui/material";

import FoundersClub from "../components/landing-page/FoundersClub";
import NFTExchange from "../components/landing-page/NFTExchange";
import NonFungibleAssets from "../components/landing-page/NonFungibleAssets";
import RiverRoadmap from "../components/landing-page/RiverRoadmap";
import MainAppBar from "../components/MainAppBar";
import MainFooter from "../components/MainFooter";
import Ellipse11 from "../assets/images/Ellipse11.png";
import Ellipse5 from "../assets/images/Ellipse5.png";
import RiverRoadmapMobile from "../components/landing-page/RiverRoadmapMobile";
import FounderClubMobile from "../components/landing-page/FounderClubMobile";

const styles = {
  outContainerLg: {
    backgroundImage: `url(${Ellipse11})`,
    backgroundPosition: "top center",
    backgroundSize: "2140px 1640px",
    backgroundRepeat: "no-repeat",
  },

  mainContainer: {
    position: "absoulte",
    background:
      "linear-gradient(187.54deg, rgba(34, 72, 183, 0.13) 27.33%, rgba(2, 255, 73, 0.08) 164.44%)",
  },

  outContainerSm: {
    backgroundImage: `url(${Ellipse11})`,
    backgroundPosition: "top center",
    backgroundSize: "720px 1080px",
    backgroundRepeat: "no-repeat",
  },

  mainContainFounder: {
    backgroundImage: `url(${Ellipse5})`,
    backgroundPosition: "center center",
    backgroundSize: "1740px 1350px",
    backgroundRepeat: "no-repeat",
  },
};

const Landing = (props) => {
  return (
    <>
      <Box
        style={styles.outContainerLg}
        sx={{ display: { xs: "none", sm: "none", lg: "block", xl: "block" } }}
      >
        <Box style={styles.mainContainerLg}>
          <MainAppBar colorz={props.colorData} />

          <NFTExchange />
        </Box>

        <NonFungibleAssets />
      </Box>

      <Box
        style={styles.outContainerSm}
        sx={{ display: { xs: "block", sm: "block", lg: "none", xl: "none" } }}
      >
        <Box style={styles.mainContainer}>
          <MainAppBar colorz={props.colorData} />

          <NFTExchange />
        </Box>

        <NonFungibleAssets />
      </Box>

      <Box
        sx={{ display: { xs: "none", sm: "none", lg: "block", xl: "block" } }}
      >
        <RiverRoadmap />
      </Box>

      <Box
        sx={{ display: { xs: "block", sm: "block", lg: "none", xl: "none" } }}
      >
        <RiverRoadmapMobile />
      </Box>

      <Box
        style={styles.mainContainFounder}
        sx={{ display: { xs: "none", sm: "none", lg: "block", xl: "block" } }}
      >
        <FoundersClub />

        <MainFooter />
      </Box>

      <Box
        sx={{ display: { xs: "block", sm: "block", lg: "none", xl: "none" } }}
      >
        <FounderClubMobile />

        <MainFooter />
      </Box>
    </>
  );
};

export default Landing;

import React from "react";
import { Box } from "@mui/material";

import MainAppBar from "../components/MainAppBar";
import EcosystemHero from "../components/ecosystem-page/EcosystemHero";
import AssetGovernance from "../components/ecosystem-page/AssetGovernance";
import AssetGovernanceMobile from "../components/ecosystem-page/AssetGovernanceMobile";
import MainFooter from "../components/MainFooter";
import Ellipse8 from "../assets/images/Ellipse8.png";
import EcosystemHeroMobile from "../components/ecosystem-page/EcosystemHeroMobile";

const styles = {
  outContainer: {
    backgroundImage: `url(${Ellipse8})`,
    backgroundPosition: "top center",
    backgroundSize: "1940px 950px",
    backgroundRepeat: "no-repeat",
  },

  mainContainer: {
    top: "-1.42%",
    position: "absoulte",
    background:
      "linear-gradient(187.54deg, rgba(34,72,183,0.13) 27.33%, rgba(2,255,73,0.08) 164.44%)",
    backdropFilter: "blur(50px)",
  },
};

const Ecosystem = (props) => {
  return (
    <>
      <Box
        style={styles.outContainer}
        sx={{ display: { xs: "none", sm: "none", lg: "block", xl: "block" } }}
      >
        <Box style={styles.mainContainer}>
          <MainAppBar colorz={props.colorData} />

          <EcosystemHero />
        </Box>

        <AssetGovernance />
      </Box>

      <Box
        style={styles.outContainer}
        sx={{ display: { xs: "block", sm: "block", lg: "none", xl: "none" } }}
      >
        <Box style={styles.mainContainer} sx={{ marginBottom: -18 }}>
          <MainAppBar colorz={props.colorData} />

          <EcosystemHeroMobile />
        </Box>

        <AssetGovernanceMobile />
      </Box>

      <MainFooter />
    </>
  );
};

export default Ecosystem; // 66

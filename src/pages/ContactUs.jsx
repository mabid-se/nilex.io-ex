import React from "react";
import { Box } from "@mui/material";

import MainAppBar from "../components/MainAppBar";
import Contact from "../components/contactUs-page/Contact";
import BigSceneContact from "../components/contactUs-page/BigSceneContact";
import MainFooter from "../components/MainFooter";
import Ellipse7 from "../assets/images/Ellipse7.png";

const styles = {
  outContainerLg: {
    backgroundImage: `url(${Ellipse7})`,
    backgroundPosition: "top center",
    backgroundSize: "1660px 1400px",
    backgroundRepeat: "no-repeat",
    backdropFilter: "blur(400px)",
  },
  outContainerSm: {
    backgroundImage: `url(${Ellipse7})`,
    backgroundPosition: "top center",
    backgroundSize: "700px 1000px",
    backgroundRepeat: "no-repeat",
    backdropFilter: "blur(400px)",
  },
};

const ContactUs = (props) => {
  return (
    <>
      <Box
        sx={{ display: { xs: "none", sm: "none", lg: "block", xl: "block" } }}
      >
        <Box style={styles.outContainerLg}>
          <MainAppBar colorz={props.colorData} />

          <Contact />

          <BigSceneContact />
        </Box>
        <MainFooter />
      </Box>

      <Box
        style={styles.outContainerSm}
        sx={{ display: { xs: "block", sm: "block", lg: "none", xl: "none" } }}
      >
        <MainAppBar colorz={props.colorData} />

        <Contact />

        <MainFooter />
      </Box>
    </>
  );
};

export default ContactUs; // 41

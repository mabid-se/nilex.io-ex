import { Box, Grid, Typography } from "@mui/material";
import React from "react";
// import { useEffect, useRef } from "react";
// import Lottie from "lottie-web";

import GreenGradBoxTokenomics from "./GreenGradBoxTokenomics";
import anim5 from "../../assets/animations/Untitled-5.gif";
import anim6 from "../../assets/animations/Untitled-6.gif";

// const styles = {
//   tokenContain: {
//     width: "90%",
//   },
//   scaleContain: {
//     width: "80%",
//   },
// };

const TokenAndScalability = () => {
  // const TokenAnim = useRef(null);
  // // useEffect(() => {
  // //   const instance = Lottie.loadAnimation({
  // //     container: TokenAnim.current,
  // //     renderer: "svg",
  // //     loop: true,
  // //     autoplay: true,
  // //     animationData: require("../../assets/animations/NileTokenAnim.json"),
  // //   });

  //   return () => instance.destroy();
  // }, []);

  // const ScaleAnim = useRef(null);
  // // useEffect(() => {
  // //   const instance = Lottie.loadAnimation({
  // //     container: ScaleAnim.current,
  // //     renderer: "svg",
  // //     loop: true,
  // //     autoplay: true,
  // //     animationData: require("../../assets/animations/ScalabilityAnim.json"),
  // //   });

  //   return () => instance.destroy();
  // }, []);

  return (
    <>
      <Box mt={5} py={5}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item my={1}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item pr={7}>
                <GreenGradBoxTokenomics>
                  <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="flex-start"
                    py={2}
                  >
                    <Grid item pt={2} pl={2}>
                      <Typography
                        variant="h6"
                        color="primary"
                        fontWeight="bold"
                        textTransform="capitalize"
                      >
                        $NILE token
                      </Typography>
                    </Grid>

                    <Grid item mb={2} pl={2} mt={2}>
                      <Typography variant="body2" color="primary">
                        Nile X aims to build long-term sustainable <br />{" "}
                        tokenomics that grant the project, community, and <br />
                        ecosystem enhanced features and dynamics.
                      </Typography>
                    </Grid>
                  </Grid>
                </GreenGradBoxTokenomics>
              </Grid>

              <Grid item pl={7} sx={{ width: "35%" }}>
                {/* <div ref={TokenAnim}></div> */}
                <img
                  src={anim5}
                  srcSet={anim5}
                  alt="nile token anim"
                  width="90%"
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item my={1}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item pr={7} sx={{ width: "45%" }}>
                {/* <div style={styles.scaleContain} ref={ScaleAnim}></div> */}
                <img
                  src={anim6}
                  srcSet={anim6}
                  alt="scalability anim"
                  width="90%"
                />
              </Grid>

              <Grid item pl={7}>
                <GreenGradBoxTokenomics>
                  <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="flex-start"
                    py={2}
                  >
                    <Grid item pt={2} pl={2}>
                      <Typography
                        variant="h6"
                        color="primary"
                        fontWeight="bold"
                        textTransform="capitalize"
                      >
                        sustainable scalability
                      </Typography>
                    </Grid>

                    <Grid item mb={2} pl={2} mt={2}>
                      <Typography variant="body2" color="primary">
                        Nile X believes in its long-term mission and goals by{" "}
                        <br />
                        vesting linearly for long periods of time the <br />{" "}
                        platform-related allocations. Opening the doors for{" "}
                        <br /> competitive recruitment, platform development,{" "}
                        <br /> and brand awareness.
                      </Typography>
                    </Grid>

                    <Grid item pt={2} pl={2}>
                      <Typography
                        variant="h6"
                        color="primary"
                        fontWeight="bold"
                        textTransform="capitalize"
                      >
                        web 3.0. focus
                      </Typography>
                    </Grid>

                    <Grid item mb={2} pl={2} mt={2}>
                      <Typography variant="body2" color="primary">
                        $NILE is the gateway to our community-focused <br />{" "}
                        DAO, where holders can discuss, propose and vote <br />
                        on new developments, regarding the Nile dX (DEX), <br />
                        Nile DAO, and its respective Treasury. The Nile DAO{" "}
                        <br /> Treasury will represent 2.5% of the supply of the{" "}
                        <br />
                        $NILE token, with a total of 12.500.000 $NILE tokens.
                      </Typography>
                    </Grid>
                  </Grid>
                </GreenGradBoxTokenomics>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default TokenAndScalability; // 125

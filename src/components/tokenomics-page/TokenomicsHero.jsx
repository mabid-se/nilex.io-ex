import { Box, Grid, Typography } from "@mui/material";
import React from "react";
// import { useEffect, useRef } from "react";

// import Lottie from "lottie-web";
import GreenGradBoxTokenomics from "./GreenGradBoxTokenomics";
import anim4 from "../../assets/animations/Untitled-4.gif";

const TokenomicsHero = () => {

  // const TokeHeroAnim = useRef(null);
  // // useEffect(() => {
  // //   const instance = Lottie.loadAnimation({
  // //     container: TokeHeroAnim.current,
  // //     renderer: "svg",
  // //     loop: true,
  // //     autoplay: true,
  // //     animationData: require("../../assets/animations/TokenomicsHeroAnim.json"),
  // //   });

  //   return () => instance.destroy();
  // }, []);

  return (
    <>
      <Box mb={5} py={5}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item my={1}>
            <Typography
              variant="body2"
              color="secondary"
              textTransform="uppercase"
            >
              nile x
            </Typography>
          </Grid>

          <Grid item>
            <Typography variant="h3" color="primary" fontWeight="bold">
              Tokenomics
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item pr={3} sx={{ width: "45%" }}>
            {/* <div ref={TokeHeroAnim}></div> */}

            <img src={anim4} srcSet={anim4} alt="tokenomics hero anim" width="90%" />

          </Grid>

          <Grid item pl={3}>
            <GreenGradBoxTokenomics>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
              >
                <Grid item pt={2} pl={2}>
                  <Typography
                    variant="h6"
                    color="primary"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    utility
                  </Typography>
                </Grid>

                <Grid item mb={1}>
                  <Typography variant="body2" color="primary">
                    <ul>
                      <li>
                        20% discounted trading fees (Pay with $NILE):
                        <ul>
                          <li>Limit orders.</li>

                          <li>Market orders.</li>

                          <li>Leveraged trading.</li>
                        </ul>
                      </li>

                      <li>
                        Privileged access to the acquisition staking pools.
                      </li>

                      <li>25% off Share Exporting by paying with $NILE.</li>

                      <li>Governance proposal and voting power.</li>

                      <li>Staking access after the token generation event.</li>

                      <li>Utility on selected partners' platforms (TBD).</li>

                      <li>
                        Platform Beta Launch, exclusive to Community <br />{" "}
                        Founders Club members.
                      </li>
                    </ul>
                  </Typography>
                </Grid>
              </Grid>
            </GreenGradBoxTokenomics>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default TokenomicsHero; // 117

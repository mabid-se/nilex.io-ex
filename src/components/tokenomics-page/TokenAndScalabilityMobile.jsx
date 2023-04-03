import { Box, Grid, Typography } from "@mui/material";
import React from "react";
// import { useEffect, useRef } from "react";
// import Lottie from "lottie-web";

import GreenGradBoxTokenomics from "./GreenGradBoxTokenomics";

const TokenAndScalabilityMobile = () => {
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
      <Box py={5}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          px={4}
        >
          <Grid item>
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

                <Grid item mb={1} pl={2}>
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

          <Grid item mt={6}>
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
                    Nile X aims to build long-term sustainable <br /> tokenomics
                    that grant the project, community, and <br />
                    ecosystem enhanced features and dynamics.
                  </Typography>
                </Grid>
              </Grid>
            </GreenGradBoxTokenomics>
          </Grid>

          <Grid item mt={6}>
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
                    Nile X believes in its long-term mission and goals by <br />
                    vesting linearly for long periods of time the <br />{" "}
                    platform-related allocations. Opening the doors for <br />{" "}
                    competitive recruitment, platform development, <br /> and
                    brand awareness.
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
                    $NILE is the gateway to our community-focused <br /> DAO,
                    where holders can discuss, propose and vote <br />
                    on new developments, regarding the Nile dX (DEX), <br />
                    Nile DAO, and its respective Treasury. The Nile DAO <br />{" "}
                    Treasury will represent 2.5% of the supply of the <br />
                    $NILE token, with a total of 12.500.000 $NILE tokens.
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

export default TokenAndScalabilityMobile; // 125

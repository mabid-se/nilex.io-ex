import { Box, Grid, Typography } from "@mui/material";
import React from "react";

import Roadmap from "../../assets/images/NilxRiverRoadMap.png";
import GreenGradBoxRoadmap from "../GreenGradBoxRoadmap";

import Ellipse3 from "../../assets/images/Ellipse3.png";
import Ellipse4 from "../../assets/images/Ellipse4.png";

const styles = {
  imgOutContain: {
    backgroundImage: `url(${Ellipse3})`,
    backgroundPosition: "left top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
  },
  imgContain: {
    backgroundImage: `url(${Ellipse4})`,
    backgroundPosition: "right bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
  },
};

const RiverRoadmap = () => {
  return (
    <>
      <Box
        my={5}
        style={styles.imgOutContain}
        id="river-roadmap"
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          pb={5}
          style={styles.imgContain}
        >
          <Grid item>
            <Typography
              variant="body2"
              color="secondary"
              textTransform="uppercase"
            >
              nile x
            </Typography>
          </Grid>

          <Grid item mt={2}>
            <Typography
              variant="h3"
              color="primary"
              fontWeight="bold"
              textTransform="capitalize"
            >
              nile river roadmap
            </Typography>
          </Grid>

          <Grid item mt={6}>
            <Grid
              container
              direction="row"
              justifyContent="space-around"
              alignItems="flex-end"
            >
              <Grid item mr={7}>
                <GreenGradBoxRoadmap>
                  <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="flex-start"
                  >
                    <Grid item pt={2} pl={2}>
                      <Typography
                        variant="h6"
                        color="#02FF49"
                        fontWeight="bold"
                        textTransform="uppercase"
                      >
                        lake kyoga
                      </Typography>
                    </Grid>

                    <Grid item>
                      <Typography variant="body2" color="primary">
                        <ul>
                          <li>IDO Launchpads announcement.</li>
                          <li>
                            Community Founders Club Launch & Merch Airdrop.
                          </li>
                          <li>
                            Platform Beta Launch, exclusive to Community
                            Founders Club members.
                          </li>
                        </ul>
                      </Typography>
                    </Grid>
                  </Grid>
                </GreenGradBoxRoadmap>
              </Grid>

              <Grid item ml={14}>
                <GreenGradBoxRoadmap>
                  <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="flex-start"
                  >
                    <Grid item pt={2} pl={2}>
                      <Typography
                        variant="h6"
                        color="#02FF49"
                        fontWeight="bold"
                        textTransform="uppercase"
                      >
                        lake tana
                      </Typography>
                    </Grid>

                    <Grid item>
                      <Typography variant="body2" color="primary">
                        <ul>
                          <li>1st Dividends issued.</li>

                          <li>INO Launchpad.</li>

                          <li>NFT Index Launch.</li>

                          <li>Liquidity Protocol Launch.</li>
                        </ul>
                      </Typography>
                    </Grid>
                  </Grid>
                </GreenGradBoxRoadmap>
              </Grid>
            </Grid>
          </Grid>

          <Grid item lg={12} xl={12} mt={-4} mb={-5}>
            <Box>
              <img
                src={Roadmap}
                srcSet={Roadmap}
                alt="Nile River Roadmap"
                loading="lazy"
                width="100%"
              />
            </Box>
          </Grid>

          <Grid item>
            <Grid
              container
              direction="row"
              justifyContent="space-around"
              alignItems="flex-start"
            >
              <Grid item sx={{ paddingRight: "90px" }}>
                <GreenGradBoxRoadmap>
                  <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="flex-start"
                  >
                    <Grid item pt={2} pl={2}>
                      <Typography
                        variant="h6"
                        color="#02FF49"
                        fontWeight="bold"
                        textTransform="uppercase"
                      >
                        lake victoria
                      </Typography>
                    </Grid>

                    <Grid item>
                      <Typography variant="body2" color="primary">
                        <ul>
                          <li>Partnerships Announcements.</li>

                          <li>VC and other backers'announcements.</li>

                          <li>Token Pre-Sale.</li>
                        </ul>
                      </Typography>
                    </Grid>
                  </Grid>
                </GreenGradBoxRoadmap>
              </Grid>

              <Grid item sx={{ paddingLeft: "90px", paddingRight: "90px" }}>
                <GreenGradBoxRoadmap>
                  <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="flex-start"
                  >
                    <Grid item pt={2} pl={2}>
                      <Typography
                        variant="h6"
                        color="#02FF49"
                        fontWeight="bold"
                        textTransform="uppercase"
                      >
                        lake albert
                      </Typography>
                    </Grid>

                    <Grid item>
                      <Typography variant="body2" color="primary">
                        <ul>
                          <li>Token Public Sale and TGE</li>

                          <li>Platform Launch</li>

                          <li>$NILE staking round.</li>

                          <li>Acquisition Pools Launchpad.</li>

                          <li>1st INO.</li>
                        </ul>
                      </Typography>
                    </Grid>
                  </Grid>
                </GreenGradBoxRoadmap>
              </Grid>

              <Grid item sx={{ paddingLeft: "90px" }}>
                <GreenGradBoxRoadmap>
                  <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="flex-start"
                  >
                    <Grid item pt={2} pl={2}>
                      <Typography
                        variant="h6"
                        color="#02FF49"
                        fontWeight="bold"
                        textTransform="uppercase"
                      >
                        lake nasser
                      </Typography>
                    </Grid>

                    <Grid item>
                      <Typography variant="body2" color="primary">
                        <ul>
                          <li>Yield Platform for Top 10 Market Cap Tokens.</li>

                          <li>Nile Debit/Credit Card.</li>

                          <li>Nile Governance DAO.</li>

                          <li>Nile DEX.</li>
                        </ul>
                      </Typography>
                    </Grid>
                  </Grid>
                </GreenGradBoxRoadmap>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default RiverRoadmap; // 293

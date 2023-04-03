import { Box, Grid, Typography } from "@mui/material";
import React from "react";

import GreenGradBoxRoadmap from "../GreenGradBoxRoadmap";
import Ellipse3 from "../../assets/images/Ellipse3.png";
import Ellipse4 from "../../assets/images/Ellipse4.png";

const styles = {
  imgOutContain: {
    backgroundImage: `url(${Ellipse3})`,
    backgroundPosition: "left center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },

  imgContain: {
    backgroundImage: `url(${Ellipse4})`,
    backgroundPosition: "right center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
};

const RiverRoadmapMobile = () => {
  return (
    <>
      <Box style={styles.imgOutContain}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ paddingY: { lg: 5, xl: 5 } }}
          style={styles.imgContain}
        >
          <Grid item xs={12} sm={12} px={3}>
            <Typography
              variant="body2"
              color="secondary"
              fontWeight="bold"
              textTransform="uppercase"
            >
              nile x
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12} my={2} px={3}>
            <Typography
              variant="h3"
              color="primary"
              fontWeight="bold"
              textTransform="capitalize"
            >
              nile river roadmap
            </Typography>
          </Grid>

          {/* Lake Victoria */}
          <Grid item xs={12} sm={12} my={2} px={3}>
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

          {/* LAKE KYOGA */}
          <Grid item xs={12} sm={12} my={2} px={3}>
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
                      <li>Community Founders Club Launch & Merch Airdrop.</li>
                      <li>
                        Platform Beta Launch, exclusive to Community Founders
                        Club members.
                      </li>
                    </ul>
                  </Typography>
                </Grid>
              </Grid>
            </GreenGradBoxRoadmap>
          </Grid>

          {/* LAKE Albert */}
          <Grid item xs={12} sm={12} my={2} px={3}>
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

          {/* LAKE Tana */}
          <Grid item xs={12} sm={12} my={2} px={3}>
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

          {/* LAKE Nasser */}
          <Grid item xs={12} sm={12} my={2} px={3}>
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
      </Box>
    </>
  );
};

export default RiverRoadmapMobile; // 293

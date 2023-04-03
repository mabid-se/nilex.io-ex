import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import GreenGradContact from "../GreenGradContact";
import roadmap from "../../assets/images/TiersRoadmap.png";

const styles = {
  packFi: {
    position: "relative",

    top: "-320px",
    left: "-450px",
  },

  packSe: {
    position: "relative",

    top: "-350px",
  },
  packTh: {
    position: "relative",

    top: "-350px",
    right: "-50px",
  },
  packFo: {
    position: "relative",

    top: "-350px",
    right: "-95px",
  },
};

const TiersRoadmap = () => {
  return (
    <>
      <Box mt={5} py={5}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item my={1} mb={-12}>
            <Typography
              variant="h3"
              color="primary"
              fontWeight="bold"
              textTransform="capitalize"
            >
              tiers
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          mt={-12}
        >
          <Grid item>
            <img
              src={roadmap}
              srcSet={roadmap}
              alt="tier roadmap"
              loading="lazy"
              width="100%"
            />{" "}
          </Grid>

          <Grid item style={styles.packFi}>
            <GreenGradContact>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{ width: "350px" }}
                py={2}
              >
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="flex-start"
                    textAlign="center"
                    mt={1}
                  >
                    <Grid item mr={6}>
                      <Typography variant="h5" fontWeight={700} color="#03F1A9">
                        700
                      </Typography>
                      <Typography variant="body1" color="primary">
                        NFTs in Total
                      </Typography>
                    </Grid>
                    <Grid item ml={6}>
                      <Typography variant="h5" fontWeight={700} color="#03F1A9">
                        1.1x
                      </Typography>
                      <Typography variant="body2" color="primary">
                        Voting power on <br />
                        the Nile DAO
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item mt={1} pr={2}>
                  <Typography variant="body2" color="primary">
                    <ul>
                      <li>
                        Priority over other $NILE token holders on acquisition
                        pools.
                      </li>
                    </ul>
                  </Typography>
                </Grid>
              </Grid>
            </GreenGradContact>
          </Grid>

          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-end"
            mb={-12}
          >
            <Grid item style={styles.packSe}>
              <GreenGradContact>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  sx={{ width: "350px" }}
                  py={2}
                >
                  <Grid item>
                    <Grid
                      container
                      direction="row"
                      justifyContent="center"
                      alignItems="flex-start"
                      textAlign="center"
                      mt={1}
                    >
                      <Grid item mr={6}>
                        <Typography
                          variant="h5"
                          fontWeight={700}
                          color="#03F1A9"
                        >
                          245
                        </Typography>
                        <Typography variant="body1" color="primary">
                          NFTs in Total
                        </Typography>
                      </Grid>
                      <Grid item ml={6}>
                        <Typography
                          variant="h5"
                          fontWeight={700}
                          color="#03F1A9"
                        >
                          1.25x
                        </Typography>
                        <Typography variant="body2" color="primary">
                          Voting power on <br />
                          the Nile DAO
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item mt={1} pr={2}>
                    <Typography variant="body2" color="primary">
                      <ul>
                        <li>
                          Priority over other $NILE token and Common Tier
                          holders on acquisition pools.
                        </li>
                        <li>Rare Merch Airdrop.</li>
                        <li>Beta Platform Access.</li>
                      </ul>
                    </Typography>
                  </Grid>
                </Grid>{" "}
              </GreenGradContact>
            </Grid>

            <Grid item style={styles.packTh}>
              <GreenGradContact>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  sx={{ width: "350px" }}
                  py={2}
                >
                  <Grid item>
                    <Grid
                      container
                      direction="row"
                      justifyContent="center"
                      alignItems="flex-start"
                      textAlign="center"
                      mt={1}
                    >
                      <Grid item mr={6}>
                        <Typography
                          variant="h5"
                          fontWeight={700}
                          color="#03F1A9"
                        >
                          50
                        </Typography>
                        <Typography variant="body1" color="primary">
                          NFTs in Total
                        </Typography>
                      </Grid>
                      <Grid item ml={6}>
                        <Typography
                          variant="h5"
                          fontWeight={700}
                          color="#03F1A9"
                        >
                          1.5x
                        </Typography>
                        <Typography variant="body2" color="primary">
                          Voting power on <br />
                          the Nile DAO
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item mt={1} pr={2}>
                    <Typography variant="body2" color="primary">
                      <ul>
                        <li>
                          Priority over other $NILE token, Common and Rare Tiers
                          holders on acquisition pools.
                        </li>
                        <li>Super Rare Merch Drop.</li>
                        <li>
                          1.2x APR multiplier on the post-TGE $NILE Staking
                          Round.
                        </li>
                        <li>5% Discount on Trading Fees.</li>
                      </ul>
                    </Typography>
                  </Grid>
                </Grid>
              </GreenGradContact>
            </Grid>

            <Grid item style={styles.packFo}>
              <GreenGradContact>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  sx={{ width: "350px" }}
                  py={2}
                >
                  <Grid item>
                    <Grid
                      container
                      direction="row"
                      justifyContent="center"
                      alignItems="flex-start"
                      textAlign="center"
                      mt={1}
                    >
                      <Grid item mr={6}>
                        <Typography
                          variant="h5"
                          fontWeight={700}
                          color="#03F1A9"
                        >
                          5
                        </Typography>
                        <Typography variant="body1" color="primary">
                          NFTs in Total
                        </Typography>
                      </Grid>
                      <Grid item ml={6}>
                        <Typography
                          variant="h5"
                          fontWeight={700}
                          color="#03F1A9"
                        >
                          1.75x
                        </Typography>
                        <Typography variant="body2" color="primary">
                          Voting power on <br />
                          the Nile DAO
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item mt={1} pr={2}>
                    <Typography variant="body2" color="primary">
                      <ul>
                        <li>
                          Priority over other $NILE token, Common, Rare and
                          Super Rare Tiers holders on acquisition pools.
                        </li>
                        <li>$NILE Private Sale round allocations.</li>
                        <li>
                          1.5x APY multiplier on the post-TGE $NILE Staking
                          Round.
                        </li>
                        <li>20% Discount on Trading Fees.</li>
                      </ul>
                    </Typography>
                  </Grid>
                </Grid>
              </GreenGradContact>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default TiersRoadmap;

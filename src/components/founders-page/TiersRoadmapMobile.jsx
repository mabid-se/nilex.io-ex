import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import GreenGradContact from "../GreenGradContact";

const TiersRoadmapMobile = () => {
  return (
    <>
      <Box mt={2} py={2}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item mb={1}>
            <Typography
              variant="h3"
              color="primary"
              fontWeight="bold"
              textTransform="capitalize"
            >
              tiers
            </Typography>
          </Grid>

          <Grid item my={1}>
            <Typography
              variant="body2"
              fontWeight="bold"
              color="secondary"
              textTransform="uppercase"
            >
              common
            </Typography>
          </Grid>

          <Grid item mt={1} mb={3}>
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

          <Grid item my={1}>
            <Typography
              variant="body2"
              fontWeight="bold"
              color="secondary"
              textTransform="uppercase"
            >
              rare
            </Typography>
          </Grid>

          <Grid item mt={1} mb={3}>
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
                        245
                      </Typography>
                      <Typography variant="body1" color="primary">
                        NFTs in Total
                      </Typography>
                    </Grid>
                    <Grid item ml={6}>
                      <Typography variant="h5" fontWeight={700} color="#03F1A9">
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
                        Priority over other $NILE token and Common Tier holders
                        on acquisition pools.
                      </li>
                      <li>Rare Merch Airdrop.</li>
                      <li>Beta Platform Access.</li>
                    </ul>
                  </Typography>
                </Grid>
              </Grid>
            </GreenGradContact>
          </Grid>

          <Grid item my={1}>
            <Typography
              variant="body2"
              fontWeight="bold"
              color="secondary"
              textTransform="uppercase"
            >
              super rare
            </Typography>
          </Grid>

          <Grid item mt={1} mb={3}>
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
                        50
                      </Typography>
                      <Typography variant="body1" color="primary">
                        NFTs in Total
                      </Typography>
                    </Grid>
                    <Grid item ml={6}>
                      <Typography variant="h5" fontWeight={700} color="#03F1A9">
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
                        1.2x APR multiplier on the post-TGE $NILE Staking Round.
                      </li>
                      <li>5% Discount on Trading Fees.</li>
                    </ul>
                  </Typography>
                </Grid>
              </Grid>
            </GreenGradContact>
          </Grid>

          <Grid item my={1}>
            <Typography
              variant="body2"
              fontWeight="bold"
              color="secondary"
              textTransform="uppercase"
            >
              legendary
            </Typography>
          </Grid>

          <Grid item mt={1} mb={3}>
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
                        5
                      </Typography>
                      <Typography variant="body1" color="primary">
                        NFTs in Total
                      </Typography>
                    </Grid>
                    <Grid item ml={6}>
                      <Typography variant="h5" fontWeight={700} color="#03F1A9">
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
                        Priority over other $NILE token, Common, Rare and Super
                        Rare Tiers holders on acquisition pools.
                      </li>
                      <li>$NILE Private Sale round allocations.</li>
                      <li>
                        1.5x APY multiplier on the post-TGE $NILE Staking Round.
                      </li>
                      <li>20% Discount on Trading Fees.</li>
                    </ul>
                  </Typography>
                  {/* row 2 */}
                </Grid>
              </Grid>
            </GreenGradContact>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default TiersRoadmapMobile;

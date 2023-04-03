import { Box, Grid, Typography } from "@mui/material";
import React from "react";

import GreenGradBoxTokenomics from "../tokenomics-page/GreenGradBoxTokenomics";
import anim7 from "../../assets/animations/Untitled-7.gif";

const FoundersHero = () => {
  return (
    <>
      <Box my={5}>
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
            <Typography
              variant="h3"
              color="primary"
              fontWeight="bold"
              textTransform="capitalize"
            >
              founders club
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          mt={4}
        >
          <Grid item pr={3}>
            <GreenGradBoxTokenomics>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
              >
                <Grid item pt={3} pl={2}>
                  <Typography
                    variant="h6"
                    color="primary"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    utility
                  </Typography>
                </Grid>

                <Grid item mt={1}>
                  <Typography variant="body2" color="primary">
                    <ul>
                      <li>Lower trading fees.</li>
                      <li>Access to Beta Test Version of the Platform.</li>
                      <li>$NILE token Private Sale Round access.</li>
                      <li>
                        Priority over other $NILE holders on acquisition pools.
                      </li>
                      <li>Governance voting power multiplier.</li>
                      <li>APR multiplier on $NILE Staking.</li>
                      <li>Merch airdrop.</li>
                    </ul>
                  </Typography>
                </Grid>

                <Grid item mb={3} pl={2}>
                  <Typography variant="body2" color="primary">
                    Built to enhance and reward community members' loyalty.{" "}
                    <br />
                    Setting the foundation for the future and increasing the
                    overall <br />
                    long-term focus of the community. In other words, the <br />
                    Founders Club is a place where the most active users are
                    <br />
                    empowered, giving them added abilities to engage with
                    <br /> and interact at a greater degree with Nile X’s
                    Ecosystem.
                  </Typography>
                </Grid>
              </Grid>
            </GreenGradBoxTokenomics>
          </Grid>

          <Grid item pl={3} sx={{ width: "50%" }}>
            <img
              src={anim7}
              srcSet={anim7}
              alt="green bigscene founders club - hero"
              width="100%"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default FoundersHero; // 132

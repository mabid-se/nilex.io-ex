import { Box, Grid, Typography } from "@mui/material";
import React from "react";

import GreenGradBoxEcosystem from "./GreenGradBoxEcosystem";
import anim9 from "../../assets/animations/Untitled-9.gif";

const EcosystemHero = () => {
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
              Ecosystem
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item lg={6} xl={6} sx={{ position: "relative" }}>
            <img
              src={anim9}
              srcSet={anim9}
              alt="green bigscene ecosystem"
              width="100%"
            />
          </Grid>

          <Grid item lg={6} xl={6} pl={5}>
            <GreenGradBoxEcosystem>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
              >
                <Grid item pt={2} pl={2}>
                  <Typography
                    variant="body2"
                    color="secondary"
                    textTransform="uppercase"
                  >
                    be a part of the ecosystem
                  </Typography>
                </Grid>

                <Grid item mt={2} pl={2}>
                  <Typography
                    variant="h6"
                    color="primary"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    nile dAO
                  </Typography>
                </Grid>

                <Grid item mt={4} pl={2} pr={3}>
                  <Typography variant="body2" color="primary">
                    Our goal is to build a decentralized parallel body to Nile
                    X, that has shared control over the Nile X features and
                    developments.
                  </Typography>
                </Grid>
                <Grid item mt={1} mb={1} pl={2} pr={3}>
                  <Typography variant="body2" color="primary">
                    Through governance, $NILE holders will be granted added
                    utility in the form of decentralized governance.
                  </Typography>
                </Grid>
              </Grid>
            </GreenGradBoxEcosystem>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default EcosystemHero; // 120

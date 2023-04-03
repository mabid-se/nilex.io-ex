import { Box, Grid, Typography } from "@mui/material";
import React from "react";

import anim9 from "../../assets/animations/Untitled-9.gif";

const EcosystemHeroMobile = () => {
  return (
    <>
      <Box pt={2} pb={20}>
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

          <Grid item lg={6} xl={6} px={4}>
            <img
              src={anim9}
              srcSet={anim9}
              alt="green bigscene ecosystem"
              width="100%"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default EcosystemHeroMobile; // 120

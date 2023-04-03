import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import anim7 from "../../assets/animations/Untitled-7.gif";

const FoundersHeroMobile = () => {
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
              fontWeight="bold"
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

          <Grid item pl={3}>
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

export default FoundersHeroMobile; // 132

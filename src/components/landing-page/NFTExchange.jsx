import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import anim1 from "../../assets/animations/Untitled-1.gif";

const styles = {
  spanBold: {
    fontWeight: "bold",
  },
};

const NFTExchange = () => {
  return (
    <>
      <Box pt={2}>
        <Grid
          mt={5}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} px={4}>
            <Typography
              variant="h1"
              color="primary"
              fontWeight={800}
              textTransform="uppercase"
              textAlign="center"
            >
              The First <br />
              NFT Exchange
            </Typography>
          </Grid>

          <Grid item px={4}>
            <Typography variant="h6" textAlign="center" color="primary">
              <span style={styles.spanBold}>Buy, Sell, Earn</span> and&nbsp;
              <span style={styles.spanBold}>Govern</span> Blue Chip NFT Assets.
            </Typography>
          </Grid>

          <Grid item px={4}>
            <img src={anim1} alt="blue bigscene lp" width="100%" />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default NFTExchange; // 60

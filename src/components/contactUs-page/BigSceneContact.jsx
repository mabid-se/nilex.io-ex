import { Box, Grid } from "@mui/material";
import React from "react";
import anim8 from "../../assets/animations/Untitled-8.gif";

const styles = {
  mainCont: {
    backgroundImage:
      "linear-gradient(184.6deg, rgba(2, 255, 73, 0.08) 49.66%, rgba(34, 72, 183, 0.13) 96%)",
    position: "absoulte",
    backdropFilter: "blur(50px)",
  },
};
const BigSceneContact = () => {
  return (
    <>
      <Box style={styles.mainCont}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item sx={{ width: "55%" }}>
            <img
              src={anim8}
              srcSet={anim8}
              alt="green bigscene contact-us"
              width="93%"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default BigSceneContact; // 39

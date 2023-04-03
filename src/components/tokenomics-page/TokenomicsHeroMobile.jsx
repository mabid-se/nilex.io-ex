import { Box, Grid, Typography } from "@mui/material";
import React from "react";
// import { useEffect, useRef } from "react";

// import Lottie from "lottie-web";
import anim4 from "../../assets/animations/Untitled-4.gif";


const TokenomicsHeroMobile = () => {
  // const TokeHeroAnim = useRef(null);
  // // useEffect(() => {
  // //   const instance = Lottie.loadAnimation({
  // //     container: TokeHeroAnim.current,
  // //     renderer: "svg",
  // //     loop: true,
  // //     autoplay: true,
  // //     animationData: require("../../assets/animations/TokenomicsHeroAnim.json"),
  // //   });

  //   return () => instance.destroy();
  // }, []);

  return (
    <>
      <Box py={5}>
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
              Tokenomics
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item 
          // pr={3}
           >
            {/* <div ref={TokeHeroAnim}></div> */}

            <img src={anim4} srcSet={anim4} alt="tokenomics hero anim" width="100%" />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default TokenomicsHeroMobile; // 117

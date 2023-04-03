import { Box, Grid, Link, Typography } from "@mui/material";
import React from "react";

import advisor1 from "../../assets/images/advisor1.png";
import advisor2 from "../../assets/images/advisor2.png";
import advisor3 from "../../assets/images/advisor3.png";
import LinkedIn from "../../assets/images/LinkedIn.png";
import twitter from "../../assets/images/twitter.png";

const Advisors = () => {
  return (
    <>
      <Box
        sx={{
          marginY: { xs: 2, sm: 2, lg: 5, xl: 5 },
          paddingY: { xs: 2, sm: 2, lg: 5, xl: 5 },
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ paddingY: { xs: 2, sm: 2, lg: 5, xl: 5 } }}
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
              Advisors
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-end"
          mt={3}
        >
          <Grid
            item
            sx={{
              marginX: { xs: 0, sm: 0, lg: 4, xl: 4 },
              marginBottom: { xs: 5, sm: 5, lg: 0, xl: 0 },
            }}
          >
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <img src={advisor1} srcSet={advisor1} alt="advisor jamshed" />
              </Grid>

              <Grid item mt={1}>
                <Typography
                  variant="h6"
                  color="primary"
                  textTransform="uppercase"
                  fontWeight="bold"
                >
                  dr. jamshed
                </Typography>
              </Grid>

              <Grid item>
                <Typography
                  variant="body2"
                  color="#03f1a9"
                  textTransform="uppercase"
                  fontWeight="bold"
                >
                  technology advisor
                </Typography>
              </Grid>

              <Grid item mt={2}>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item>
                    <Link href="https://www.linkedin.com/in/jamshedmemon/">
                      <img
                        src={LinkedIn}
                        srcSet={LinkedIn}
                        alt="LinkedIn"
                        loading="lazy"
                      />
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            sx={{
              marginX: { xs: 0, sm: 0, lg: 4, xl: 4 },
              marginBottom: { xs: 5, sm: 5, lg: 0, xl: 0 },
            }}
          >
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <img
                  src={advisor2}
                  srcSet={advisor2}
                  alt="advisor will"
                  loading="lazy"
                />
              </Grid>

              <Grid item mt={1}>
                <Typography
                  variant="h6"
                  color="primary"
                  textTransform="uppercase"
                  fontWeight="bold"
                >
                  will
                </Typography>
              </Grid>

              <Grid item>
                <Typography
                  variant="body2"
                  color="#03f1a9"
                  textTransform="uppercase"
                  fontWeight="bold"
                >
                  dao advisor
                </Typography>
              </Grid>

              <Grid item mt={2}>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item>
                    <Link href="https://twitter.com/willyogo">
                      <img
                        src={twitter}
                        srcSet={twitter}
                        alt="twitter"
                        loading="lazy"
                      />
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            sx={{
              marginX: { xs: 0, sm: 0, lg: 4, xl: 4 },
              marginBottom: { xs: 5, sm: 5, lg: 0, xl: 0 },
            }}
          >
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <img
                  src={advisor3}
                  srcSet={advisor3}
                  alt="advisor felix"
                  loading="lazy"
                />
              </Grid>

              <Grid item mt={1}>
                <Typography
                  variant="h6"
                  color="primary"
                  textTransform="uppercase"
                  fontWeight="bold"
                >
                  felix mago
                </Typography>
              </Grid>

              <Grid item>
                <Typography
                  variant="body2"
                  color="#03f1a9"
                  textTransform="uppercase"
                  fontWeight="bold"
                >
                  strategy advisor
                </Typography>
              </Grid>

              <Grid item mt={2}>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item mr={1}>
                    <Link href="https://twitter.com/FelixMagoCrypto">
                      <img src={twitter} srcSet={twitter} alt="twitter" />
                    </Link>
                  </Grid>
                  <Grid item ml={1}>
                    <Link href="https://www.linkedin.com/in/felix-mago/">
                      <img src={LinkedIn} srcSet={LinkedIn} alt="LinkedIn" />
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Advisors;

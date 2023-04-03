import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import BlueGradBox from "../BlueGradBox";

import Fractionalization from "./Fractionalization";
import anim2 from "../../assets/animations/Untitled-2.gif";

const NonFungibleAssets = () => {
  return (
    <>
      <Box my={5}>
        {/* <Container> */}
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          mt={2}
        >
          <Grid item my={1}>
            <Typography
              variant="body2"
              color="primary"
              textTransform="uppercase"
            >
              about
            </Typography>
          </Grid>

          <Grid item mt={1} px={3}>
            <Typography
              variant="h2"
              textAlign="center"
              color="primary"
              fontWeight="800"
            >
              Liquid Non-Fungible Assets
            </Typography>
          </Grid>
        </Grid>

        <Box>
          <Container>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{
                mt: 2,
              }}
            >
              <Grid
                item
                xs={12}
                sm={12}
                lg={6}
                xl={6}
                sx={{
                  backgroundSize: "685px 1173px",
                  filter: "drop-shadow(0px 150px 205px #0133dc)",
                  display: { xs: "none", sm: "none", lg: "block", xl: "block" },
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
                      src={anim2}
                      srcSet={anim2}
                      alt="non fungible assets anim"
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={12} lg={6} xl={6} textAlign="left">
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item>
                    <Grid
                      container
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      px={3}
                    >
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        lg={6}
                        xl={6}
                        sx={{
                          paddingLeft: { lg: 3, xl: 3 },
                          paddingRight: { lg: 2, xl: 3 },
                          marginY: { xs: 2, sm: 2 },
                        }}
                      >
                        <BlueGradBox>
                          <Grid
                            container
                            direction="column"
                            justifyContent="space-evenly"
                            alignItems="start"
                            pl={1}
                          >
                            <Grid item>
                              <Typography
                                variant="subtitle1"
                                fontWeight="bold"
                                color="primary"
                              >
                                Liquid Trading
                              </Typography>
                            </Grid>

                            <Grid item mt={1}>
                              <Typography variant="body2" color="primary">
                                NFT Traders can finally buy and sell what they
                                want, when they want on liquid markets.
                              </Typography>
                            </Grid>
                          </Grid>
                        </BlueGradBox>
                      </Grid>

                      <Grid
                        item
                        xs={12}
                        sm={12}
                        lg={6}
                        xl={6}
                        sx={{
                          paddingLeft: { lg: 2, xl: 2 },
                          paddingRight: { lg: 3, xl: 3 },
                          marginY: { xs: 2, sm: 2 },
                        }}
                      >
                        <BlueGradBox>
                          <Grid
                            container
                            direction="column"
                            justifyContent="space-evenly"
                            alignItems="start"
                            pl={1}
                          >
                            <Grid item>
                              <Typography
                                variant="subtitle1"
                                fontWeight="bold"
                                color="primary"
                              >
                                Gain Access
                              </Typography>
                            </Grid>

                            <Grid item mt={1}>
                              <Typography variant="body2" color="primary">
                                Own shares of Blue Chip NFT Assets for as little
                                as a $1.
                              </Typography>
                            </Grid>
                          </Grid>
                        </BlueGradBox>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item>
                    <Grid
                      container
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      px={3}
                    >
                      <Grid
                        item
                        xs={12}
                        s
                        sm={12}
                        lg={6}
                        xl={6}
                        sx={{
                          paddingLeft: { lg: 3, xl: 3 },
                          paddingRight: { lg: 2, xl: 2 },
                          marginY: { xs: 2, sm: 2 },
                        }}
                      >
                        <BlueGradBox>
                          <Grid
                            container
                            direction="column"
                            justifyContent="space-evenly"
                            alignItems="start"
                            pl={1}
                          >
                            <Grid item>
                              <Typography
                                variant="subtitle1"
                                fontWeight="bold"
                                color="primary"
                              >
                                New Dynamic
                              </Typography>
                            </Grid>

                            <Grid item mt={1}>
                              <Typography variant="body2" color="primary">
                                Bridging the gap between Public Equity Markets,
                                Index Funds and NFT Technology.
                              </Typography>
                            </Grid>
                          </Grid>
                        </BlueGradBox>
                      </Grid>

                      <Grid
                        item
                        xs={12}
                        sm={12}
                        lg={6}
                        xl={6}
                        sx={{
                          paddingLeft: { lg: 2, xl: 2 },
                          paddingRight: { lg: 3, xl: 3 },
                          marginY: { xs: 2, sm: 2 },
                        }}
                      >
                        <BlueGradBox>
                          <Grid
                            container
                            direction="column"
                            justifyContent="space-evenly"
                            alignItems="start"
                            pl={1}
                          >
                            <Grid item>
                              <Typography
                                variant="subtitle1"
                                fontWeight="bold"
                                color="primary"
                              >
                                New Dynamic
                              </Typography>
                            </Grid>

                            <Grid item mt={1}>
                              <Typography variant="body2" color="primary">
                                Bridging the gap between Public Equity Markets,
                                Index Funds and NFT Technology.
                              </Typography>
                            </Grid>
                          </Grid>
                        </BlueGradBox>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>

          <Fractionalization />
        </Box>
      </Box>
    </>
  );
};

export default NonFungibleAssets; // 284;

import { Box, Container, Grid, Link, Typography } from "@mui/material";
import React from "react";
import GreenGradBox from "../GreenGradBox";

import Ellipse2 from "../../assets/images/Ellipse2.png";
import NFTIndex from "../../assets/images/NFTIndex.png";
import Governance from "../../assets/images/Governance.png";
import NileDAO from "../../assets/images/NileDAO.png";
import Dividends from "../../assets/images/Dividends.png";

const styles = {
  fractContain: {
    backgroundImage: `url(${Ellipse2})`,
    backgroundPosition: `center center`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `1745px 640px`,
    backgroundBlendMode: "multiply",

    filter: "drop-shadow(0px 150px 255px #70e090)",
  },
};

const Fractionalization = () => {
  return (
    <>
      <Box style={styles.fractContain} my={5} py={5}>
        <Container>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="start"
            textAlign="left"
          >
            <Grid item px={3}>
              <Typography
                variant="body2"
                color="primary"
                textTransform="uppercase"
              >
                fractionalize. trade. earn. govern.
              </Typography>
            </Grid>

            <Grid item mt={2} px={3}>
              <Typography variant="h3" color="primary" fontWeight="bold">
                Going beyond <br /> Fractionalization
              </Typography>
            </Grid>
          </Grid>

          <Grid container direction="row" mt={3}>
            <Grid
              item
              xs={12}
              sm={12}
              lg={5}
              xl={5}
              sx={{
                paddingRight: { lg: 2, xl: 2 },
                marginY: { xs: 2, sm: 2 },
              }}
              px={3}
            >
              <GreenGradBox>
                <Grid
                  container
                  direction="column"
                  alignItems="start"
                  sx={{
                    height: { lg: "399px", xl: "399px" },
                    px: 2,
                  }}
                >
                  <Grid item mt={1}>
                    <Typography
                      variant="body2"
                      color="secondary"
                      textTransform="uppercase"
                    >
                      NFT Index
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    sx={{
                      display: {
                        xs: "none",
                        sm: "none",
                        lg: "block",
                        xl: "block",
                      },
                      marginTop: { lg: 8, xl: 8 },
                      marginBottom: { lg: 9, xl: 9 },
                    }}
                  >
                    <img
                      src={NFTIndex}
                      srcSet={NFTIndex}
                      alt="NFTIndex"
                      width="80%"
                    />
                  </Grid>

                  <Grid
                    item
                    sx={{
                      marginTop: { xs: 2, sm: 2 },
                      marginBottom: { xs: 4, sm: 4 },
                    }}
                  >
                    <Typography variant="h5" color="primary">
                      Diversify into the NFT Market with Index Funds
                    </Typography>
                  </Grid>
                </Grid>
              </GreenGradBox>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              lg={7}
              xl={7}
              sx={{
                paddingLeft: { lg: 2, xl: 2 },
                marginY: { xs: 2, sm: 2 },
              }}
            >
              <Grid container xs={12} sm={12} direction="column">
                <Grid
                  item
                  sx={{
                    paddingBottom: { lg: 2, xl: 2 },
                    paddingX: { xs: 3, sm: 3 },
                  }}
                  width="100%"
                >
                  <GreenGradBox>
                    <Grid container direction="coulmn" sx={{ height: "164px" }}>
                      <Grid item xs={12} sm={12} lg={9} xl={9}>
                        <Grid container direction="column" pl={2}>
                          <Grid item mb={4}>
                            <Typography
                              variant="body2"
                              color="secondary"
                              textTransform="uppercase"
                            >
                              Governance
                            </Typography>
                          </Grid>

                          <Grid item mb={2}>
                            <Typography variant="h5" color="primary">
                              Discuss. Propose. Vote
                            </Typography>
                          </Grid>

                          <Grid item my={3}>
                            <Link
                              href="#"
                              variant="body2"
                              color="secondary"
                              textTransform="capitalize"
                            >
                              more info
                            </Link>
                          </Grid>
                        </Grid>
                      </Grid>

                      <Grid
                        item
                        lg={3}
                        xl={3}
                        textAlign="end"
                        sx={{
                          display: {
                            xs: "none",
                            sm: "none",
                            lg: "block",
                            xl: "block",
                          },
                        }}
                      >
                        <img
                          src={Governance}
                          srcSet={Governance}
                          alt="Governance"
                          width="70%"
                        />
                      </Grid>
                    </Grid>
                  </GreenGradBox>
                </Grid>

                <Grid item xs={12} sm={12} pt={2}>
                  <Grid container direction="row" width="100%">
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      lg={6}
                      xl={6}
                      sx={{
                        paddingLeft: { xs: 3, sm: 3 },
                        paddingRight: { xs: 3, sm: 3, lg: 2, xl: 2 },
                        marginY: { xs: 2, sm: 2, lg: 0, xl: 0 },
                      }}
                    >
                      <GreenGradBox>
                        <Grid
                          container
                          direction="row"
                          sx={{
                            height: "164px",
                            paddingLeft: 2,
                          }}
                        >
                          <Grid item xs={12} sm={12} lg={8} xl={8}>
                            <Grid container direction="column">
                              <Grid item mb={4}>
                                <Typography
                                  variant="body2"
                                  color="secondary"
                                  textTransform="uppercase"
                                >
                                  Nile DAO
                                </Typography>
                              </Grid>

                              <Grid item mb={2}>
                                <Typography variant="h5" color="primary">
                                  Vote on new listings
                                </Typography>
                              </Grid>

                              <Grid item mb={2}>
                                <Link
                                  href="#"
                                  variant="body2"
                                  color="secondary"
                                  textTransform="capitalize"
                                >
                                  more info
                                </Link>
                              </Grid>
                            </Grid>
                          </Grid>

                          <Grid
                            item
                            lg={4}
                            xl={4}
                            textAlign="end"
                            sx={{
                              display: {
                                xs: "none",
                                sm: "none",
                                lg: "block",
                                xl: "block",
                              },
                            }}
                          >
                            <img
                              src={NileDAO}
                              srcSet={NileDAO}
                              alt="NileDAO"
                              width="90%"
                            />
                          </Grid>
                        </Grid>
                      </GreenGradBox>
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      sm={12}
                      lg={6}
                      xl={6}
                      sx={{
                        paddingLeft: { xs: 3, sm: 3, lg: 2, xl: 2 },
                        paddingRight: { xs: 3, sm: 3 },
                        marginY: { xs: 2, sm: 2, lg: 0, xl: 0 },
                      }}
                    >
                      <GreenGradBox>
                        <Grid
                          container
                          direction="row"
                          sx={{ height: "164px", paddingLeft: 2 }}
                        >
                          <Grid item xs={12} sm={12} lg={8} xl={8}>
                            <Grid container direction="column">
                              <Grid
                                item
                                sx={{
                                  marginBottom: { xs: 5, sm: 5, lg: 8, xl: 8 },
                                }}
                              >
                                <Typography
                                  variant="body2"
                                  color="secondary"
                                  textTransform="uppercase"
                                >
                                  Dividends
                                </Typography>
                              </Grid>

                              <Grid item>
                                <Typography variant="h5" color="primary">
                                  Earn and HODL.
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>

                          <Grid
                            item
                            lg={4}
                            xl={4}
                            textAlign="end"
                            sx={{
                              display: {
                                xs: "none",
                                sm: "none",
                                lg: "block",
                                xl: "block",
                              },
                            }}
                          >
                            <img
                              src={Dividends}
                              srcSet={Dividends}
                              alt="Dividends"
                              width="90%"
                            />
                          </Grid>
                        </Grid>
                      </GreenGradBox>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Fractionalization; // 255

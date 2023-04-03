import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

import GreenGradBoxEcosystemSm from "./GreenGradBoxEcosystemSm";
import GreenGradBoxEcosystem from "./GreenGradBoxEcosystem";

import Ellipse9 from "../../assets/images/Ellipse9.png";
import anim10 from "../../assets/animations/Untitled-10.gif";

const styles = {
  assetContainer: {
    backgroundImage: `url(${Ellipse9})`,
    backgroundPosition: "center bottom",
    backgroundSize: "660px 530px",
    backgroundRepeat: "no-repeat",
    backdropFilter: "blur(700px)",
  },
};

const AssetGovernance = () => {
  return (
    <>
      <Box my={2}>
        <Container>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item lg={6} xl={6} pr={5}>
              <GreenGradBoxEcosystemSm>
                <Typography variant="body2" color="primary">
                  Community members will be able to discuss, plan and propose
                  new ideas that are then voted on. Nile X believes in a
                  community DAO that can regularly launch new acquisition pools,
                  lists new fractionalized assets, vote on asset buyout offers,
                  and has the freedom to launch new features
                </Typography>
              </GreenGradBoxEcosystemSm>
            </Grid>

            <Grid item lg={6} xl={6} pl={5}>
              <GreenGradBoxEcosystemSm>
                <Typography variant="body2" color="primary">
                  The DAO will have its own treasury, powered by a 2.5% supply
                  of the $NILE token, vested accordingly, that can be utilized
                  to finance the DAO’s ventures, i.e. acquisitions, liquidity
                  providing, new feature developments, etc.
                </Typography>
              </GreenGradBoxEcosystemSm>
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            mt={3}
          >
            <Grid
              item
              lg={6}
              xl={6}
              pr={5}
              py={5}
              sx={{ display: "flex", justifyContent: "inherit" }}
              style={styles.assetContainer}
            >
              <img
                src={anim10}
                srcSet={anim10}
                alt="asset governance anim"
                width="100%"
              />
            </Grid>

            <Grid item lg={6} xl={6} pl={7}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="flex-end"
              >
                <Grid item pt={2} pr={5}>
                  <Typography
                    variant="body2"
                    color="secondary"
                    textTransform="uppercase"
                  >
                    have a say on what you own
                  </Typography>
                </Grid>

                <Grid item mt={1} pr={5}>
                  <Typography
                    variant="h6"
                    color="primary"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    asset governance
                  </Typography>
                </Grid>

                <Grid
                  container
                  driection="column"
                  justifyContent="center"
                  alignItems="flex-start"
                  mt={5}
                >
                  <GreenGradBoxEcosystem>
                    <Grid item mt={4} px={3}>
                      <Typography variant="body2" color="primary">
                        Any user with ≥5% Ownership of the underlying asset can
                        launch a proposal.
                      </Typography>
                    </Grid>

                    <Grid item mt={2} px={3}>
                      <Typography variant="body2" color="primary">
                        Ownership Related proposals can be, for example:
                      </Typography>
                    </Grid>

                    <Grid item mt={2} mb={3} px={3}>
                      <Typography variant="body2" color="primary">
                        <ul>
                          <li>
                            In buyout offers, owners vote on the offer received,
                            deciding whether to sell or not.
                          </li>

                          <li>Borrow and Lending offers.</li>

                          <li>
                            Nile X Account Manager offers. I.e. BAYC rented for
                            an event, museum, etc.
                          </li>

                          <li>Make assets available for sale.</li>

                          <li>
                            Dividend distribution Vs Re-investment; I.e. Rents
                            are distributed that quarter Vs House needs to be
                            renovated to generate more rental income.
                          </li>

                          <li>Reporting to Market, i.e. press release.</li>
                        </ul>
                      </Typography>
                    </Grid>
                  </GreenGradBoxEcosystem>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AssetGovernance; // 137

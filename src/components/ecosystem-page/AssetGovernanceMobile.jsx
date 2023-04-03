import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import GreenGradBoxEcosystem from "./GreenGradBoxEcosystem";

const AssetGovernanceMobile = () => {
  return (
    <>
      <Box my={2}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          px={4}
        >
          <Grid item>
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

                <Grid item mt={1} mb={1} pl={2} pr={3}>
                  <Typography variant="body2" color="primary">
                    Community members will be able to discuss, plan and propose
                    new ideas that are then voted on. Nile X believes in a
                    community DAO that can regularly launch new acquisition
                    pools, lists new fractionalized assets, vote on asset buyout
                    offers, and has the freedom to launch new features
                  </Typography>
                </Grid>

                <Grid item mt={1} mb={1} pl={2} pr={3}>
                  <Typography variant="body2" color="primary">
                    The DAO will have its own treasury, powered by a 2.5% supply
                    of the $NILE token, vested accordingly, that can be utilized
                    to finance the DAO’s ventures, i.e. acquisitions, liquidity
                    providing, new feature developments, etc.
                  </Typography>
                </Grid>
              </Grid>
            </GreenGradBoxEcosystem>
          </Grid>

          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-end"
          >
            <Grid item mt={6} pt={2} pr={2}>
              <Typography
                variant="body2"
                color="secondary"
                textTransform="uppercase"
                textAlign="left"
              >
                have a say on what you own
              </Typography>
            </Grid>

            <Grid item mt={1} pr={2}>
              <Typography
                variant="h6"
                color="primary"
                fontWeight="bold"
                textTransform="capitalize"
                textAlign="left"
              >
                asset governance
              </Typography>
            </Grid>
          </Grid>

          <Grid item mt={3}>
            <GreenGradBoxEcosystem>
              <Grid item mt={4} pl={2} pr={3}>
                <Typography variant="body2" color="primary">
                  Any user with ≥5% Ownership of the underlying asset can launch
                  a proposal.
                </Typography>
              </Grid>

              <Grid item mt={2} pl={2} pr={3}>
                <Typography variant="body2" color="primary">
                  Ownership Related proposals can be, for example:
                </Typography>
              </Grid>

              <Grid item mt={2} mb={3} pl={2} pr={3}>
                <Typography variant="body2" color="primary">
                  <ul>
                    <li>
                      In buyout offers, owners vote on the offer received,
                      deciding whether to sell or not.
                    </li>

                    <li>Borrow and Lending offers.</li>

                    <li>
                      Nile X Account Manager offers. I.e. BAYC rented for an
                      event, museum, etc.
                    </li>

                    <li>Make assets available for sale.</li>

                    <li>
                      Dividend distribution Vs Re-investment; I.e. Rents are
                      distributed that quarter Vs House needs to be renovated to
                      generate more rental income.
                    </li>

                    <li>Reporting to Market, i.e. press release.</li>
                  </ul>
                </Typography>
              </Grid>
            </GreenGradBoxEcosystem>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AssetGovernanceMobile; // 137

import { Box, Container, Grid, Link, Typography } from "@mui/material";
import React from "react";

import NileXLogo from "../assets/images/Nile-XLogo.png";
import fb from "../assets/images/Facebook.png";
import ig from "../assets/images/Instagram.png";
import twitter from "../assets/images/twitter.png";
import linkedin from "../assets/images/LinkedIn.png";

const MainFooter = () => {
  return (
    <>
      <Box pt={5}>
        <Container>
          <Grid container direction="row">
            <Grid
              item
              xs={12}
              sm={12}
              lg={3}
              xl={3}
              sx={{ paddingX: { xs: 4, sm: 4, lg: 0, xl: 0 } }}
            >
              <Grid container direction="column">
                <Grid item>
                  <Link href="/">
                    <img
                      src={NileXLogo}
                      srcSet={NileXLogo}
                      alt="NileX id"
                      width="60%"
                    />
                  </Link>
                </Grid>

                <Grid item mt={5}>
                  <Container>
                    <Grid
                      container
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center"
                    >
                      <Grid item mr={1}>
                        <Link href="https://www.facebook.com/profile.php?id=100078737564234">
                          <img
                            src={fb}
                            srcSet={fb}
                            alt="facebook"
                            width="70%"
                          />
                        </Link>
                      </Grid>

                      <Grid item mx={1}>
                        <Link href="https://www.instagram.com/nileexchange/">
                          <img
                            src={ig}
                            srcSet={ig}
                            alt="instagram"
                            width="70%"
                          />
                        </Link>
                      </Grid>

                      <Grid item mx={1}>
                        <Link href="https://twitter.com/NileXchange">
                          <img
                            src={twitter}
                            srcSet={twitter}
                            alt="twitter"
                            width="70%"
                          />
                        </Link>
                      </Grid>

                      <Grid item mr={1}>
                        <Link href="https://www.linkedin.com/company/nile-x/">
                          <img
                            src={linkedin}
                            srcSet={linkedin}
                            alt="linkedin"
                            width="70%"
                          />
                        </Link>
                      </Grid>
                    </Grid>
                  </Container>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              lg={3}
              xl={3}
              sx={{
                marginTop: { xs: 6, sm: 6, lg: 0, xl: 0 },
                paddingX: { xs: 4, sm: 4, lg: 0, xl: 0 },
              }}
            >
              <Grid container direction="column">
                <Grid item mb={1}>
                  <Link
                    href="/"
                    color="primary"
                    variant="body1"
                    fontWeight={600}
                    sx={{ textDecoration: "none" }}
                  >
                    About
                  </Link>
                </Grid>

                <Grid item mb={1}>
                  <Link
                    href="/roadmap"
                    color="primary"
                    variant="body1"
                    fontWeight={600}
                    sx={{ textDecoration: "none" }}
                  >
                    Roadmap
                  </Link>
                </Grid>

                <Grid item mb={1}>
                  <Link
                    href="/founders-club"
                    color="primary"
                    variant="body1"
                    fontWeight={600}
                    sx={{ textDecoration: "none" }}
                  >
                    Founders Club
                  </Link>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              lg={3}
              xl={3}
              sx={{
                marginTop: { xs: 3, sm: 3, lg: 0, xl: 0 },
                paddingX: { xs: 4, sm: 4, lg: 0, xl: 0 },
              }}
            >
              <Grid container direction="column">
                <Grid item mb={1}>
                  <Link
                    href="/team"
                    color="primary"
                    variant="body1"
                    fontWeight={600}
                    sx={{ textDecoration: "none" }}
                  >
                    Team
                  </Link>
                </Grid>

                <Grid item mb={1}>
                  <Link
                    href="/contact-us"
                    color="primary"
                    variant="body1"
                    fontWeight={600}
                    sx={{ textDecoration: "none" }}
                  >
                    Contact US
                  </Link>
                </Grid>

                <Grid item mb={1}>
                  <Link
                    href="/tokenomics"
                    color="primary"
                    variant="body1"
                    fontWeight={600}
                    sx={{ textDecoration: "none" }}
                  >
                    Tokenomics
                  </Link>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              lg={3}
              xl={3}
              sx={{
                marginTop: { xs: 3, sm: 3, lg: 0, xl: 0 },
                paddingX: { xs: 4, sm: 4, lg: 0, xl: 0 },
              }}
            >
              <Grid container direction="column">
                <Grid item mb={1}>
                  <Link
                    href="/"
                    color="primary"
                    variant="body1"
                    fontWeight={600}
                    sx={{ textDecoration: "none" }}
                  >
                    Terms & Conditions
                  </Link>
                </Grid>

                <Grid item mb={1}>
                  <Link
                    href="/"
                    color="primary"
                    variant="body1"
                    fontWeight={600}
                    sx={{ textDecoration: "none" }}
                  >
                    Privacy Policy
                  </Link>
                </Grid>

                <Grid item mb={1}>
                  <Link
                    href="/"
                    color="primary"
                    variant="body1"
                    fontWeight={600}
                    sx={{ textDecoration: "none" }}
                  >
                    Subscribe
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            justifyContent="center"
            pt={6}
            pb={3}
            textAlign="center"
            sx={{ paddingX: { xs: 4, sm: 4, lg: 0, xl: 0 } }}
          >
            <Grid item>
              <Typography variant="body1" color="primary">
                All Rights Reserved © 2022 &nbsp;| &nbsp;&nbsp;
                <Link href="/" sx={{ textDecoration: "none" }}>
                  nilex.io
                </Link>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <Link
                  href="https://www.fiverr.com/users/m_aabid"
                  sx={{ textDecoration: "none" }}
                >
                  Muhammad Abid
                </Link>
              </Typography>

              <Grid item my={2}>
                <Link
                  href="/"
                  sx={{ textDecoration: "none" }}
                  textTransform="uppercase"
                >
                  <Typography variant="body2" color="secondary">
                    nile x
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default MainFooter;

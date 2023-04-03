import { Box, Grid, Link, Typography } from "@mui/material";
import React from "react";

import team1 from "../../assets/images/team1.png";
import team2 from "../../assets/images/team2.png";
import team3 from "../../assets/images/team3.png";
import team4 from "../../assets/images/team4.png";
import LinkedIn from "../../assets/images/LinkedIn.png";
import twitter from "../../assets/images/twitter.png";

const TeamComp = () => {
  return (
    <>
      <Box sx={{ marginY: { xs: 2, sm: 2, lg: 5, xl: 5 } }}>
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
              Team
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-end"
          sx={{
            marginTop: { xs: 2, sm: 2, lg: 3, xl: 3 },
            paddingY: { xs: 0, sm: 0, lg: 5, xl: 5 },
          }}
        >
          <Grid
            item
            sx={{
              marginX: { xs: 0, sm: 0, lg: 3, xl: 3 },
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
                  src={team1}
                  srcSet={team1}
                  alt="team tomas"
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
                  Tomás Domingos
                </Typography>
              </Grid>

              <Grid item>
                <Typography
                  variant="body2"
                  color="#03f1a9"
                  textTransform="uppercase"
                  fontWeight="bold"
                >
                  co-founder & ceo
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
                    <Link href="https://twitter.com/toomingos">
                      <img src={twitter} srcSet={twitter} alt="twitter" />
                    </Link>
                  </Grid>
                  <Grid item mx={1}>
                    <Link href="https://www.linkedin.com/in/tom%C3%A1s-domingos-3435321a3/">
                      <img src={LinkedIn} srcSet={LinkedIn} alt="LinkedIn" />
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            sx={{
              marginX: { xs: 0, sm: 0, lg: 3, xl: 3 },
              marginY: { xs: 5, sm: 5, lg: 0, xl: 0 },
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
                  src={team2}
                  srcSet={team2}
                  alt="team firas"
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
                  firas singer
                </Typography>
              </Grid>

              <Grid item>
                <Typography
                  variant="body2"
                  color="#03f1a9"
                  textTransform="uppercase"
                  fontWeight="bold"
                >
                  co-founder & ceo
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
                    <Link href="https://www.linkedin.com/in/firas-s-24750443/">
                      <img src={LinkedIn} srcSet={LinkedIn} alt="LinkedIn" />
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            sx={{
              marginX: { xs: 0, sm: 0, lg: 3, xl: 3 },
              marginY: { xs: 5, sm: 5, lg: 0, xl: 0 },
            }}
          >
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <img src={team3} srcSet={team3} alt="team praveen" />
              </Grid>

              <Grid item mt={1}>
                <Typography
                  variant="h6"
                  color="primary"
                  textTransform="uppercase"
                  fontWeight="bold"
                >
                  praveen kumar
                </Typography>
              </Grid>

              <Grid item>
                <Typography
                  variant="body2"
                  color="#03f1a9"
                  textTransform="uppercase"
                  fontWeight="bold"
                >
                  cto
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
                    <Link href="https://www.linkedin.com/in/praveenkumar-radhakrishnan-9806514b/">
                      <img src={LinkedIn} srcSet={LinkedIn} alt="LinkedIn" />
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            sx={{
              marginX: { xs: 0, sm: 0, lg: 3, xl: 3 },
              marginTop: { xs: 5, sm: 5, lg: 0, xl: 0 },
            }}
          >
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <img src={team4} srcSet={team4} alt="team colin" />
              </Grid>

              <Grid item mt={1}>
                <Typography
                  variant="h6"
                  color="primary"
                  textTransform="uppercase"
                  fontWeight="bold"
                >
                  colin smith
                </Typography>
              </Grid>

              <Grid item>
                <Typography
                  variant="body2"
                  color="#03f1a9"
                  textTransform="uppercase"
                  fontWeight="bold"
                >
                  coo
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
                    <Link href="https://twitter.com/ColinMacSmith">
                      <img src={twitter} srcSet={twitter} alt="twitter" />
                    </Link>
                  </Grid>
                  <Grid item ml={1}>
                    <Link href="https://www.linkedin.com/in/colinmacsmith/">
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

export default TeamComp;

import {
  Box,
  Button,
  Container,
  FilledInput,
  FormControl,
  Grid,
  InputLabel,
  Typography,
} from "@mui/material";
import React from "react";

import anim3 from "../../assets/animations/Untitled-3.gif";

const styles = {
  subscribeContain: {
    borderRadius: `16px`,
    backgroundImage: `linear-gradient(314.36deg, rgba(34, 72, 183, 0.13) 22.8%, rgba(104, 104, 104, 0.29) 86.45%)`,
    backdropFilter: `blur(58px)`,
  },
};

const FoundersClub = () => {
  const [email, setEmail] = React.useState("");

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <>
      <Box mt={5}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Typography
              variant="body2"
              color="secondary"
              textTransform="uppercase"
            >
              fractionalize. trade. earn. govern.
            </Typography>
          </Grid>

          <Grid item mt={2}>
            <Typography
              variant="h3"
              color="primary"
              fontWeight="bold"
              textTransform="capitalize"
            >
              the founders club
            </Typography>
          </Grid>
        </Grid>

        <Box mt={2}>
          <Grid
            pb={10}
            px={10}
            container
            direction="row"
            justifyContent="start"
            alignItems="center"
          >
            <Container sx={{ position: "relative" }}>
              <img
                src={anim3}
                srcSet={anim3}
                alt="blue bigscene lp - founders club"
              />

              <Grid
                item
                style={styles.subscribeContain}
                lg={4}
                xl={4}
                sx={{
                  position: "absolute",
                  top: "150px",
                  left: "100px",
                  paddingLeft: "20px",
                }}
              >
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="start"
                >
                  <Grid item mt={3}>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      color="primary"
                      textTransform="capitalize"
                    >
                      lifetime utility
                    </Typography>
                  </Grid>

                  <Grid item pr={3} mt={3}>
                    <Typography variant="body2" color="primary">
                      Discounted fees, voting power multplier merch airdrops,
                      and much more.
                    </Typography>
                  </Grid>

                  <Grid item pr={3} mt={3}>
                    <Typography variant="body2" color="primary">
                      Airdropped NFTs to active ealry members of the community
                    </Typography>
                  </Grid>

                  <Grid item mt={3}>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      color="primary"
                      textTransform="capitalize"
                    >
                      get in early
                    </Typography>
                  </Grid>

                  <Grid item mt={1} mb={3}>
                    <Grid
                      container
                      direction="row"
                      justifyContent="start"
                      alignItems="center"
                    >
                      <Grid item mr={2}>
                        <FormControl variant="filled" sx={{ width: "220px" }}>
                          <InputLabel
                            htmlFor="email"
                            sx={{
                              color: "white",
                              fontSize: "14px",
                              top: "-2px",
                            }}
                          >
                            E-mail Address
                          </InputLabel>

                          <FilledInput
                            sx={{
                              height: "45px",
                              color: "#ffffff",
                              borderRadius: 2,
                            }}
                            id="email"
                            value={email}
                            onChange={handleEmail}
                          />
                        </FormControl>
                      </Grid>
                      <Grid item ml={1}>
                        <Button
                          variant="contained"
                          sx={{
                            background: "#02FF49",
                            borderRadius: 2,
                            textTransform: "capitalize",
                            fontWeight: 700,
                            color: "#1F1F21",
                            height: "45px",
                          }}
                        >
                          subscribe
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default FoundersClub;

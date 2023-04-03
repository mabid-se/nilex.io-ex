import {
  Box,
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import GreenGradContact from "../GreenGradContact";

const Contact = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  return (
    <>
      <Box
        sx={{
          marginY: { xs: 5, sm: 5, lg: 5, xl: 5 },
          paddingY: { lg: 5, xl: 5 },
        }}
      >
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
            <Typography
              variant="h3"
              color="primary"
              fontWeight="bold"
              textTransform="capitalize"
            >
              contact us
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{
            marginTop: { xs: 5, sm: 5, lg: 5, xl: 5 },
            paddingX: { xs: 5, sm: 5, lg: 0, xl: 0 },
          }}
        >
          <GreenGradContact>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              py={5}
              px={3}
            >
              <Grid item>
                <FormControl sx={{ width: "280px" }}>
                  <TextField
                    sx={{ color: "#ffffff" }}
                    id="name"
                    label="Name"
                    value={name}
                    variant="outlined"
                    onChange={handleName}
                  />
                </FormControl>
              </Grid>

              <Grid item mt={4}>
                <FormControl sx={{ width: "280px" }}>
                  <TextField
                    sx={{ color: "#ffffff" }}
                    id="email"
                    label="Email Address"
                    value={email}
                    variant="outlined"
                    onChange={handleEmail}
                  />
                </FormControl>
              </Grid>

              <Grid item mt={4}>
                <FormControl sx={{ width: "280px" }}>
                  <TextField
                    multiline
                    id="message"
                    label="Message"
                    rows={3}
                    value={message}
                    variant="outlined"
                    onChange={handleMessage}
                  />
                </FormControl>
              </Grid>

              <Grid item mt={4}>
                <FormControl>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      borderRadius: 8,
                      background: "#02ff49",
                      fontWeight: 600,
                      textTransform: "capitalize",
                    }}
                  >
                    Contact
                  </Button>
                </FormControl>
              </Grid>
            </Grid>
          </GreenGradContact>
        </Grid>
      </Box>
    </>
  );
};

export default Contact; // 140

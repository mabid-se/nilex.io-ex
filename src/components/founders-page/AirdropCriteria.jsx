import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

import GradCont from "../GreenGradContact";

const AirdropCriteria = () => {
  return (
    <>
      <Box mt={-12} mb={5} pb={6}>
        <Container>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item mb={1}>
              <Typography
                variant="h3"
                color="primary"
                fontWeight="bold"
                textTransform="capitalize"
              >
                airdrop criteria
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            mt={6}
          >
            <Grid item lg={6} xl={6} pr={4}>
              <GradCont>
                <Grid py={3} px={3}>
                  {" "}
                  <Typography variant="body2" color="primary">
                    Nile X will soon open a Founders Club Whitelist page where
                    community members can complete tasks on the road up to the
                    Beta launch of the CEX, celebrating Lake Albert’s Milestone.
                  </Typography>
                </Grid>
              </GradCont>
            </Grid>
            <Grid item lg={6} xl={6} pl={4}>
              <GradCont>
                <Grid py={3} px={3}>
                  <Typography variant="body2" color="primary">
                    The tasks will be simple and easy to complete, ranging from
                    following different social media pages, to referring the
                    platform to friends. Winners are the ones that complete the
                    most tasks through time, rewarding early and active
                    community members.
                  </Typography>
                </Grid>
              </GradCont>
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            mt={4}
          >
            <Grid item lg={6} xl={6} pr={4}>
              <GradCont>
                <Grid py={3} px={3}>
                  {" "}
                  <Typography variant="body2" color="primary">
                    The 5 community members with the highest task completion
                    score will get one of the 5 Legendary Tier Founding Members
                    Club NFTs, granting the users with the highest degree of
                    utility on Nile X’s Ecosystem, Super Rare, Rare and Common
                    will be airdropped to the members below on the scoreboard.
                  </Typography>
                </Grid>
              </GradCont>
            </Grid>
            <Grid item lg={6} xl={6} pl={4}>
              <GradCont>
                <Grid py={3} px={3}>
                  <Typography variant="body2" color="primary">
                    The last member on the Airdrop list will be the 1.000th
                    placed member, who will get the last available Common tier
                    NFT. Winners of the NFT can later sell to a third party in
                    the suggested platform. Other NFT Marketplaces can be used.
                  </Typography>
                </Grid>
              </GradCont>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AirdropCriteria;

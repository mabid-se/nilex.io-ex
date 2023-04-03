import { Box } from "@mui/material";
import React from "react";

const GreenGradBoxEcosystemSm = (props) => {
  return (
    <>
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(237.21deg, rgba(34, 72, 183, 0.13) 4.37%, rgba(104, 104, 104, 0.29) 74.17%)",
          backdropFilter: "blur(150px)",
          borderRadius: "16px",
        }}
        py={3}
        px={4}
      >
        {props.children}
      </Box>
    </>
  );
};

export default GreenGradBoxEcosystemSm;

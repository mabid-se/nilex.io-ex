import { Box } from "@mui/material";
import React from "react";

const GreenGradBoxEcosystem = (props) => {
  return (
    <>
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(58.92deg, rgba(104, 104, 104, 0.29) 2.48%, rgba(34, 143, 183, 0.13) 94.52%)",
          backdropFilter: "blur(150px)",
          borderRadius: "16px",
          width: { lg: "410px", xl: "410px" },
        }}
        py={1}
        pl={3}
        pr={2}
      >
        {props.children}
      </Box>
    </>
  );
};

export default GreenGradBoxEcosystem;

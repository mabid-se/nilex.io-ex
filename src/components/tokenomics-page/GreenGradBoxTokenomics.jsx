import { Box } from "@mui/material";
import React from "react";

const GreenGradBoxTokenomics = (props) => {
  return (
    <>
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(245.1deg, rgba(34, 72, 183, 0.13) 3.02%, rgba(2, 255, 73, 0.31) 104.24%)",
          backdropFilter: "blur(150px)",
          borderRadius: "16px",
        }}
        py={1}
        pl={2}
        pr={5}
      >
        {props.children}
      </Box>
    </>
  );
};

export default GreenGradBoxTokenomics;

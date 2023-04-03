import { Box } from "@mui/material";
import React from "react";

const GreenGradBox = (props) => {
  return (
    <>
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(237.21deg, rgba(1, 51, 220, 0.12) 4.37%, rgba(2, 255, 73, 0.1) 74.17%)",
        }}
        pt={3}
        pb={2}
        px={2}
        borderRadius={4}
      >
        {props.children}
      </Box>
    </>
  );
};

export default GreenGradBox;

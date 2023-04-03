import { Box } from "@mui/material";
import React from "react";

const BlueGradBox = (props) => {
  return (
    <>
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(237.21deg, rgba(34, 72, 183, 0.13) 4.37%, rgba(1, 51, 220, 0.42) 83.21%)",
          height: "130px",
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

export default BlueGradBox;

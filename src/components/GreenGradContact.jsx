import { Box } from "@mui/material";
import React from "react";

const styles = {
  mainCont: {
    backgroundImage:
      "linear-gradient(239.86deg, rgba(34, 72, 183, 0.45) 0%, rgba(2, 255, 73, 0.31) 122.18%)",
    backdropFilter: "blur(150px)",
    borderRadius: "16px",
  },
};

const GreenGradContact = (props) => {
  return (
    <>
      <Box style={styles.mainCont}>{props.children}</Box>
    </>
  );
};

export default GreenGradContact;

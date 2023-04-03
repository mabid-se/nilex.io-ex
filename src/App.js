import React from "react";
import { Paper } from "@mui/material";
import Landing from "./pages/Landing";
import ContactUs from "./pages/ContactUs";
import Ecosystem from "./pages/Ecosystem";
import FoundersClub from "./pages/FoundersClub";
import Team from "./pages/Team";
import Tokenomics from "./pages/Tokenomics";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const dyColors = {
    primColors: {
      bgColor: "#02FF49",
      txtColor: "#000000",
    },
    secColor: {
      bgColor: "#0166FF",
      txtColor: "#f3f3f3",
    },
  };

  return (
    <Paper>
      <Routes>
        <Route path="/" element={<Landing colorData={dyColors.secColor} />} />
        <Route
          path="/tokenomics"
          element={<Tokenomics colorData={dyColors.primColors} />}
        />
        <Route
          path="/founders-club"
          element={<FoundersClub colorData={dyColors.primColors} />}
        />
        <Route
          path="/contact-us"
          element={<ContactUs colorData={dyColors.primColors} />}
        />
        <Route
          path="/ecosystem"
          element={<Ecosystem colorData={dyColors.primColors} />}
        />
        <Route path="/team" element={<Team colorData={dyColors.secColor} />} />
      </Routes>
    </Paper>
  );
};

export default App;

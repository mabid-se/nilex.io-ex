import React from "react";
import MainAppBar from "../components/MainAppBar";
import MainFooter from "../components/MainFooter";
import Advisors from "../components/team-page/Advisors";
import TeamComp from "../components/team-page/TeamComp";

const Team = (props) => {
  return (
    <>
      <MainAppBar colorz={props.colorData} />

      <TeamComp />

      <Advisors />

      <MainFooter />
    </>
  );
};

export default Team;

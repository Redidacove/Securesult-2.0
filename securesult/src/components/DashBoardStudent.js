import React from "react";
import Navbar from "./Navbar";
import ResultContainer from "./ResultContainer";
import "../../src/index.css";

const DashBoardStudent = () => {
  return (
    <div className="flex flex-row m-0">
      <Navbar />
      <ResultContainer />
    </div>
  );
};

export default DashBoardStudent;

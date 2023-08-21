import React from "react";
import Navbar from "./Navbar";
import ResultContainer from "./ResultContainer";

const DashBoard = () => {
  return (
    <div className="flex">
      <Navbar />
      
      <ResultContainer />
    </div>
  );
};

export default DashBoard;

import React from "react";
import "../../src/index.css";
import Navbar from "./Navbar";
import FileUpload from "./Ipfs/FileUpload";

const DashBoardTeacher = () => {
  return (
    <div className="flex flex-row m-0">
      <Navbar />
      <FileUpload />
    </div>
  );
};

export default DashBoardTeacher;

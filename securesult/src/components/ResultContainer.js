import React from "react";

const ResultContainer = () => {
  return (
    <div className="py-8 px-10">
      <h1 className="text-gray-700 text-4xl mb-6">Hello, user name</h1>
      <p className="text-gray-500 text-lg">
        Your results will be shown here once uploaded..
      </p>
      <button className="bg-orange-500 text-white font-semibold mt-5 rounded-lg py-2 px-3">
        Show Result
      </button>
    </div>
  );
};

export default ResultContainer;

import React from "react";
import landingImg from "../assests/landingPage.png";
import Avatar_1 from "../assests/student.png";
import Avatar_2 from "../assests/teacher.png";
const StartPage = () => {
  return (
    <div className=" w-screen h-screen flex gap-3">
      <div className="w-1/2  h-full p-3 flex flex-col items-center justify-center gap-5">
        <div>
          <div className="text-5xl  text-orange-600 text-left mb-6">
            Welcome to <br></br>
            <span className="text-[90px] font-bold font-ubuntu">
              Securesult
            </span>
          </div>
          <div className="my-3 font-inter text-gray-700">
            <div className="text-xl">Who are you?</div>
            <div className="flex gap-4 mt-8">
              <div className="border-gray-200 border-2 rounded-3xl p-3 text-center cursor-pointer opacity-90 hover:opacity-100 hover:border-gray-300">
                <img src={Avatar_1} alt="This is for student" />
                <p>Student</p>
              </div>
              <div className="border-gray-200 border-2 rounded-3xl p-3 text-center cursor-pointer opacity-90 hover:opacity-100 hover:border-gray-300">
                <img src={Avatar_2} alt="This is for Teacher" />
                <p className="">Teacher</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2  h-full flex justify-center items-center">
        <img src={landingImg} alt="This is data protection" className="w-4/6" />
      </div>
    </div>
  );
};

export default StartPage;

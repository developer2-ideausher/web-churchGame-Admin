import React from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

const layout = ({ children }) => {
  return (
    <div className="min-w-full h-screen overflow-hidden">
      <div className="max-w-[1920px] h-full w-full mx-auto flex flex-col bg-white">
        <div className="sticky top-0 z-50 ">
          <Header />
        </div>

        <div className="w-full flex flex-row h-full">
          <div className="2xl:w-1/7 w-1/6 bg-white overflow-y-auto h-full">
            <Sidebar />
          </div>

          <div className="overflow-y-auto flex-1 h-full bg-[#F6F7F9] ">
            <div className="px-5 mt-6 mb-5 pb-10 ">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default layout;

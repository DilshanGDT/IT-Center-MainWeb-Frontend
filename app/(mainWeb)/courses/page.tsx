import React from "react";
import { Options } from "./options";
import HCourseCard from "../components/cards/hCourseCard";

const Home: React.FC = () => {
  return (
    <div className="p-10">
      <h1 className=" from-red-700 to-gray-800 bg-clip-text text-transparent bg-gradient-to-t font-bold md:text-3xl sm:text-lg text-center gird">
        Course Overview
      </h1>
      <div className="flex justify-center mt-1">
        <div className="bg-yellow-600 h-1 w-36 rounded-md"></div>
      </div>
      <br />

      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab h-10 text-lg text-maroon"
          aria-label="Undergraduate"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content border-base-300 rounded-box p-6 bg-white"
        >
          <Options />
          <br />
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 p-5">
            <div className="">
              <HCourseCard />
            </div>
            <div className="">
              <HCourseCard />
            </div>
            <div className="">
              <HCourseCard />
            </div>
            <div className="">
              <HCourseCard />
            </div>
            <div className="">
              <HCourseCard />
            </div>
          </div>
        </div>
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab h-10 text-lg"
          aria-label="External"
        />
        <div
          role="tabpanel"
          className="tab-content border-base-300 rounded-box p-6 bg-white"
        >
          <Options />
          <br />
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 p-5">
            <div className="">
              <HCourseCard />
            </div>
            <div className="">
              <HCourseCard />
            </div>
            <div className="">
              <HCourseCard />
            </div>
            <div className="">
              <HCourseCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

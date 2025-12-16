"use client";
import React from "react";
import ArrowIcon from "../../../public/Admin/Arrow";
import EnsVision from "./Details/Details"; // Freelancing
import { motion } from "framer-motion";
import DetailForGlobalKnowledge from "./Details/DetailForGlobalKnowledge"; // Global Knowledge

export default function Experience() {
  const [DescriptionJob, setDescriptionJob] = React.useState("Freelancing");

  const GetDescription = () => {
    switch (DescriptionJob) {
      case "Freelancing":
        return <EnsVision />;
      case "Global Knowledge":
        return <DetailForGlobalKnowledge />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col space-y-12 py-44 sm:pl-4 md:pl-8 lg:pl-12 xl:pl-48">
      <section className="flex flex-row items-start">
        <div className="flex flex-row items-center">
          <ArrowIcon className="size-4 flex-none text-AAsecondary md:h-6 md:w-5" />
          <span className="font-sans text-sm text-AAsecondary sm:text-xl"> 02.</span>
        </div>

        <span className="px-3 text-lg font-bold tracking-wider text-gray-200 opacity-85 md:text-2xl">
          Where I&apos;ve Worked
        </span>
        <div className="h-[0.2px] w-16 bg-gray-400 sm:w-44 md:w-80"></div>
      </section>

      {/* // ? Where I've Worked Content section */}
      <section className="z-50 flex flex-col space-y-4 md:flex-row md:items-start md:space-x-4 md:space-y-0">
        {/* // ? Left side list */}
        <CompaniesBar setDescriptionJob={setDescriptionJob} />
        {/* // ? Description for the selected role */}
        {GetDescription()}
      </section>
    </div>
  );
}

const CompaniesBar = (props: { setDescriptionJob: (x: string) => void }) => {
  const [barPosition, setBarPosition] = React.useState<number>(-12);
  const [barAbovePosition, setBarAbovePosition] = React.useState<number>(1);
  const [companyNameBackgroundColorGreen, setCompanyNameBackgroundColorGreen] =
    React.useState<boolean[]>([true, false]); // default: Freelancing selected

  const CompanyButton = (props: {
    BarPosition: number;
    BarAvobePosition: number;
    setDescriptionJob: (arg0: string) => void;
    DescriptionJob: "Freelancing" | "Global Knowledge";
    CompanyNameBackgroundColorGreen: boolean[];
    ButtonOrderOfcompanyNameBackgroundColorGreen: number;
    CompanyName: React.ReactNode;
  }) => {
    return (
      <button
        onClick={() => {
          setBarPosition(props.BarPosition);
          setBarAbovePosition(props.BarAvobePosition);
          props.setDescriptionJob(props.DescriptionJob);
          setCompanyNameBackgroundColorGreen(props.CompanyNameBackgroundColorGreen);
        }}
        className={`w-32 flex-none rounded py-3 text-center font-mono text-xs duration-500 hover:bg-ResumeButtonHover hover:text-AAsecondary sm:text-sm md:w-44 md:px-4 md:pl-6 md:text-left ${
          companyNameBackgroundColorGreen[props.ButtonOrderOfcompanyNameBackgroundColorGreen]
            ? "bg-ResumeButtonHover text-AAsecondary"
            : "text-gray-500"
        }`}
      >
        {props.CompanyName}
      </button>
    );
  };

  return (
    <div className="scrollbar-hide flex w-screen flex-col items-start justify-start overflow-auto pb-4 sm:items-center sm:justify-center md:flex-row md:overflow-hidden md:pb-0 lg:w-auto">
      {/* // ? left bar Holder */}
      <div className="w-34 relative order-2 hidden h-0.5 translate-y-1 rounded bg-gray-500 md:order-1 md:block md:h-[90px] md:w-0.5">
        {/* // ? animated left bar */}
        <motion.div
          animate={{ y: barPosition }}
          className="absolute h-0.5 w-10 rounded bg-AAsecondary md:h-12 md:w-0.5"
        ></motion.div>
      </div>

      {/* // ? Company buttons */}
      <div className="order-1 flex flex-col space-y-1 pl-8 md:order-2 md:pl-0 ">
        <div className="flex flex-row md:flex-col">
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={0}
            CompanyName="Freelancing"
            BarPosition={-12}
            BarAvobePosition={1}
            DescriptionJob="Freelancing"
            CompanyNameBackgroundColorGreen={[true, false]}
            setDescriptionJob={props.setDescriptionJob}
          />
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={1}
            CompanyName="Global Knowledge"
            BarPosition={32}
            BarAvobePosition={129}
            DescriptionJob="Global Knowledge"
            CompanyNameBackgroundColorGreen={[false, true]}
            setDescriptionJob={props.setDescriptionJob}
          />
        </div>

        {/* mobile underline */}
        <div className="block h-0.5 rounded bg-gray-500 md:hidden">
          <motion.div
            animate={{ x: barAbovePosition }}
            className="h-0.5 w-[128px] rounded bg-AAsecondary"
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

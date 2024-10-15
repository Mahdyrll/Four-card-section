import React from "react";
import Supervisor from "./images/icon-supervisor.svg"
import team from './images/icon-team-builder.svg'
import karma from "./images/icon-karma.svg"
import Calculator from './images/icon-calculator.svg'

const Card = ({ title, description, icon, borderColor }) => {
    return (
        <div className={`border-t-4 bg-white rounded-md px-6 py-6 mt-6 sm:px-8 shadow-xl ${borderColor}`}>
            <p className="font-semibold text-lg text-gray-600 sm:font-medium sm:text-xl">{title}</p>
            <p className="font-light text-xs text-gray-400 mt-1 leading-[22px] sm:mt-2 sm:w-64">{description}</p>
            <img src={icon} className="mr-0 ml-auto mt-7" />
        </div>
    );
};

export default function BoxComponent() {
    return (
        <div className="px-[53px] mt-[66px] sm:mt-[40px] sm:grid sm:grid-cols-3 sm:items-center sm:justify-items-center">
            <div className="sm:col-span-1 sm:row-start-1 sm:row-end-3 sm:mr-[-12rem]">
                <Card
                    title="Supervisor"
                    description="Monitors activity to identify project roadblocks"
                    icon={Supervisor}
                    borderColor="border-t-[#64D4D4]"
                />
            </div>
            <div className="sm:col-span-1">
                <Card
                    title="Team Builder"
                    description="Scans our talent network to create the optimal team for your project"
                    icon={team}
                    borderColor="border-t-[#b32222]"
                />
            </div>
            <div className="sm:col-span-1 sm:row-start-2 sm:col-start-2 sm:mt-1">
                <Card
                    title="Karma"
                    description="Regularly evaluates our talent to ensure quality"
                    icon={karma}
                    borderColor="border-t-[#fcaf4a]"
                />
            </div>
            <div className="sm:col-span-1 sm:row-start-1 sm:col-start-3 sm:row-end-3 sm:ml-[-12rem]">
                <Card
                    title="Calculator"
                    description="Uses data from past projects to provide better delivery estimates"
                    icon={Calculator}
                    borderColor='border-t-[#549ef2]'
                />
            </div>
        </div>
    )
}
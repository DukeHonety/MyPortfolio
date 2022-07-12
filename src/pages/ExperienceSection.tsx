import React from 'react';

import Icon from '../components/Icon';
import { myProjects } from '../core/data/experience';

export default function ExperienceSection() {
  return (
    <div className="py-100 bg-secondary">
      <p className="text-25 text-light-500 font-light text-center mb-50">EXPERIENCES</p>
      <div className="container mx-auto">
        {
        myProjects.map((experience, index:number) => (
          <div key={index} className={"w-full md:flex " + (index % 2 === 1 ? "flex-row-reverse" : "")}>
            <div className="basis-2/5 py-50">
              <div className="w-full p-20">
                <span className="bg-warning rounded-full py-5 px-15 text-white text-20 items-center font-bold">{experience.title}</span>
                <p className="text-15 font-bold my-20 text-light-400 px-10">{experience.role} <span className="block md:hidden text-light-300">( {experience.range} )</span></p>
                <div className="flex flex-wrap">
                  {experience.stacks.map((item, index:number) => (
                    <div key={index} className="bg-warning-75 rounded-full px-10 py-5 text-light-500 text-12 mr-10 mb-15">{item}</div>
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden md:flex basis-1/5 flex flex-col justify-start items-center">
              <div className="h-50 w-5 bg-white"></div>
              <div className="h-60 w-60 rounded-full border-4 text-white color-white bg-secondary-100 flex justify-center items-center">
                <Icon name="search" color="white" size={30} />
              </div>
              <div className="h-50 w-5 bg-white flex-1"></div>
            </div>
            <div className="hidden md:flex basis-2/5 pt-75">
              <p className={"text-light-400 w-full font-bold text-20 " + (index % 2 === 1 ? "text-right" : "")}>{experience.range}</p>
            </div>
          </div>
        ))}
        <div className="w-full md:flex">
          <div className="basis-2/5 py-50">
          </div>
          <div className="hidden md:flex basis-1/5 flex flex-col justify-start items-center">
            <div className="h-50 w-5 bg-white"></div>
            <div className="h-60 w-60 rounded-full border-4 text-white color-white bg-secondary-100 flex justify-center items-center">
              <Icon name="starter" color="white" size={30} />
            </div>
            <div className="h-50 w-5 bg-white flex-1"></div>
          </div>
          <div className="hidden md:flex basis-2/5">
          </div>
        </div>
      </div>
    </div>
  )
}
import React from 'react';

import { skillProp, mySkills } from '../core/data/skill';

export default function SkillSection() {
  return (
    <div className="w-full py-100 bg-light-500" id="skills-section">
      <p className="text-25 text-light-50 font-bold text-center mb-50">My SKILLS</p>
      <div className="container mx-auto">
        <div className="w-full flex flex-wrap justify-between">
          {
            mySkills.map((item: skillProp, index:number) => (
              <div key={index} className="p-20 bg-light-400 rounded-xl m-10 overflow-hidden flex flex-col justify-center items-center">
                <img className="h-50 w-50 mb-10" src={item.icon} alt={item.name}/>
                <div className="text-center max-w-100">
                  <p className="text-white truncate">{item.name}</p>
                  <p className="text-white truncate">{item.age} years</p>
                </div>
              </div>
            )) 
          }
        </div>
      </div>
    </div>
  )
}
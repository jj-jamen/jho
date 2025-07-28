import React from 'react'
import employmentHistory from "./employmentHistory.json";
import { FaCheck } from "react-icons/fa";

function CompEmploymentHistory() {
  return (
    <div className="w-full min-h-[100vh] flex flex-col justify-start items-start">

              <h1 id="employment-history-title" className="text-4xl uppercase font-black italic mt-20" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">Employment History</h1>

                <div className="w-full mt-15 grid grid-cols-2 gap-5" data-aos-anchor-placement="center-center">
                  {employmentHistory.map((job, idx) => (
                    <div
                      key={idx}
                      className="flex flex-row bg-white border border-gray-200 rounded-lg shadow-2xl overflow-hidden"
                      data-aos="fade-up"
                      data-aos-delay="200"
                      data-aos-duration="1000"
                    >
                      {/* Image section */}
                      <div className="w-1/3 bg-transparent flex items-center justify-center rounded-lg">
                        <img
                          src={job.image}
                          alt={job.title}
                          className="w-45 h-45 rounded-lg p-1"
                        />
                      </div>
                      {/* Content section */}
                      <div className="flex-1 p-6 flex flex-col justify-center">
                        <h2 className="text-md font-bold text-gray-900 mb-1 uppercase">{job.title}</h2>
                        <p className="text-sm text-gray-700 mb-1">{job.company} <span className='text-gray-400'>&#8226;</span> {job.dates}</p>
                        <ul className="text-gray-700 space-y-1 pl-0">
                          {job.responsibilities.map((resp, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <FaCheck className="text-green-500 mt-1" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
  )
}

export default CompEmploymentHistory
import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

const Research = () => {
    return (
        <div className='bg-gradient-to-br from-slate-800 via-slate-700 to-amber-900 min-h-screen py-8 sm:py-12 lg:py-0 lg:h-screen'>
            <div className='flex flex-col justify-center items-center p-4 sm:p-6 lg:p-10 gap-3 sm:gap-5'>
                <h2 className='text-center font-bold text-2xl sm:text-3xl lg:text-4xl text-white'>Research And Analysis</h2>
                <p className='text-center text-sm sm:text-base lg:text-lg text-white max-w-4xl leading-relaxed px-2'>
                    Comprehensive research to understand market demands, benchmark against competitors and address customer pain points.
                </p>
            </div>
            <div className='flex flex-col lg:flex-row justify-around items-center px-4 sm:px-6 lg:px-8 gap-6 lg:gap-4'>
                <div className="bg-slate-700/90 backdrop-blur-sm rounded-lg border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-slate-600/90 p-4 sm:p-6 w-full max-w-md lg:max-w-none lg:w-auto">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Market Research</h3>
                    <p className='text-center text-sm sm:text-base text-white mb-4 sm:mb-6 leading-relaxed'>
                        Identified trends in air freight services and customer preferences globally
                    </p>
                    <div className='space-y-2 sm:space-y-3'>
                        <p className='text-white text-sm sm:text-base leading-relaxed'>
                            <FaCheckCircle className='inline text-amber-600 mr-2 flex-shrink-0' />
                            Analyzed the growing demand for expedited air freight services post-pandemic
                        </p>
                        <p className='text-white text-sm sm:text-base leading-relaxed'>
                            <FaCheckCircle className='inline text-amber-600 mr-2 flex-shrink-0' />
                            Highlighted sustainability trends in air cargo to incorporate eco-friendly practices
                        </p>
                    </div>
                </div>
                <div className="bg-slate-700/90 backdrop-blur-sm rounded-lg border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-slate-600/90 p-4 sm:p-6 w-full max-w-md lg:max-w-none lg:w-auto">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Competitor Analysis</h3>
                    <p className='text-center text-sm sm:text-base text-white mb-4 sm:mb-6 leading-relaxed'>
                        Evaluated strengths and gaps in competitor offering Conquest's services
                    </p>
                    <div className='space-y-2 sm:space-y-3'>
                        <p className='text-white text-sm sm:text-base leading-relaxed'>
                            <FaCheckCircle className='inline text-amber-600 mr-2 flex-shrink-0' />
                            Assessed service portfolio of major players to identify gaps in Conquest's offerings
                        </p>
                        <p className='text-white text-sm sm:text-base leading-relaxed'>
                            <FaCheckCircle className='inline text-amber-600 mr-2 flex-shrink-0' />
                            Identified strengths in personalized service areas to establish differentiation
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Research

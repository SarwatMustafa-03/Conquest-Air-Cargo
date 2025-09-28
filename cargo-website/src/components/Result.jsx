

import React from 'react'

const Result = () => {
  return (
    <div className='bg-gradient-to-br from-slate-800 via-slate-700 to-amber-900 p-4 sm:p-6 md:p-8 lg:p-10'>
      <h2 className='text-center text-white font-bold text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-6'>Result And Impact</h2>
      <div className='flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-5 mt-4 sm:mt-6'> 
        <div className="text-center bg-slate-700/90 backdrop-blur-sm rounded-lg p-4 sm:p-6 w-full sm:w-64 max-w-sm border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-slate-600/90">
            <h3 className='text-amber-600 font-bold text-2xl sm:text-3xl mb-2'>35%</h3>
           
            <h4 className='text-white text-sm sm:text-base leading-relaxed'>We increased by sale</h4>
        </div>
        <div className="text-center bg-slate-700/90 backdrop-blur-sm rounded-lg p-4 sm:p-6 w-full sm:w-64 max-w-sm border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-slate-600/90">
             <h3 className='text-amber-600 font-bold text-2xl sm:text-3xl mb-2'>150%</h3>
             <h4 className='text-white text-sm sm:text-base leading-relaxed'>Return on investment</h4>
        </div>
        <div className="text-center bg-slate-700/90 backdrop-blur-sm rounded-lg p-4 sm:p-6 w-full sm:w-64 max-w-sm border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-slate-600/90"> 
            <h3 className='text-amber-600 font-bold text-2xl sm:text-3xl mb-2'>40%</h3>
            <h4 className='text-white text-sm sm:text-base leading-relaxed'>Increase in recharge rate</h4>
        </div>
      </div>
    </div>
  )
}

export default Result











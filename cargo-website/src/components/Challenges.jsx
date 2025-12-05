import React from 'react'

const Challenges = () => {
  return (
    <div className="max-w-full h-90 mx-auto p-4 sm:p-8 md:p-12 lg:p-16 bg-gradient-to-br from-slate-800 via-slate-700 to-amber-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        
        {/* Target Audience Section */}
        <div className="p-4 sm:p-6 text-center bg-slate-700/90 backdrop-blur-sm rounded-lg border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-slate-600/90">

          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Target Audience</h2>
          <p className="text-sm sm:text-base text-white mb-4 sm:mb-6 leading-relaxed">
            Businesses Across Industries Requiring Reliable Air Freight Solutions.
          </p>
          
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-green-400 to-green-500 text-white rounded-full text-xs sm:text-sm font-medium hover:scale-105 transition-transform cursor-pointer">
              SMEs
            </span>
            <span className="px-4 py-1.5 sm:px-6 sm:py-2 bg-gradient-to-r from-green-400 to-green-500 text-white rounded-full text-xs sm:text-sm font-medium hover:scale-105 transition-transform cursor-pointer">
              Large corporations
            </span>
            <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-green-400 to-green-500 text-white rounded-full text-xs sm:text-sm font-medium hover:scale-105 transition-transform cursor-pointer">
              E-commerce
            </span>
            <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-green-400 to-green-500 text-white rounded-full text-xs sm:text-sm font-medium hover:scale-105 transition-transform cursor-pointer">
              Specialized industries
            </span>
            <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-green-400 to-green-500 text-white rounded-full text-xs sm:text-sm font-medium hover:scale-105 transition-transform cursor-pointer">
              Freight forwarders
            </span>
          </div>
        </div>

        {/* Overview of Challenges Section */}
        <div className="p-4 sm:p-6 text-center bg-slate-700/90 backdrop-blur-sm rounded-lg border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-slate-600/90">

          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Overview Of Challenges</h2>
          <p className="text-sm sm:text-base text-white mb-4 sm:mb-6 leading-relaxed">
            Limited Digital Engagement, Need For Specialized Service Offerings, And Evolving Customer Expectations.
          </p>
          
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            <span className="px-4 py-1.5 sm:px-6 sm:py-2 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-full text-xs sm:text-sm font-medium hover:scale-105 transition-transform cursor-pointer">
              Limited digital engagement
            </span>
            <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-full text-xs sm:text-sm font-medium hover:scale-105 transition-transform cursor-pointer">
              Tailored solutions
            </span>
            <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-full text-xs sm:text-sm font-medium hover:scale-105 transition-transform cursor-pointer">
              Insurance features
            </span>
            <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-full text-xs sm:text-sm font-medium hover:scale-105 transition-transform cursor-pointer">
              Customer expectations
            </span>
          </div>
        </div>
        
      </div>
    </div>
  );
}
export default Challenges;
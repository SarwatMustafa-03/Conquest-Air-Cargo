
import React from 'react'
import cargoBg from "../assets/cargo-bg.jpg"; // correct path

const Hero = () => {
  return (
    <>
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: `url(${cargoBg})` }}
    >
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center leading-tight">
        Conquest Air Cargo
      </h1>
    
    
      {/* Bottom Brand Logos Section */}
      <div className="absolute bottom-4 sm:bottom-7 left-0 right-0 bg-gradient-to-#4A3832 py-3 sm:py-5 shadow-2xl">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="flex items-center justify-center space-x-4 sm:space-x-8 md:space-x-16 flex-wrap gap-y-2">
            {/* Mediusware Logo Placeholder */}
            <div className="flex items-center space-x-1 sm:space-x-2 opacity-70 hover:opacity-100 transition-opacity">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs sm:text-sm">MW</span>
              </div>
              <span className="text-gray-700 font-semibold text-sm sm:text-lg">mediusware</span>
            </div>
            
            {/* X (Twitter) Logo */}
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-black rounded-lg flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
              <span className="text-white font-bold text-lg sm:text-xl">𝕏</span>
            </div>
            

          
        </div>
      </div>
      </div>
      </div>
</>
  );
}

export default Hero;
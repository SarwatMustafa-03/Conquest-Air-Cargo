import React from 'react';
import { Phone, AlertTriangle, Clock, Shield } from 'lucide-react';

const Userpoints = () => {
  const painPoints = [
    {
      id: 1,
      title: "High costs for niche or last-minute cargo needs",
      position: "top-left",
      icon: <AlertTriangle className="w-5 h-5 text-white" />
    },
    {
      id: 2,
      title: "Limited transparency regarding insurance options for cargo safety",
      position: "top-right",
      icon: <Shield className="w-5 h-5 text-white" />
    },
    {
      id: 3,
      title: "Insufficient communication during delays or disruptions",
      position: "bottom-left",
      icon: <Phone className="w-5 h-5 text-white" />
    },
    {
      id: 4,
      title: "Lack of real-time shipment tracking, leading to customer uncertainty",
      position: "bottom-right",
      icon: <Clock className="w-5 h-5 text-white" />
    }
  ];

  return (
    <div className='bg-gradient-to-br from-slate-800 via-slate-700 to-amber-900 py-10 px-4'>
      <div className='max-w-5xl mx-auto'>

        {/* Header */}
        <div className='text-center mb-10'>
          <h2 className='text-3xl font-bold text-white mb-3'>User Pain Points</h2>
          <p className='text-gray-200 text-base max-w-2xl mx-auto'>
            Pinpointed issues like lack of service transparency, limited insurance options, and rigid service structures.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className='relative hidden lg:flex justify-center items-center min-h-[450px]'>
          <div className='relative z-10'>
            {/* Radial Yellow Background */}
            <div className='absolute inset-0 -m-10'>
              <div className='w-56 h-56 rounded-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-400 opacity-20 animate-pulse'></div>
              <div className='absolute inset-2 rounded-full bg-gradient-to-r from-yellow-200 via-yellow-300 to-amber-300 opacity-30'></div>
              <div className='absolute inset-4 rounded-full bg-gradient-to-r from-yellow-100 via-yellow-200 to-amber-200 opacity-40'></div>
            </div>

            {/* Person Image */}
            <div className='relative z-20 w-44 h-44 bg-gradient-to-br from-amber-400 via-orange-400 to-yellow-500 rounded-full flex items-center justify-center shadow-2xl'>
              <div className='w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/30'>
                <div className='relative'>
                  <div className='w-14 h-14 bg-slate-600 rounded-full mb-1'></div>
                  <div className='w-12 h-18 bg-slate-600 rounded-t-full mx-auto'></div>
                  <Phone className='absolute top-1 right-0 w-5 h-5 text-amber-800 transform rotate-12' />
                </div>
              </div>
            </div>
          </div>

          {/* Pain Points */}
          {painPoints.map((point) => (
            <div
              key={point.id}
              className={`absolute bg-slate-700/90 backdrop-blur-sm rounded-lg p-3 w-52 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-slate-600/90 ${
                point.position === 'top-left' ? '-top-6 -left-6' :
                point.position === 'top-right' ? '-top-6 -right-6' :
                point.position === 'bottom-left' ? '-bottom-6 -left-6' :
                '-bottom-6 -right-6'
              }`}
            >
              <div className='flex items-start gap-2'>
                <div className='w-7 h-7 bg-slate-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1'>
                  <span className='text-amber-300 font-bold text-xs'>{point.id}</span>
                </div>
                <div className='flex-1'>
                  <div className='flex items-center gap-2 mb-1'>
                    {point.icon}
                  </div>
                  <p className='text-white text-xs leading-relaxed'>
                    {point.title}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Connecting Lines */}
          <svg className='absolute inset-0 w-full h-full pointer-events-none' style={{ zIndex: 5 }}>
            <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="rgba(251, 191, 36, 0.3)" strokeWidth="1.5" strokeDasharray="4,4" />
            <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="rgba(251, 191, 36, 0.3)" strokeWidth="1.5" strokeDasharray="4,4" />
            <line x1="50%" y1="50%" x2="25%" y2="75%" stroke="rgba(251, 191, 36, 0.3)" strokeWidth="1.5" strokeDasharray="4,4" />
            <line x1="50%" y1="50%" x2="75%" y2="75%" stroke="rgba(251, 191, 36, 0.3)" strokeWidth="1.5" strokeDasharray="4,4" />
          </svg>
        </div>

        {/* Mobile Layout */}
        <div className='lg:hidden'>
          <div className='flex justify-center mb-6'>
            <div className='relative'>
              <div className='absolute inset-0 -m-6'>
                <div className='w-32 h-32 rounded-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-400 opacity-20 animate-pulse'></div>
                <div className='absolute inset-2 rounded-full bg-gradient-to-r from-yellow-200 via-yellow-300 to-amber-300 opacity-30'></div>
                <div className='absolute inset-3 rounded-full bg-gradient-to-r from-yellow-100 via-yellow-200 to-amber-200 opacity-40'></div>
              </div>
              <div className='relative z-20 w-28 h-28 bg-gradient-to-br from-amber-400 via-orange-400 to-yellow-500 rounded-full flex items-center justify-center shadow-2xl'>
                <div className='w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30'>
                  <div className='relative'>
                    <div className='w-8 h-8 bg-slate-600 rounded-full mb-1'></div>
                    <div className='w-6 h-8 bg-slate-600 rounded-t-full mx-auto'></div>
                    <Phone className='absolute top-1 -right-1 w-3 h-3 text-amber-800 transform rotate-12' />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            {painPoints.map((point) => (
              <div
                key={point.id}
                className='bg-slate-700/90 backdrop-blur-sm rounded-lg p-3 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-slate-600/90'
              >
                <div className='flex items-start gap-2'>
                  <div className='w-7 h-7 bg-slate-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1'>
                    <span className='text-amber-300 font-bold text-xs'>{point.id}</span>
                  </div>
                  <div className='flex-1'>
                    <div className='flex items-center gap-2 mb-1'>
                      {point.icon}
                    </div>
                    <p className='text-white text-xs leading-relaxed'>
                      {point.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Solution */}
        <div className='mt-10'>
          <div className='bg-gradient-to-r from-amber-500/20 to-yellow-500/20 backdrop-blur-sm rounded-lg p-6 border border-amber-300/30 text-center'>
            <p className='text-white text-base font-semibold'>
              Conquest resolves these pain points by simplifying services on one cohesive platform.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className='mt-8 grid grid-cols-2 md:grid-cols-4 gap-4'>
          <div className='text-center'>
            <div className='text-2xl font-bold text-amber-300 mb-1'>89%</div>
            <div className='text-gray-300 text-xs'>Customer Pain Reduced</div>
          </div>
          <div className='text-center'>
            <div className='text-2xl font-bold text-amber-300 mb-1'>24/7</div>
            <div className='text-gray-300 text-xs'>Support Available</div>
          </div>
          <div className='text-center'>
            <div className='text-2xl font-bold text-amber-300 mb-1'>100%</div>
            <div className='text-gray-300 text-xs'>Transparency</div>
          </div>
          <div className='text-center'>
            <div className='text-2xl font-bold text-amber-300 mb-1'>Real-time</div>
            <div className='text-gray-300 text-xs'>Tracking</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userpoints;

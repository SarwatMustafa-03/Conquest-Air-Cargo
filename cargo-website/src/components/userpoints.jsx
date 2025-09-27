
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
        <div className='bg-gradient-to-br from-slate-800 via-slate-700 to-amber-900 py-16 px-4'>
            <div className='max-w-6xl mx-auto'>
                
                {/* Header */}
                <div className='text-center mb-16'>
                    <h2 className='text-4xl font-bold text-white mb-4'>User Pain Points</h2>
                    <p className='text-gray-200 text-lg max-w-3xl mx-auto'>
                        Pinpointed issues like lack of service transparency, limited insurance options, and rigid service structures.
                    </p>
                </div>

                {/* Desktop Layout - Hidden on mobile */}
                <div className='relative hidden lg:flex justify-center items-center min-h-[600px]'>
                    
                    {/* Central Person with Radial Background */}
                    <div className='relative z-10'>
                        {/* Radial Yellow Background */}
                        <div className='absolute inset-0 -m-20'>
                            <div className='w-80 h-80 rounded-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-400 opacity-20 animate-pulse'></div>
                            <div className='absolute inset-4 rounded-full bg-gradient-to-r from-yellow-200 via-yellow-300 to-amber-300 opacity-30'></div>
                            <div className='absolute inset-8 rounded-full bg-gradient-to-r from-yellow-100 via-yellow-200 to-amber-200 opacity-40'></div>
                        </div>
                        
                        {/* Person Image Placeholder */}
                        <div className='relative z-20 w-64 h-64 bg-gradient-to-br from-amber-400 via-orange-400 to-yellow-500 rounded-full flex items-center justify-center shadow-2xl'>
                            <div className='w-48 h-48 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/30'>
                                {/* Person silhouette using CSS */}
                                <div className='relative'>
                                    <div className='w-20 h-20 bg-slate-600 rounded-full mb-2'></div>
                                    <div className='w-16 h-24 bg-slate-600 rounded-t-full mx-auto'></div>
                                    <Phone className='absolute top-2 right-0 w-6 h-6 text-amber-800 transform rotate-12' />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pain Point Cards - Desktop */}
                    {painPoints.map((point, index) => (
                        <div
                            key={point.id}
                            className={`absolute bg-slate-700/90 backdrop-blur-sm rounded-lg p-4 w-64 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-slate-600/90 ${
                                point.position === 'top-left' ? '-top-8 -left-8' :
                                point.position === 'top-right' ? '-top-8 -right-8' :
                                point.position === 'bottom-left' ? '-bottom-8 -left-8' :
                                '-bottom-8 -right-8'
                            }`}
                        >
                            <div className='flex items-start gap-3'>
                                <div className='w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1'>
                                    <span className='text-amber-300 font-bold text-sm'>{point.id}</span>
                                </div>
                                <div className='flex-1'>
                                    <div className='flex items-center gap-2 mb-2'>
                                        {point.icon}
                                    </div>
                                    <p className='text-white text-sm leading-relaxed'>
                                        {point.title}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Connecting Lines - Desktop */}
                    <svg className='absolute inset-0 w-full h-full pointer-events-none' style={{zIndex: 5}}>
                        <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="rgba(251, 191, 36, 0.3)" strokeWidth="2" strokeDasharray="5,5" />
                        <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="rgba(251, 191, 36, 0.3)" strokeWidth="2" strokeDasharray="5,5" />
                        <line x1="50%" y1="50%" x2="25%" y2="75%" stroke="rgba(251, 191, 36, 0.3)" strokeWidth="2" strokeDasharray="5,5" />
                        <line x1="50%" y1="50%" x2="75%" y2="75%" stroke="rgba(251, 191, 36, 0.3)" strokeWidth="2" strokeDasharray="5,5" />
                    </svg>
                </div>

                {/* Mobile/Tablet Layout */}
                <div className='lg:hidden'>
                    {/* Central Person - Mobile */}
                    <div className='flex justify-center mb-8'>
                        <div className='relative'>
                            {/* Radial Yellow Background - Mobile */}
                            <div className='absolute inset-0 -m-8 sm:-m-12'>
                                <div className='w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-400 opacity-20 animate-pulse'></div>
                                <div className='absolute inset-2 sm:inset-4 rounded-full bg-gradient-to-r from-yellow-200 via-yellow-300 to-amber-300 opacity-30'></div>
                                <div className='absolute inset-4 sm:inset-6 rounded-full bg-gradient-to-r from-yellow-100 via-yellow-200 to-amber-200 opacity-40'></div>
                            </div>
                            
                            {/* Person Image Placeholder - Mobile */}
                            <div className='relative z-20 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-amber-400 via-orange-400 to-yellow-500 rounded-full flex items-center justify-center shadow-2xl'>
                                <div className='w-24 h-24 sm:w-36 sm:h-36 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 sm:border-4 border-white/30'>
                                    <div className='relative'>
                                        <div className='w-8 h-8 sm:w-12 sm:h-12 bg-slate-600 rounded-full mb-1 sm:mb-2'></div>
                                        <div className='w-6 h-8 sm:w-10 sm:h-12 bg-slate-600 rounded-t-full mx-auto'></div>
                                        <Phone className='absolute top-1 -right-1 sm:top-2 sm:right-0 w-3 h-3 sm:w-4 sm:h-4 text-amber-800 transform rotate-12' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pain Point Cards - Mobile Grid */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
                        {painPoints.map((point, index) => (
                            <div
                                key={point.id}
                                className='bg-slate-700/90 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-slate-600/90'
                            >
                                <div className='flex items-start gap-3'>
                                    <div className='w-8 h-8 sm:w-10 sm:h-10 bg-slate-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1'>
                                        <span className='text-amber-300 font-bold text-sm sm:text-base'>{point.id}</span>
                                    </div>
                                    <div className='flex-1'>
                                        <div className='flex items-center gap-2 mb-2'>
                                            <div className='sm:scale-110'>
                                                {point.icon}
                                            </div>
                                        </div>
                                        <p className='text-white text-sm sm:text-base leading-relaxed'>
                                            {point.title}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Solution Statement */}
                <div className='mt-16'>
                    <div className='bg-gradient-to-r from-amber-500/20 to-yellow-500/20 backdrop-blur-sm rounded-xl p-8 border border-amber-300/30 text-center'>
                        <p className='text-white text-lg font-semibold'>
                            Conquest resolves these pain points by simplifying services on one cohesive platform.
                        </p>
                    </div>
                </div>

                {/* Additional Stats */}
                <div className='mt-12 grid grid-cols-1 md:grid-cols-4 gap-6'>
                    <div className='text-center'>
                        <div className='text-3xl font-bold text-amber-300 mb-2'>89%</div>
                        <div className='text-gray-300 text-sm'>Customer Pain Reduced</div>
                    </div>
                    <div className='text-center'>
                        <div className='text-3xl font-bold text-amber-300 mb-2'>24/7</div>
                        <div className='text-gray-300 text-sm'>Support Available</div>
                    </div>
                    <div className='text-center'>
                        <div className='text-3xl font-bold text-amber-300 mb-2'>100%</div>
                        <div className='text-gray-300 text-sm'>Transparency</div>
                    </div>
                    <div className='text-center'>
                        <div className='text-3xl font-bold text-amber-300 mb-2'>Real-time</div>
                        <div className='text-gray-300 text-sm'>Tracking</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Userpoints;
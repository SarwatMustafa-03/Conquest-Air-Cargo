 /*import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Package, Clock, Shield } from 'lucide-react';

const Charts = () => {
    // Sample data for charts
    const deliveryData = [
        { month: 'Jan', deliveries: 450 },
        { month: 'Feb', deliveries: 520 },
        { month: 'Mar', deliveries: 680 },
        { month: 'Apr', deliveries: 750 },
    ];

    const serviceData = [
        { name: 'Express', value: 40, color: '#f59e0b' },
        { name: 'Standard', value: 35, color: '#ef4444' },
        { name: 'Economy', value: 25, color: '#10b981' },
    ];

    const projectMetrics = [
        { metric: 'On-Time Delivery', before: '78%', after: '96%', improvement: '+18%' },
        { metric: 'Customer Satisfaction', before: '3.2/5', after: '4.8/5', improvement: '+50%' },
        { metric: 'Processing Time', before: '24hrs', after: '8hrs', improvement: '-67%' },
        { metric: 'Cost Efficiency', before: '$2.5k', after: '$1.8k', improvement: '-28%' },
    ];

    return (
        <div className='bg-gradient-to-br from-amber-800 via-slate-600 to-slate-800 w-full min-h-screen py-16'>
            <div className='max-w-7xl mx-auto px-8'>
                {/* Header Section */}
             /*  <div className='flex flex-col lg:flex-row justify-between gap-12 mb-16'>
                    <div className='flex flex-col justify-start items-start font-extrabold text-4xl text-white'>
                        <h2>The Conquest Air <br />Cargo Journey |</h2>
                        <h3 className='text-amber-300'>Case Study</h3>
                    </div>
                    <div className='text-gray-100 max-w-2xl'>
                        <p className='leading-relaxed mb-8'>
                            Conquest Air Cargo Services is a trusted logistics partner, specializing in reliable and efficient air freight solutions. 
                            With a strong commitment to safety and timely delivery, we provide seamless cargo transportation across local 
                            and international destinations. Our modern infrastructure, skilled workforce, and advanced tracking systems 
                            ensure that every shipment reaches its destination securely and on schedule.
                        </p>
                        
                        <div className='flex justify-center items-center gap-10 text-center text-lg font-semibold'>
                            <div>
                                <h4 className='font-italic text-2xl text-white'>Industry</h4>
                                <p className='text-amber-300'>Logistics/Delivery</p>
                            </div>
                            <span className='text-amber-300'>|</span>
                            <div>
                                <h4 className='font-italic text-2xl text-white'>Duration</h4>
                                <p className='text-amber-300'>2 Months</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Charts and Table Section */}
              /* <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12'>
                    
                    {/* Delivery Performance Chart */}
                  /*  <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20'>
                        <div className='flex items-center gap-3 mb-4'>
                            <TrendingUp className='w-6 h-6 text-amber-300' />
                            <h3 className='text-xl font-bold text-white'>Monthly Growth</h3>
                        </div>
                        <div className='h-48'>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={deliveryData}>
                                    <XAxis dataKey="month" tick={{ fill: '#e5e7eb', fontSize: 12 }} />
                                    <YAxis tick={{ fill: '#e5e7eb', fontSize: 12 }} />
                                    <Bar dataKey="deliveries" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        <p className='text-gray-300 text-sm mt-2'>67% increase in delivery volume</p>
                    </div>

                    {/* Service Distribution Chart */}
                    /*<div className='bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20'>
                        <div className='flex items-center gap-3 mb-4'>
                            <Package className='w-6 h-6 text-amber-300' />
                            <h3 className='text-xl font-bold text-white'>Service Mix</h3>
                        </div>
                        <div className='h-48'>
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={serviceData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={40}
                                        outerRadius={80}
                                        dataKey="value"
                                    >
                                        {serviceData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className='flex justify-center gap-4 mt-2'>
                            {serviceData.map((item, index) => (
                                <div key={index} className='flex items-center gap-2'>
                                    <div className='w-3 h-3 rounded-full' style={{backgroundColor: item.color}}></div>
                                    <span className='text-gray-300 text-sm'>{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Key Metrics Table */}
                   /* <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 xl:col-span-1 lg:col-span-2 xl:col-span-1'>
                        <div className='flex items-center gap-3 mb-4'>
                            <Shield className='w-6 h-6 text-amber-300' />
                            <h3 className='text-xl font-bold text-white'>Key Metrics</h3>
                        </div>
                        <div className='space-y-3'>
                            {projectMetrics.map((item, index) => (
                                <div key={index} className='flex justify-between items-center py-2 border-b border-white/10 last:border-b-0'>
                                    <span className='text-gray-300 text-sm font-medium'>{item.metric}</span>
                                    <div className='flex items-center gap-2'>
                                        <span className='text-red-300 text-xs line-through'>{item.before}</span>
                                        <span className='text-green-300 text-sm font-semibold'>{item.after}</span>
                                        <span className='text-amber-300 text-xs bg-amber-300/20 px-2 py-1 rounded-full'>
                                            {item.improvement}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Results Summary */}
               /* <div className='bg-gradient-to-r from-amber-600/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-8 border border-amber-300/30'>
                    <div className='text-center'>
                        <h3 className='text-2xl font-bold text-white mb-4'>Project Impact</h3>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                            <div className='text-center'>
                                <div className='text-3xl font-bold text-amber-300 mb-2'>96%</div>
                                <div className='text-gray-300 text-sm'>Delivery Success</div>
                            </div>
                            <div className='text-center'>
                                <div className='text-3xl font-bold text-amber-300 mb-2'>2M+</div>
                                <div className='text-gray-300 text-sm'>Packages Handled</div>
                            </div>
                            <div className='text-center'>
                                <div className='text-3xl font-bold text-amber-300 mb-2'>50+</div>
                                <div className='text-gray-300 text-sm'>Countries Served</div>
                            </div>
                            <div className='text-center'>
                                <div className='text-3xl font-bold text-amber-300 mb-2'>24/7</div>
                                <div className='text-gray-300 text-sm'>Support Available</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


    

export default Charts

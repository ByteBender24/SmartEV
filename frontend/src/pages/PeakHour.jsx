import React from 'react'

const PeakHour = () => {
  return (
    <div>
        <Navbar/>
    
        <div className="bg-white py-24 sm:py-32">
            div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    <div key={1} className="mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt className="text-base/7 text-gray-600">Peak Demand</dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                            450
                        </dd>
                    </div>
                </dl>
        </div>
    </div>
  );
}

export default PeakHour;

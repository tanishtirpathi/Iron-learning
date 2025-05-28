import React from 'react';
import LineChart from '../pages/Chart';

function FIve() {
  return (
    <div style={{ backgroundColor: '#f0f8ff', minHeight: '60vh', padding: '1rem' }} className='flex flex-col justify-center items-center'>
        <h3 className='text-xl font-semibold text-[#0e1624] underline cursor-pointer'>Views on the jarvis project</h3>
      <LineChart />
    </div>
  );
}

export default FIve;

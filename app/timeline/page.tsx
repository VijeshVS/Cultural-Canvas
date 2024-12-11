"use client";
import TimelineComponent from '@/components/custom/Timeline';
import React from 'react';

const page = () => {
  return (
    <div className="flex pt-36 min-h-screen flex-col px-24 items-center">
      <h1 className='text-4xl text-[#4d1414] font-semibold mb-2'>Timeline</h1>
      <TimelineComponent />
    </div>
  );
}

export default page;
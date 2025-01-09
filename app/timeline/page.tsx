"use client";

import { useRouter } from "next/navigation";
import timelineData from "./global_timeline.json";
import { useState } from "react";

const TimelinePage = () => {
  const [selectedState, setSelectedState] = useState<string | null>(null);

  const handleStateSelection = (stateSlug: string) => {
    setSelectedState(stateSlug);
  };

  const handleBackToSelection = () => {
    setSelectedState(null);
  };

  if (!timelineData || Object.keys(timelineData).length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold text-[#4d1414] mb-8">
          No timeline data available.
        </h1>
        <p className="text-lg text-[#4d1414]">
          Please check back later for more interesting historical timelines!
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col pt-36 px-24 items-center">
      <div className="h-[65vh] overflow-scroll scrollbar-hide flex flex-col items-center">
        {/* Header */}
        <h1 className="text-4xl font-bold text-[#4d1414] mb-12 text-center">
          {!selectedState ? "" : `${selectedState} Timeline`}
        </h1>

        {/* State Selection */}
        {!selectedState ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 h-[60vh] overflow-scroll scrollbar-thin scrollbar-thumb-blue-300">
            {Object.keys(timelineData).map((stateSlug) => (
              <button
                key={stateSlug}
                onClick={() => handleStateSelection(stateSlug)}
                className="w-64 h-36 bg-blue-50 border-2 border-blue-600 text-[#4d1414] font-bold rounded-lg shadow-md hover:shadow-lg hover:bg-blue-100 transition-all relative overflow-hidden"
              >
                <span className="relative z-10">
                  {stateSlug.charAt(0).toUpperCase() + stateSlug.slice(1)}
                </span>
              </button>
            ))}
          </div>
        ) : (
          // Timeline Display
          <div className="w-full px-6 md:px-20 lg:px-40">
            <button
              onClick={handleBackToSelection}
              className="mb-6 px-4 py-2 bg-blue-50 text-blue-600 font-medium rounded-md shadow-sm hover:bg-blue-100 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition"
            >
              ← Back
            </button>
            <div className="space-y-8">
              {timelineData[selectedState]?.map(
                ({ year, content, image }, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row items-center gap-6 border-b border-gray-300 pb-6"
                  >
                    {/* Year */}
                    <div className="text-xl font-semibold text-blue-800 md:w-1/4">
                      {year > 0 ? `${year} CE` : `${Math.abs(year)} BCE`}
                    </div>

                    {/* Image */}
                    <div className="md:w-1/4">
                      <img
                        src={image}
                        alt={`Image for year ${year}`}
                        className="w-full h-36 object-cover rounded-lg shadow-md"
                      />
                    </div>

                    {/* Content */}
                    <div className="md:w-1/2 text-[#4d1414]">{content}</div>
                  </div>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelinePage;

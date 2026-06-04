import React from "react";

export default function SetupGuideHeader({ deviceIcons, activeDevice, setActiveDevice }) {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-4 max-w-5xl mx-auto">
      {/* Steps Section */}
      <div className="bg-white rounded-xl px-4 py-3 flex flex-nowrap items-center gap-3">
        {/* Step 1 */}
        <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-base">1</span>
        <span className="text-gray-900 text-base font-semibold">Identify</span>
        <span className="text-gray-400 text-lg mx-1"><i className="fa-solid fa-chevron-right"></i></span>
        {/* Step 2 */}
        <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-base">2</span>
        <span className="text-gray-900 text-base font-semibold">Download</span>
        <span className="text-gray-400 text-lg mx-1"><i className="fa-solid fa-chevron-right"></i></span>
        {/* Step 3 */}
        <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-base">3</span>
        <span className="text-gray-900 text-base font-semibold">Install</span>
      </div>

      {/* Device Selector */}
      <div className="bg-white rounded-xl px-4 py-2 flex flex-col md:flex-row items-center md:gap-6 gap-2 text-center w-full md:w-auto">
        <span className="text-base font-semibold w-full text-gray-900 mb-1 md:mb-0 md:w-auto md:mr-2">Select a different product type:</span>
        <div className="flex flex-row justify-center items-center gap-3 w-full md:w-auto mt-0.5">
          {deviceIcons.map((icon, idx) => (
            <span
              key={icon.alt}
              onClick={() => setActiveDevice(idx)}
              className={`flex-shrink-0 rounded-full p-2 cursor-pointer transition-all duration-200
                ${activeDevice === idx
                  ? "bg-blue-600 scale-105"
                  : "bg-gray-100 hover:bg-blue-50 hover:scale-105"
                }`}
              style={{ position: 'relative', zIndex: 1 }}
            >
              <img src={icon.src} alt={icon.alt} className={`w-5 h-5 sm:w-6 sm:h-6 z-10 relative ${activeDevice === idx ? 'invert brightness-200' : ''}`} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
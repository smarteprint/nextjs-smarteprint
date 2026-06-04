import React from "react";

export default function SupportExpertSection({
  title = "Still Need Help with 123 Hp Com Setup, Offline Fix & Troubleshooting?",
  subtitle = "If you're still facing issues after completing these steps, our certified support team is ready to help. Connect with our online experts for real-time troubleshooting, personalized guidance, and fast solutions to get your printer running perfectly again.",
  buttonText = "Click for Live Chat Assistance",
  onButtonClick,
  image = "/contttt.webp"
}) {
  const handleButtonClick = () => {
    if (typeof onButtonClick === 'function') {
      onButtonClick();
      return;
    }

    if (window.jivo_api && typeof window.jivo_api.open === 'function') {
      window.jivo_api.open();
    } else {
      alert('Chat support is not available yet.');
    }
  };

  return (
    <section className="w-full max-w-5xl mx-auto px-2 sm:px-4 py-8">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-white rounded-2xl border border-gray-200 shadow-sm px-6 py-8 sm:px-10 sm:py-10">

        {/* Left Content */}
        <div className="flex-1 text-left">
          <h3 className="font-bold text-blue-700 text-sm sm:text-base md:text-lg  mb-4 leading-snug">
            {title}
          </h3>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 max-w-lg">
            {subtitle}
          </p>

          <button
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base shadow-md hover:shadow-lg active:scale-95 transition-all duration-200 focus:ring-4 focus:ring-blue-200/40 focus:outline-none"
            onClick={handleButtonClick}
          >
            {buttonText}
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex items-center justify-center w-full">
          <div className="w-full max-w-[320px] sm:max-w-[380px] h-[200px] sm:h-[260px] md:h-[300px] rounded-2xl overflow-hidden">
            <img
              src={image}
              alt="24/7 Live Chat Assistance"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
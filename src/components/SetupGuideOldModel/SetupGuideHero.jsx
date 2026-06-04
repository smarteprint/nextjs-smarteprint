"use client";
import React, { useEffect } from "react";
import Link from 'next/link';

export default function SetupGuideHero({
  title = "Easy Printer Setup",
  subtitle = "Start your printer installation in minutes.",
  description = "Follow the step-by-step 123 hp com setup and installation guide to download drivers, configure Wi-Fi, and bring your printer back online instantly.",
  buttonText = "Click Here for Printer Setup",
  buttonLink = "/",
  carouselImages = [],
  carouselIdx = 0,
  onPrev,
  onNext
}) {
  // Auto-advance carousel every 2 seconds
  useEffect(() => {
    if (!carouselImages || carouselImages.length <= 1) return;
    const interval = setInterval(() => {
      onNext && onNext();
    }, 2000);
    return () => clearInterval(interval);
  }, [carouselImages, onNext]);

  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-12 p-10 bg-white rounded-3xl border border-gray-100 max-w-5xl mx-auto">
      {/* Left Content */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">{title}</h1>
        <p className="text-lg text-gray-700 mb-3">{subtitle}</p>
        <p className="text-base text-gray-500 mb-7 max-w-md mx-auto md:mx-0">{description}</p>
        <Link href={buttonLink}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3 rounded-xl transition-colors"
        >
          {buttonText}
        </Link>
      </div>
      {/* Right Carousel */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-full max-w-xs flex items-center justify-center">
          {/* Prev Button */}
          <button
            className="absolute left-0 text-lg text-blue-600 bg-white rounded-full w-9 h-9 flex items-center justify-center border border-gray-200 hover:bg-blue-50 transition-colors"
            aria-label="Previous image"
            onClick={onPrev}
            style={{ left: '-20px' }}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          {/* Image */}
          {carouselImages.length > 0 && (
            <div className="w-full aspect-[4/3] flex items-center justify-center rounded-xl overflow-hidden bg-white border border-gray-100">
              <img
                src={carouselImages[carouselIdx]}
                alt="Printer Carousel"
                className="w-full h-full object-contain"
                style={{objectFit: 'contain', width: '100%', height: '100%', display: 'block'}}
              />
            </div>
          )}
          {/* Next Button */}
          <button
            className="absolute right-0 text-lg text-blue-600 bg-white rounded-full w-9 h-9 flex items-center justify-center border border-gray-200 hover:bg-blue-50 transition-colors"
            aria-label="Next image"
            onClick={onNext}
            style={{ right: '-20px' }}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
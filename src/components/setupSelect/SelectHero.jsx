import React from 'react';
import Link from 'next/link';

import { FaPrint } from "react-icons/fa";
import { FaScrewdriverWrench } from "react-icons/fa6";

const SelectHero = () => {
  return (
    <section
      className="flex flex-col items-center justify-center text-center min-h-[320px] w-full px-2 relative overflow-hidden"
      style={{ height: '320px', width: '100%' }}
    >
      <picture>
        <source srcSet="/hero_background_image.webp" type="image/webp" />
        <img
          src="/hero_background_image.webp"
          alt="123.hp.com/setup | HP Printer Setup, Offline Fix & Troubleshooting"
          width="1920"
          height="320"
          fetchPriority="high"
          decoding="async"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            zIndex: 0
          }}
        />
      </picture>

      <h2 className="relative z-10 text-white text-3xl sm:text-4xl md:text-5xl font-extrabold mt-8 mb-4 drop-shadow leading-tight whitespace-nowrap">
        Smart Printer Setup&nbsp;
        <br className="block sm:hidden" />
        & Troubleshooting
      </h2>

      <p className="relative z-10 text-gray-200 text-base sm:text-lg md:text-xl mb-4 sm:mb-6 max-w-xl mx-auto">
        Set Up & Troubleshoot Your Printer in Minutes
      </p>

      <div className="relative z-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-2">

  <Link href="/model-search/"
    className="inline-flex items-center justify-center bg-[#22C55E] text-white font-medium text-base leading-[1.6em] uppercase px-5 py-[5px] rounded-full hover:bg-[#22C55E] transition-all duration-300 whitespace-nowrap"
  >
    <FaPrint className="mr-2 text-base" />
    Quick Setup
  </Link>

  <Link href="/model-search/"
    className="inline-flex items-center justify-center bg-[#22C55E] text-white font-medium text-base leading-[1.6em] uppercase px-5 py-[5px] rounded-full hover:bg-[#22C55E] transition-all duration-300 whitespace-nowrap"
  >
    <FaScrewdriverWrench className="mr-2 text-base" />
    Easy Troubleshooting
  </Link>

</div>
    </section>
  );
};

export default SelectHero;
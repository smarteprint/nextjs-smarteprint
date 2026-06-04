"use client";
import SEO from '../common/SEO';
import SetupGuideHeader from "./SetupGuideHeader";
import QuickActionCard from "./QuickActionCard";
import SetupGuideHero from "./SetupGuideHero";
import SupportExpertSection from "./SupportExpertSection";
import React, { useState } from "react";

import Link from 'next/link';

import FooterSetupGuide from "./FooterSetupGuide";

const carouselImages = [
    "/assets/setupguide/slide-1.png",
    "/assets/setupguide/slide-2.png"
];

const deviceIcons = [
    { src: "/assets/setupguide/printer.svg", alt: "Printer Icon" },
    { src: "/assets/setupguide/laptop.svg", alt: "Laptop Icon" },
    { src: "/assets/setupguide/desktop.svg", alt: "Desktop Icon" },
    { src: "/assets/setupguide/mobile.svg", alt: "Mobile Icon" }
];

const SetupGuide1 = () => {
    const [carouselIdx, setCarouselIdx] = useState(0);
    const [activeDevice, setActiveDevice] = useState(0);
    // Modal state for step details
    const [modalOpen, setModalOpen] = useState(false);
    const [modalStep, setModalStep] = useState(null);

    const handleCarousel = (dir) => {
        setCarouselIdx((prev) => (prev + dir + carouselImages.length) % carouselImages.length);
    };

    // Step data for quick start cards (updated as per user request)
    const stepCards = [
        {
            img: "/assets/setupguide/download.jpg",
            title: "Download the Latest Software",
            desc: "Get the latest printer drivers and software designed for optimal performance and compatibility. Always download the official version to ensure smooth installation and reliable printing results."
        },
        {
            img: "/assets/setupguide/connect.jpg",
            title: "Connect Your Printer",
            desc: "Connect your printer via USB cable or Wi-Fi network using the printer’s setup options. For wireless connections, make sure your printer and device are on the same network before proceeding."
        },
        {
            img: "/assets/setupguide/install.jpg",
            title: "Install the Printer Drivers",
            desc: "Run the downloaded setup file and follow the on-screen instructions to install the required drivers. This ensures your printer communicates correctly with your computer or mobile device."
        },
        {
            img: "/assets/setupguide/test.jpg",
            title: "Test the Printer",
            desc: "Once installation is complete, print a test page to confirm that your printer is working properly. Adjust settings as needed for the best print quality and performance."
        }
    ];

    return (
        <>
            <SEO title="Step-by-Step HP Printer Setup Guide" description="Follow the 123 HP Com setup guide for easy, step-by-step printer installation and troubleshooting." canonical="/step-by-step-setup-guide/" />
            <div className="relative min-h-screen overflow-x-hidden bg-white">
           
            <hr />
            <main className="relative w-full max-w-5xl mx-auto px-2 sm:px-4 animate-fade-in z-10">
                

              

                {/* Fast & Simple 123 Hp Com Printer Setup Guide */}
                <section className="w-full max-w-5xl mx-auto px-2 sm:px-4 py-4 sm:py-8">
                    <div className="info-box-header text-center fade-in delay-3 mb-4 sm:mb-8">
                        <h1 className="font-extrabold text-xl sm:text-3xl md:text-4xl m-0 text-[#101721] leading-tight">
                            Fast & Simple 123 Hp Com Printer Setup Guide
                        </h1>
                        <p className="text-black text-sm sm:text-base md:text-lg font-semibold leading-relaxed mt-3 max-w-4xl mx-auto">
                            Start your 123 Hp Com Setup (123.hp.com/setup) right here. Check out our streamlined guide walks you through downloading drivers and connecting to Wi-Fi to ensure your new or existing printer is configured and ready to print without the hassle.
                        </p>
                    </div>
                </section>

                {/* Quick Start Cards: 1 per row on mobile, 2 on sm, 4 on md+ */}
                <section className="quick-start-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 px-2 sm:px-4 mb-6">
                    {stepCards.map((step, idx) => (
                        <div
                            key={step.title}
                            className="relative w-full flex flex-col overflow-hidden rounded-2xl bg-[#f6eced] shadow-sm"
                        >
                            <img
                                src={step.img}
                                className="w-full h-40 sm:h-44 object-cover rounded-t-2xl"
                                alt={step.alt}
                            />
                            <div className="px-4 pt-4 pb-5 flex-1 flex flex-col justify-start w-full">
                                <h3 className="font-extrabold text-blue-800 text-base sm:text-lg mb-2 text-center leading-snug">
                                    {step.title}
                                </h3>
                                <p className="text-black text-xs sm:text-sm leading-relaxed text-center flex-1 m-0">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Red Banner */}
                <section className="w-full max-w-5xl mx-auto px-2 sm:px-4 mb-6">
                    <div className="bg-white text-red-600 text-center rounded-xl px-4 py-4 sm:px-8 sm:py-5">
                        <p className="text-sm sm:text-base md:text-lg font-bold leading-relaxed m-0">
                            Your 123 hp com setup (123.hp.com/setup) doesn't have to be complicated. Follow this detailed guide to install, connect, and configure your device successfully. Each step includes visual guidance and expert troubleshooting tips to ensure your printer is running smoothly in minutes.
                        </p>
                    </div>
                </section>

                {/* 123.hp.com/setup – Easy HP Printer Setup and Installation */}
                <section className="w-full max-w-5xl mx-auto px-2 sm:px-4 mb-6">
                    <div className="bg-[#f6eced] rounded-2xl border-l-4 border-blue-700 px-5 py-5 sm:px-8 sm:py-7 shadow-sm">
                        <h2 className="text-blue-800 font-bold  text-base sm:text-lg md:text-xl mb-4">
                            123.hp.com/setup – Easy HP Printer Setup and Installation
                        </h2>

                        <h3 className="font-extrabold text-black text-lg sm:text-xl md:text-2xl mt-4 mb-2">Step 1: Unbox & Prepare the Printer</h3>
                        <ul className="list-disc pl-6 text-black text-sm sm:text-base space-y-1 mb-4">
                            <li>Remove all protective tapes, packaging materials, and internal locks</li>
                            <li>Open cartridge access door and remove safety covers</li>
                            <li>Load plain white paper into the input tray</li>
                        </ul>

                        <h3 className="font-extrabold text-black text-lg sm:text-xl md:text-2xl mt-6 mb-2">Step 2: Power On & Initial Settings</h3>
                        <ul className="list-disc pl-6 text-black text-sm sm:text-base space-y-1 mb-4">
                            <li>Plug the printer directly into a wall outlet</li>
                            <li>Turn ON the printer</li>
                            <li>Select <span className="font-semibold">language, region, and preferences</span> on the display panel</li>
                        </ul>

                        <h3 className="font-extrabold text-black text-lg sm:text-xl md:text-2xl mt-6 mb-2">Step 3: Install Ink Cartridges</h3>
                        <ul className="list-disc pl-6 text-black text-sm sm:text-base space-y-1 mb-4">
                            <li>Insert the <span className="font-semibold">setup ink cartridges</span> provided in the box</li>
                            <li>Close the lid and wait for initialization</li>
                            <li>Print and scan the alignment page if prompted</li>
                        </ul>

                        <h3 className="font-extrabold text-black text-lg sm:text-xl md:text-2xl mt-6 mb-2">Step 4: Connect to Wi-Fi Network</h3>
                        <ul className="list-disc pl-6 text-black text-sm sm:text-base space-y-1 mb-4">
                            <li>Go to <span className="font-semibold">Wireless Settings</span> on the printer</li>
                            <li>Select your Wi-Fi network name (SSID)</li>
                            <li>Enter your password</li>
                            <li>Ensure the <span className="font-semibold">blue wireless light is stable (not blinking)</span></li>
                        </ul>

                        <h3 className="font-extrabold text-black text-lg sm:text-xl md:text-2xl mt-6 mb-2">Step 5: Download Software from 123.hp.com/setup</h3>
                        <ul className="list-disc pl-6 text-black text-sm sm:text-base space-y-1 mb-4">
                            <li>Open browser and go to <span className="font-semibold">123.hp.com/setup</span></li>
                            <li>Enter your printer model</li>
                            <li>Download <span className="font-semibold">HP Smart App or Full Feature Driver</span></li>
                        </ul>

                        <h3 className="font-extrabold text-black text-lg sm:text-xl md:text-2xl mt-6 mb-2">Step 6: Complete Installation</h3>
                        <ul className="list-disc pl-6 text-black text-sm sm:text-base space-y-1">
                            <li>Run the installer</li>
                            <li>Follow on-screen instructions</li>
                            <li>Select your printer when detected</li>
                            <li>Print a test page to confirm setup</li>
                        </ul>
                    </div>
                </section>

                {/* Fix HP Printer Offline Issue (Quick Solutions) */}
                <section className="w-full max-w-5xl mx-auto px-2 sm:px-4 mb-6">
                    <div className="bg-[#f6eced] rounded-2xl border-l-4 border-blue-700 px-5 py-5 sm:px-8 sm:py-7 shadow-sm">
                        <h2 className="text-blue-800 font-bold text-base sm:text-lg md:text-xl mb-3">
                            Fix HP Printer Offline Issue (Quick Solutions)
                        </h2>
                        <p className="text-black text-sm sm:text-base leading-relaxed mb-4">
                            If your printer shows <span className="font-semibold">"HP Printer Offline"</span>, it means your device is not communicating with your computer. Use these proven fixes:
                        </p>

                        <h3 className="font-extrabold text-black text-lg sm:text-xl md:text-2xl mt-4 mb-2">Step 1: Check Printer Connection</h3>
                        <ul className="list-disc pl-6 text-black text-sm sm:text-base space-y-1 mb-4">
                            <li>Ensure printer is powered ON</li>
                            <li>Verify Wi-Fi light is <span className="font-semibold">solid blue</span></li>
                            <li>Reconnect to the same network as your computer</li>
                        </ul>

                        <h3 className="font-extrabold text-black text-lg sm:text-xl md:text-2xl mt-6 mb-2">Step 2: Set Printer as Default</h3>
                        <ul className="list-disc pl-6 text-black text-sm sm:text-base space-y-1 mb-4">
                            <li>Open <span className="font-semibold">Control Panel → Devices & Printers</span></li>
                            <li>Right-click your HP printer</li>
                            <li>Click <span className="font-semibold">Set as Default Printer</span></li>
                            <li>Uncheck <span className="font-semibold">Use Printer Offline</span></li>
                        </ul>

                        <h3 className="font-extrabold text-black text-lg sm:text-xl md:text-2xl mt-6 mb-2">Step 3: Restart Devices (Power Cycle)</h3>
                        <ul className="list-disc pl-6 text-black text-sm sm:text-base space-y-1 mb-4">
                            <li>Turn OFF the printer.</li>
                            <li>Unplug router for 30 seconds</li>
                            <li>Restart the computer.</li>
                            <li>Turn everything back ON</li>
                        </ul>

                        <h3 className="font-extrabold text-black text-lg sm:text-xl md:text-2xl mt-6 mb-2">Step 4: Clear Print Queue</h3>
                        <ul className="list-disc pl-6 text-black text-sm sm:text-base space-y-1 mb-4">
                            <li>Open printer queue</li>
                            <li>Cancel all pending print jobs</li>
                            <li>Restart printing</li>
                        </ul>

                        <h3 className="font-extrabold text-black text-lg sm:text-xl md:text-2xl mt-6 mb-2">Step 5: Assign Static IP (Advanced Fix)</h3>
                        <ul className="list-disc pl-6 text-black text-sm sm:text-base space-y-1">
                            <li>Print Network Configuration Page</li>
                            <li>Enter printer IP in the browser.</li>
                            <li>Set <span className="font-semibold">manual/static IP</span> to prevent disconnects</li>
                        </ul>
                    </div>
                </section>

                {/* HP Printer Troubleshooting Guide (Common Errors) */}
                <section className="w-full max-w-5xl mx-auto px-2 sm:px-4 mb-6">
                    <div className="bg-[#f6eced] rounded-2xl border-l-4 border-blue-700 px-5 py-5 sm:px-8 sm:py-7 shadow-sm">
                        <h2 className="text-blue-800 font-bold text-base sm:text-lg md:text-xl mb-3">
                            HP Printer Troubleshooting Guide (Common Errors)
                        </h2>
                        <p className="text-black text-sm sm:text-base leading-relaxed mb-4">
                            If your printer is installed but not working properly, follow these troubleshooting steps:
                        </p>

                        <h3 className="font-extrabold text-black text-lg sm:text-xl md:text-2xl mt-4 mb-2">1. Print Quality Issues</h3>
                        <ul className="list-disc pl-6 text-black text-sm sm:text-base space-y-1 mb-4">
                            <li>Use <span className="font-semibold">Clean Printhead utility</span></li>
                            <li>Replace low or empty cartridges</li>
                            <li>Align printer for better output</li>
                        </ul>

                        <h3 className="font-extrabold text-black text-lg sm:text-xl md:text-2xl mt-6 mb-2">2. Printer Not Printing</h3>
                        <ul className="list-disc pl-6 text-black text-sm sm:text-base space-y-1 mb-4">
                            <li>Check paper tray and ink levels</li>
                            <li>Ensure printer is not paused</li>
                            <li>Restart printer and computer</li>
                        </ul>

                        <h3 className="font-extrabold text-black text-lg sm:text-xl md:text-2xl mt-6 mb-2">3. Print Spooler Error</h3>
                        <ul className="list-disc pl-6 text-black text-sm sm:text-base space-y-1 mb-4">
                            <li>Press <span className="font-semibold">Windows + R</span> → type services.msc</li>
                            <li>Locate <span className="font-semibold">Print Spooler</span></li>
                            <li>Click <span className="font-semibold">Restart</span></li>
                        </ul>

                        <h3 className="font-extrabold text-black text-lg sm:text-xl md:text-2xl mt-6 mb-2">4. Driver Issues After OS Update</h3>
                        <ul className="list-disc pl-6 text-black text-sm sm:text-base space-y-1 mb-4">
                            <li>Visit <span className="font-semibold">123.hp.com/setup</span></li>
                            <li>Download latest compatible drivers</li>
                            <li>Reinstall software</li>
                        </ul>

                        <h3 className="font-extrabold text-black text-lg sm:text-xl md:text-2xl mt-6 mb-2">5. Scanner Not Working</h3>
                        <ul className="list-disc pl-6 text-black text-sm sm:text-base space-y-1">
                            <li>Enable <span className="font-semibold">Scan to Computer</span> in HP Smart App</li>
                            <li>Update drivers</li>
                            <li>Check USB/Wi-Fi connection</li>
                        </ul>
                    </div>
                </section>

                <SupportExpertSection />

            </main>

  
        </div>
        </>
    );
};

export default SetupGuide1;

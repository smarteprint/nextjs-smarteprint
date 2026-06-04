"use client";
import SEO from '../common/SEO';
import SetupGuideHeader from "./SetupGuideHeader";
import React, { useState } from "react";

import Link from 'next/link';

import SetupGuideHero from "./SetupGuideHero";
import QuickActionCard from "./QuickActionCard";
import SupportExpertSection from "./SupportExpertSection";
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

const SetupGuide2 = () => {
    const [carouselIdx, setCarouselIdx] = useState(0);
    const [activeDevice, setActiveDevice] = useState(0);

    const handleCarousel = (dir) => {
        setCarouselIdx((prev) => (prev + dir + carouselImages.length) % carouselImages.length);
    };

    return (
        <>
            <SEO title="HP Printer Setup & Install Guide" description="Step-by-step HP printer setup and installation instructions for all models." canonical="/hp-printer-setup-install" />
            <div className="relative min-h-screen overflow-x-hidden bg-white">
                <header>
                    <div className="w-full max-w-5xl mx-auto px-4">
                        <SetupGuideHeader deviceIcons={deviceIcons} activeDevice={activeDevice} setActiveDevice={setActiveDevice} />
                    </div>
                </header>
                <hr />
                <main className="relative w-full max-w-5xl mx-auto px-2 sm:px-4 animate-fade-in z-10">
                    <div className="w-full flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-center py-6 sm:py-10 md:py-12">
                        <div className="flex-1 w-full">
                            <SetupGuideHero
                                title="Printer Setup & Install"
                                subtitle="Quick and simple installation process."
                                description={
                                    <>Complete your HP printer setup & install with easy instructions. Learn how to configure your printer, install drivers, connect via Wi-Fi or USB, and start printing without delays.</>
                                }
                                buttonText="Start Printer Setup & Install"
                                buttonLink="/"
                                carouselImages={carouselImages}
                                carouselIdx={carouselIdx}
                                onPrev={() => handleCarousel(-1)}
                                onNext={() => handleCarousel(1)}
                            />
                        </div>
                    </div>

                    <section className="py-8 fade-in delay-2 mt-0">
                        <div
                            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full max-w-5xl mx-auto pb-2"
                        >
                            <QuickActionCard
                                icon={<img src="/assets/setupguide/printersetup.svg" className="w-12 h-12 lg:w-16 lg:h-16 mb-2" />}
                                label="Printer Setup & Install"
                            />
                            <QuickActionCard
                                icon={<img src="/assets/setupguide/printeroffline.svg" className="w-12 h-12 lg:w-16 lg:h-16 mb-2" />}
                                label="Fix Printer Offline Issues"
                            />
                            <QuickActionCard
                                icon={<img src="/assets/setupguide/wirelessprinterissues.svg" className="w-12 h-12 lg:w-16 lg:h-16 mb-2" />}
                                label="Fix Wi-Fi & Driver Problems"
                            />
                            <QuickActionCard
                                icon={<img src="/assets/setupguide/paperjamissues.svg" className="w-12 h-12 lg:w-16 lg:h-16 mb-2" />}
                                label="Fix Paper Jam Errors"
                            />
                            <QuickActionCard
                                icon={<img src="/assets/setupguide/printersetup.svg" className="w-12 h-12 lg:w-16 lg:h-16 mb-2" />}
                                label="Update Printer Driver"
                            />
                            <QuickActionCard
                                icon={<img src="/assets/setupguide/scannerissues.svg" className="w-12 h-12 lg:w-16 lg:h-16 mb-2" />}
                                label="Fix Scanner Issue"
                            />
                        </div>
                    </section>
                {/* SEO Content for 123 HP Com Setup */}
                {/* Meta Tags (for reference, add to HTML head if needed) */}
                {/*
                                <meta name="keywords" content="123 hp com setup" />
                                <title>123 HP Com Setup Guide | Step-by-Step HP Printer Setup</title>
                                <meta name="description" content="Learn how to complete 123 HP com setup with step-by-step instructions for printer installation, Wi-Fi connection, driver download, and first-time setup." />
                                */}
                <section className="w-full max-w-5xl mx-auto px-4 py-8">
                    {/* HP Printer Setup & Install Card */}
                  

                    

                    <section className="w-full max-w-5xl mx-auto px-2 sm:px-4 py-4 sm:py-8">
                        {/* Static informational cards (not dropdowns) */}
                        <div className="fade-in delay-4 bg-white border border-blue-100 shadow-sm px-2 sm:px-4 py-4 sm:py-6 mb-6 rounded-2xl transition-all duration-300 max-w-5xl mx-auto">
                            <h1 className="text-blue-900 font-extrabold text-xl sm:text-3xl md:text-4xl m-0 leading-tight">HP Printer Setup & Install – Complete Guide for First-Time Installation</h1>
                            <p className="text-black text-xs sm:text-sm md:text-base font-normal leading-relaxed mt-2">
                                If you are searching for <b>hp printer setup & install</b>, you most likely want a complete guide that explains how to prepare your printer, connect it to your device, install the correct software, and start using it without confusion.<br /><br />
                                Printer installation is not only about turning the device on and downloading a driver. A successful setup includes physical preparation, connection setup, software installation, system detection, and a final test to confirm everything is working as expected.<br /><br />
                                This page is written as a complete standalone installation guide for users who want a clear and detailed explanation from start to finish.
                            </p>
                        </div>
                        <div className="fade-in delay-4 bg-white border border-blue-100 shadow-sm px-2 sm:px-4 py-4 sm:py-6 mb-6 rounded-2xl transition-all duration-300 max-w-5xl mx-auto">
                            <h2 className="text-blue-900 font-bold text-lg sm:text-xl md:text-2xl m-0 leading-tight">Understanding HP Printer Setup and Installation</h2>
                            <p className="text-black text-xs sm:text-sm md:text-base font-normal leading-relaxed mt-2">
                                Printer setup and printer installation are closely related, but they are not exactly the same thing.<br />
                                <b>Printer setup</b> usually refers to preparing the hardware, adding cartridges, loading paper, connecting the printer to Wi-Fi or USB, and completing the printer’s on-device configuration.<br />
                                <b>Printer installation</b> usually refers to adding the printer to a computer, downloading the correct software, installing the driver, and enabling print and scan functions.<br />
                                A good landing page for this keyword should cover both, because users searching <b>hp printer setup & install</b> generally want the complete process, not just one part of it.
                            </p>
                        </div>
                        <div className="fade-in delay-4 bg-white border border-blue-100 shadow-sm px-2 sm:px-4 py-4 sm:py-6 mb-6 rounded-2xl transition-all duration-300 max-w-5xl mx-auto">
                            <h2 className="text-blue-900 font-bold text-lg sm:text-xl md:text-2xl m-0 leading-tight">Choose the Right Installation Method Before You Begin</h2>
                            <p className="text-black text-xs sm:text-sm md:text-base font-normal leading-relaxed mt-2">
                                Before you start, decide how you want to connect the printer. Most users choose between wireless setup and USB setup.
                            </p>
                            <h3 className="text-blue-900 font-bold text-sm sm:text-base mt-4">Wireless Setup</h3>
                            <p className="text-black text-xs sm:text-sm font-normal leading-relaxed mt-2">
                                Wireless setup is ideal for users who want to print from laptops, smartphones, or multiple devices in the same home or office. It gives more flexibility and avoids physical cable dependence.
                            </p>
                            <h3 className="text-blue-900 font-bold text-sm sm:text-base mt-4">USB Setup</h3>
                            <p className="text-black text-xs sm:text-sm font-normal leading-relaxed mt-2">
                                USB setup is often preferred when the printer is located close to a computer or when the network connection is unstable. It can also be helpful during first-time troubleshooting if wireless setup is failing.<br />
                                Knowing which method you want to use helps make the installation process smoother and more focused.
                            </p>
                        </div>
                        {/* Step-by-step 4D/modern animated accordion cards (only for actual steps) */}
                        {(() => {
                            const stepData = [
                                {
                                    title: 'Step 1: Prepare the Printer for Setup',
                                    details: (
                                        <>
                                            <p className="text-[#222] text-xs sm:text-sm md:text-base font-normal leading-relaxed mt-2">Start by unpacking the printer and removing all internal and external packaging materials. Place the printer on a stable surface and connect the power cable.<br />
                                                When the printer turns on for the first time, it usually prompts you to confirm basic preferences such as language and region. These settings are part of the setup process and should be completed before trying to install the software on your device.<br />
                                                You should also check that:</p>
                                            <ul className="list-disc pl-5 text-[#222] text-xs sm:text-sm md:text-base">
                                                <li>cartridges are ready to install</li>
                                                <li>paper is available</li>
                                                <li>your computer or mobile device is nearby</li>
                                                <li>you know the Wi-Fi password if doing wireless setup</li>
                                            </ul>
                                        </>
                                    )
                                },
                                {
                                    title: 'Step 2: Install Ink or Toner and Load Paper',
                                    details: (
                                        <>
                                            <p className="text-[#222] text-xs sm:text-sm md:text-base font-normal leading-relaxed mt-2">The next stage of <b>hp printer setup & install</b> is preparing the printer internally.<br />
                                                Open the cartridge access area and insert the setup cartridges or toner included with the device. Wait for the printer to recognize them and complete any automatic initialization.<br />
                                                After that, load plain white paper into the input tray. Some printers will print an alignment page automatically during first-time setup. This page may need to be scanned or confirmed depending on the printer model.<br />
                                                This stage is essential because incomplete cartridge installation or missing paper can interrupt the rest of the setup process.</p>
                                        </>
                                    )
                                },
                                {
                                    title: 'Step 3: Connect the Printer Using Wireless or USB',
                                    details: (
                                        <>
                                            <p className="text-[#222] text-xs sm:text-sm md:text-base font-normal leading-relaxed mt-2">Now it is time to connect the printer using your chosen setup method.</p>
                                            <h3 className="text-[#1565d8] font-bold text-sm sm:text-base mt-4">Wireless Connection Setup</h3>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">Use the printer control panel to open network settings and connect the printer to your Wi-Fi network. Enter the password carefully and wait until the connection is confirmed.<br />
                                                During wireless installation, make sure the computer or phone you are using is connected to the same network. If they are on different networks, the software may not detect the printer.</p>
                                            <h3 className="text-[#1565d8] font-bold text-sm sm:text-base mt-4">USB Connection Setup</h3>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">If you are using USB, connect the cable only when the installation software asks you to. Plugging it in too early can sometimes cause the system to install a generic driver instead of the intended software package.<br />
                                                The connection method you choose affects how the rest of the installation proceeds, so it is important to follow the right instructions for that method.</p>
                                        </>
                                    )
                                },
                                {
                                    title: 'Step 4: Download the Printer Driver and Software',
                                    details: (
                                        <>
                                            <p className="text-[#222] text-xs sm:text-sm md:text-base font-normal leading-relaxed mt-2">Printer software allows the operating system to communicate with the printer correctly. Without the right software, the printer might appear installed but not work properly for advanced features such as scanning, device status reporting, or wireless management.<br />
                                                The installation package typically includes:</p>
                                            <ul className="list-disc pl-5 text-[#222] text-xs sm:text-sm md:text-base">
                                                <li>print driver</li>
                                                <li>scan software</li>
                                                <li>printer utility tools</li>
                                                <li>device management options</li>
                                                <li>update tools</li>
                                            </ul>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">This step is one of the most important parts of the <b>hp printer setup & install</b> process because driver compatibility directly affects printer performance.<br />
                                                If possible, use the latest available version for your operating system so the printer can work smoothly with current Windows or macOS versions.</p>
                                        </>
                                    )
                                },
                                {
                                    title: 'Step 5: Run the Installer and Add the Printer',
                                    details: (
                                        <>
                                            <p className="text-[#222] text-xs sm:text-sm md:text-base font-normal leading-relaxed mt-2">After downloading the software, open the setup file and start the installation wizard.<br />
                                                The installer will usually ask you to:</p>
                                            <ul className="list-disc pl-5 text-[#222] text-xs sm:text-sm md:text-base">
                                                <li>accept terms</li>
                                                <li>choose connection type</li>
                                                <li>detect your printer</li>
                                                <li>confirm installation settings</li>
                                                <li>complete printer registration or optional configuration steps</li>
                                            </ul>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">If the printer is detected properly, continue until the setup is complete. If not, the software may offer troubleshooting steps such as checking the connection, restarting the printer, or trying a different method.<br />
                                                When the installation is successful, the printer should be added to your system and available in the print dialog for normal use.</p>
                                        </>
                                    )
                                },
                                {
                                    title: 'Step 6: Print a Test Page and Confirm Scanner Setup',
                                    details: (
                                        <>
                                            <p className="text-[#222] text-xs sm:text-sm md:text-base font-normal leading-relaxed mt-2">After installation, it is always a good idea to print a test page. This helps confirm:</p>
                                            <ul className="list-disc pl-5 text-[#222] text-xs sm:text-sm md:text-base">
                                                <li>the driver is installed correctly</li>
                                                <li>the printer can communicate with the computer</li>
                                                <li>paper handling is normal</li>
                                                <li>print output looks correct</li>
                                            </ul>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">If your printer also supports scanning, open the printer software or scanning utility and test a basic scan. This confirms that the installation is complete for both printing and scanning functions.<br />
                                                A test page is not just a final check. It also helps catch small issues before the printer is used for important documents.</p>
                                        </>
                                    )
                                }
                            ];
                            const [openStep, setOpenStep] = React.useState(null);
                            return (
                                <div className="space-y-4 pb-8">
                                    {stepData.map((step, idx) => (
                                        <div
                                            key={step.title}
                                            className="group relative bg-white border border-blue-100 shadow-sm transition-all duration-300 rounded-2xl overflow-hidden"
                                        >
                                            <button
                                                className="w-full flex items-center justify-between px-4 py-4 focus:outline-none cursor-pointer bg-transparent"
                                                onClick={() => setOpenStep(openStep === idx ? null : idx)}
                                                aria-expanded={openStep === idx}
                                                aria-controls={`step-details-${idx}`}
                                            >
                                                <span className="flex items-center gap-2">
                                                    <span className="font-extrabold text-blue-900 text-base sm:text-lg md:text-xl group-hover:text-blue-700 transition-colors duration-200">
                                                        {step.title}
                                                    </span>
                                                </span>
                                                <span className="ml-2 flex items-center justify-center w-8 h-8 rounded-full border-2 border-blue-200 bg-white shadow-md transition-transform duration-300 group-hover:scale-110">
                                                    <svg className={`w-5 h-5 text-blue-500 transition-transform duration-300 ${openStep === idx ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                                                </span>
                                            </button>
                                            <div
                                                id={`step-details-${idx}`}
                                                className={`transition-all duration-500 ease-in-out overflow-hidden ${openStep === idx ? 'max-h-[600px] opacity-100 py-2 px-4' : 'max-h-0 opacity-0 py-0 px-4'}`}
                                                aria-hidden={openStep !== idx}
                                            >
                                                <div className="animate-fade-in-fast">
                                                    {step.details}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            );
                        })()}
                        {/* Common HP Printer Installation Issues (static card) */}
                        <div className="fade-in delay-4 bg-white border border-blue-100 shadow-sm px-4 py-4 sm:px-8 sm:py-6 mb-6 rounded-2xl transition-all duration-300">
                            <div className="info-box-header mb-1">
                                <h2 className="text-blue-900 font-bold text-base sm:text-xl md:text-2xl m-0">Common HP Printer Installation Issues</h2>
                            </div>
                            <h3 className="text-blue-900 font-bold text-xs sm:text-base mt-2">Printer Software Cannot Find the Device</h3>
                            <p className="text-black text-xs sm:text-sm md:text-base font-normal leading-relaxed mt-1">This often happens when the network connection is incomplete, the printer is still initializing, or the computer is on another Wi-Fi network.</p>
                            <h3 className="text-blue-900 font-bold text-xs sm:text-base mt-2">USB Setup Does Not Continue</h3>
                            <p className="text-black text-xs sm:text-sm md:text-base font-normal leading-relaxed mt-1">Sometimes the USB cable is connected too early or the system tries to use a default driver. Restarting the installation and reconnecting the cable only when prompted usually helps.</p>
                            <h3 className="text-blue-900 font-bold text-xs sm:text-base mt-2">Driver Installed but Printing Does Not Work</h3>
                            <p className="text-black text-xs sm:text-sm md:text-base font-normal leading-relaxed mt-1">This may happen if the wrong printer is set as default, the connection is unstable, or the installation completed only partially.</p>
                            <h3 className="text-blue-900 font-bold text-xs sm:text-base mt-2">Scanner Feature Is Missing</h3>
                            <p className="text-black text-xs sm:text-sm md:text-base font-normal leading-relaxed mt-1">Some users install only a basic print driver. A more complete software package may be needed for scanning and device utility features.</p>
                        </div>
                        {/* Best Practices After Setup and Install (static card) */}
                        <div className="fade-in delay-4 bg-white border border-blue-100 shadow-sm px-4 py-4 sm:px-8 sm:py-6 mb-6 rounded-2xl transition-all duration-300">
                            <div className="info-box-header mb-1">
                                <h2 className="text-blue-900 font-bold text-base sm:text-xl md:text-2xl m-0">Best Practices After Setup and Install</h2>
                            </div>
                            <p className="text-[#222] text-xs sm:text-sm md:text-base font-normal leading-relaxed mt-2">Once your printer is installed, a few best practices can help maintain smooth performance.<br />
                                Keep the printer software updated when system changes occur. Use the same stable Wi-Fi network for wireless printing. Avoid frequently switching the printer between multiple temporary networks. If multiple users need access, add the printer only after the main installation is fully complete.<br />
                                These habits help reduce connection drops, offline errors, and repeated installation problems.</p>
                        </div>
                    </section>
                </section>

                <SupportExpertSection />

                {/* Navigation Buttons */}
                <div className="w-full flex justify-between items-center mt-8 mb-12 px-4 max-w-5xl mx-auto">
                    <Link href="/step-by-step-setup-guide/"
                        className="btn-primary font-bold text-base rounded-[10px] px-8 py-3 min-w-[140px] text-center bg-[#1565d8] text-white no-underline"
                    >
                        &larr; Previous
                    </Link>
                    <Link href="/hp-printer-offline-fix"
                        className="btn-primary font-bold text-base rounded-[10px] px-8 py-3 min-w-[140px] text-center bg-[#1565d8] text-white no-underline"
                    >
                        Next &rarr;
                    </Link>
                </div>
            </main>

            <FooterSetupGuide />
        </div>
        </>
    );
};

export default SetupGuide2;


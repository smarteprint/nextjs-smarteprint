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

const SetupGuide3 = () => {
    const [carouselIdx, setCarouselIdx] = useState(0);
    const [activeDevice, setActiveDevice] = useState(0);

    const handleCarousel = (dir) => {
        setCarouselIdx((prev) => (prev + dir + carouselImages.length) % carouselImages.length);
    };

    return (
        <>
            <SEO title="HP Printer Offline Fix Guide" description="Troubleshoot and fix HP printer offline issues with this step-by-step guide." canonical="/hp-printer-offline-fix" />
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
                                title="Fix Printer Offline Issue"
                                subtitle="Bring your printer back online quickly."
                                description={
                                    <>Resolve HP printer offline problems with step-by-step solutions. Restore connection, fix network issues, clear print queue, and get your printer working again smoothly.</>
                                }
                                buttonText="Fix Your Offline Printer"
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
                    {/* ...existing code... */}

                <section className="w-full max-w-5xl mx-auto px-2 sm:px-4 py-4 sm:py-8">
                    {/* Static informational cards (not dropdowns) */}
                    <div className="fade-in delay-4 bg-white border border-blue-100 shadow-sm px-4 py-4 sm:px-8 sm:py-6 mb-6 rounded-2xl transition-all duration-300">
                        <div className="info-box-header mb-1">
                            <h1 className="font-extrabold text-blue-900 text-xl sm:text-3xl md:text-4xl m-0 leading-tight">HP Printer Offline Fix – Step-by-Step Guide to Restore Printer Connection</h1>
                        </div>
                        <p className="text-black text-xs sm:text-sm md:text-base font-normal leading-relaxed mt-2">
                            Seeing an offline printer message can be frustrating, especially when the printer appears powered on and ready. If you are searching for <b>hp printer offline fix</b>, you are likely dealing with a situation where the printer is not communicating properly with your computer or network.<br /><br />
                            This issue can happen even when the device was working earlier. In many cases, the cause is not the printer itself but a communication problem between the printer, operating system, Wi-Fi network, or print queue.<br /><br />
                            This page explains the offline problem in detail and gives clear steps to bring the printer back online.
                        </p>
                    </div>
                    <div className="fade-in delay-4 bg-white border border-blue-100 shadow-sm px-4 py-4 sm:px-8 sm:py-6 mb-6 rounded-2xl transition-all duration-300">
                        <div className="info-box-header mb-1">
                            <h2 className="text-blue-900 font-bold text-lg sm:text-xl md:text-2xl m-0 leading-tight">What Does “Printer Offline” Mean?</h2>
                        </div>
                        <p className="text-black text-xs sm:text-sm md:text-base font-normal leading-relaxed mt-2">When a printer shows as offline, it usually means the computer cannot send print jobs to it successfully. The printer may be turned on, connected to power, and even connected to Wi-Fi, but the system still treats it as unavailable.<br /><br />
                            This can happen because of:</p>
                        <ul className="list-disc pl-5 text-black text-xs sm:text-sm md:text-base">
                            <li>network interruptions</li>
                            <li>incorrect printer status settings</li>
                            <li>a stuck print queue</li>
                            <li>outdated drivers</li>
                            <li>router reconnection issues</li>
                            <li>changes in printer IP address</li>
                            <li>system confusion after sleep or restart</li>
                        </ul>
                        <p className="text-black text-xs sm:text-sm font-normal leading-relaxed mt-2">Understanding the cause helps you apply the right fix instead of repeatedly reinstalling the printer without solving the actual issue.</p>
                    </div>
                    {/* Step-by-step 4D/modern animated accordion cards (only for actual steps) */}
                    {(() => {
                        const stepData = [
                            {
                                title: 'Step 1: Confirm the Printer Is Powered On and Ready',
                                details: (
                                    <>
                                        <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">Before changing any settings, check the printer itself.<br />
                                            Look at the control panel or display and confirm that:</p>
                                        <ul className="list-disc pl-5 text-[#222] text-xs sm:text-sm">
                                            <li>the printer is on</li>
                                            <li>there are no visible error messages</li>
                                            <li>paper and cartridges are installed properly</li>
                                            <li>the wireless or network light is active if using Wi-Fi</li>
                                        </ul>
                                        <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">A printer that is paused, stuck on an error screen, or still restarting may appear offline on the computer even though the real issue is on the device side.<br />
                                            Starting with a basic status check avoids unnecessary troubleshooting later.</p>
                                    </>
                                )
                            },
                            {
                                title: 'Step 2: Check the Wi-Fi or Cable Connection',
                                details: (
                                    <>
                                        <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">The next step in any <b>hp printer offline fix</b> process is connection verification.<br /><br />
                                            <b>If Using Wi-Fi</b><br />
                                            Make sure the printer is connected to the same Wi-Fi network as your computer. If the printer has a display, review the network status. If it shows disconnected or not ready, reconnect it through the printer’s wireless settings.<br /><br />
                                            <b>If Using USB</b><br />
                                            Check whether the cable is firmly connected on both ends. Try another USB port if needed.<br /><br />
                                            A very common reason for offline errors is that the printer reconnects to a different network after the router restarts, or the computer switches to another saved Wi-Fi network. When the two devices are on different networks, the printer may appear offline even though both are technically connected.</p>
                                    </>
                                )
                            },
                            {
                                title: 'Step 3: Set the Printer as the Default Printer',
                                details: (
                                    <>
                                        <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">Sometimes the system tries to send print jobs to another saved printer or virtual printer instead of the intended device. This makes users think the printer is offline when the real issue is incorrect printer selection.<br /><br />
                                            Open the printer settings on your computer and set the intended printer as the default printer. Once this is done, print jobs are more likely to route correctly.<br /><br />
                                            This step is especially useful if:</p>
                                        <ul className="list-disc pl-5 text-[#222] text-xs sm:text-sm">
                                            <li>multiple printers were installed before</li>
                                            <li>the system recently updated</li>
                                            <li>a PDF or virtual printer became the default</li>
                                            <li>the printer was reinstalled and duplicated</li>
                                        </ul>
                                        <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">Default printer confusion is more common than most users realize.</p>
                                    </>
                                )
                            },
                            {
                                title: 'Step 4: Make Sure “Use Printer Offline” Is Not Enabled',
                                details: (
                                    <>
                                        <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">In some systems, the printer queue settings include an option called <b>Use Printer Offline</b>. If this option is enabled, the operating system intentionally holds the printer in offline mode even when the printer is available.<br /><br />
                                            Open the printer queue and review its settings. If offline mode is enabled, turn it off and try printing again.<br /><br />
                                            This is one of the simplest but most effective fixes because users often do not notice when the setting has been changed accidentally.</p>
                                    </>
                                )
                            },
                            {
                                title: 'Step 5: Clear the Print Queue',
                                details: (
                                    <>
                                        <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">A stuck or corrupted print job can cause communication problems between the computer and printer. When the queue is blocked, the printer may appear unresponsive or offline.<br /><br />
                                            Open the print queue and cancel all pending jobs. Once the queue is empty, restart the printer and try sending a fresh test page.<br /><br />
                                            This step helps because old failed print jobs can keep the system from sending new ones correctly.<br />
                                            If the queue does not clear normally, restarting the print spooler service may also be necessary.</p>
                                    </>
                                )
                            },
                            {
                                title: 'Step 6: Restart the Printer, Computer, and Router',
                                details: (
                                    <>
                                        <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">One of the most effective offline fixes is a full power cycle.<br /><br />
                                            Turn off the printer. Restart the computer. Unplug the router for a short period, then reconnect it. Once the network is back online, power the printer on again and wait for it to reconnect fully.<br /><br />
                                            This works because a restart refreshes:</p>
                                        <ul className="list-disc pl-5 text-[#222] text-xs sm:text-sm">
                                            <li>network communication</li>
                                            <li>temporary memory errors</li>
                                            <li>printer session conflicts</li>
                                            <li>device detection processes</li>
                                            <li>router IP assignments</li>
                                        </ul>
                                        <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">Many offline errors are temporary communication failures that disappear after a clean restart of all connected devices.</p>
                                    </>
                                )
                            },
                            {
                                title: 'Step 7: Check the Printer’s IP Address',
                                details: (
                                    <>
                                        <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">On wireless networks, printers often receive an IP address from the router automatically. Sometimes that address changes after a restart or network reset. If the computer is still trying to reach the printer using the old IP address, the printer may show as offline.<br /><br />
                                            Printing a network configuration page or checking the printer display can help confirm the current IP address.<br /><br />
                                            If the IP address changed, the printer may need to be re-added or updated in the system settings. In some cases, assigning a manual or static IP can help prevent the problem from repeating.<br /><br />
                                            This is one of the more technical but very important parts of a long-term <b>hp printer offline fix</b> strategy.</p>
                                    </>
                                )
                            },
                            {
                                title: 'Step 8: Update or Reinstall the Printer Driver',
                                details: (
                                    <>
                                        <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">If the printer connection is fine but the offline message continues, the driver may be outdated, incomplete, or corrupted.<br /><br />
                                            Driver issues can happen after:</p>
                                        <ul className="list-disc pl-5 text-[#222] text-xs sm:text-sm">
                                            <li>system updates</li>
                                            <li>incomplete installation</li>
                                            <li>network configuration changes</li>
                                            <li>switching between USB and wireless</li>
                                            <li>restoring a backup or moving the printer to another computer</li>
                                        </ul>
                                        <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">Installing the correct and current driver can restore proper communication and remove false offline reporting.<br /><br />
                                            In many cases, a full reinstall helps more than a partial repair because it refreshes the connection settings completely.</p>
                                    </>
                                )
                            },
                            {
                                title: 'Step 9: Restart the Print Spooler Service',
                                details: (
                                    <>
                                        <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">The print spooler is the service that manages print jobs on many systems. If it becomes stuck, crashes, or stops responding, the printer may seem offline even when the hardware is fine.<br /><br />
                                            Restarting the spooler can help clear print processing issues and restore printer availability. This is particularly useful when:</p>
                                        <ul className="list-disc pl-5 text-[#222] text-xs sm:text-sm">
                                            <li>the print queue will not clear</li>
                                            <li>documents remain stuck</li>
                                            <li>the printer status does not update</li>
                                            <li>print jobs disappear without printing</li>
                                        </ul>
                                        <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">This step is often overlooked, but it can resolve many persistent offline cases.</p>
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
                                                <span className="font-extrabold text-blue-900 text-base sm:text-lg md:text-xl leading-snug md:leading-normal group-hover:text-blue-700 transition-colors duration-200">
                                                    {step.title}
                                                </span>
                                            </span>
                                            <span className="ml-2 flex items-center justify-center w-8 h-8 rounded-full border border-blue-200 bg-white/70 shadow-sm transition-transform duration-300 group-hover:scale-110">
                                                <svg className={`w-5 h-5 text-blue-500 transition-transform duration-300 ${openStep === idx ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                                            </span>
                                        </button>
                                        <div
                                            id={`step-details-${idx}`}
                                            className={`transition-all duration-500 ease-in-out overflow-hidden ${openStep === idx ? 'max-h-[600px] opacity-100 py-2 px-4' : 'max-h-0 opacity-0 py-0 px-4'}`}
                                            aria-hidden={openStep !== idx}
                                        >
                                            <div className="animate-fade-in-fast">
                                                {/* Standardize text size and color in details */}
                                                {React.Children.map(step.details.props.children, child => {
                                                    if (typeof child === 'string') return child;
                                                    if (!child || !child.props) return child;
                                                    // For <p> and <ul> elements
                                                    if (child.type === 'p') {
                                                        return React.cloneElement(child, {
                                                            className: 'text-black text-xs sm:text-sm md:text-base font-normal leading-relaxed mt-2'
                                                        });
                                                    }
                                                    if (child.type === 'ul') {
                                                        return React.cloneElement(child, {
                                                            className: 'list-disc pl-5 text-black text-xs sm:text-sm md:text-base'
                                                        });
                                                    }
                                                    return child;
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        );
                    })()}
                    {/* Prevention Card (static) */}
                    <div className="fade-in delay-4 bg-white border border-blue-100 shadow-sm px-4 py-4 sm:px-8 sm:py-6 mb-6 rounded-2xl transition-all duration-300">
                        <div className="info-box-header mb-1">
                            <h2 className="text-blue-900 font-bold text-lg sm:text-xl md:text-2xl m-0 leading-tight">How to Prevent the Printer From Going Offline Again</h2>
                        </div>
                        <p className="text-black text-xs sm:text-sm md:text-base font-normal leading-relaxed mt-2">Once the printer is back online, it is a good idea to reduce the chance of the same issue happening again.<br /><br />
                            Keep the printer on a stable network and avoid frequent Wi-Fi changes. If possible, assign the printer a static IP address. Keep your printer driver updated when your operating system changes. Make sure the printer remains the default device if it is your main printer. Restart the printer and router occasionally if the network environment is unstable.<br /><br />
                            These preventive steps help reduce repeated interruptions and improve printer reliability over time.</p>
                    </div>
                </section>

                <SupportExpertSection />

                {/* Navigation Buttons */}
                <div className="w-full flex justify-between items-center mt-8 mb-12 px-4 max-w-5xl mx-auto gap-4">
                    <Link href="/hp-printer-setup-install"
                        className="font-bold text-base rounded-2xl px-8 py-3 min-w-[140px] text-center bg-blue-700 text-white no-underline border border-blue-200 shadow-md transition-all duration-300 hover:bg-blue-900 hover:border-blue-400 focus:z-20 active:scale-95"
                    >
                        &larr; Previous
                    </Link>
                    <Link href="/hp-printer-troubleshooting"
                        className="font-bold text-base rounded-2xl px-8 py-3 min-w-[140px] text-center bg-blue-700 text-white no-underline border border-blue-200 shadow-md transition-all duration-300 hover:bg-blue-900 hover:border-blue-400 focus:z-20 active:scale-95"
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

export default SetupGuide3;


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

const SetupGuide4 = () => {
    const [carouselIdx, setCarouselIdx] = useState(0);
    const [activeDevice, setActiveDevice] = useState(0);

    const handleCarousel = (dir) => {
        setCarouselIdx((prev) => (prev + dir + carouselImages.length) % carouselImages.length);
    };

    return (
        <>
            <SEO title="HP Printer Troubleshooting Guide" description="Comprehensive HP printer troubleshooting for common setup and printing problems." canonical="/hp-printer-troubleshooting" />
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
                                title="HP Printer Troubleshooting"
                                subtitle="Fix common printer issues easily."
                                description={
                                    <>Use our complete HP printer troubleshooting guide to fix printing errors, connection issues, driver problems, and scanner malfunctions with simple steps.
                                    </>
                                }
                                buttonText="Start Troubleshooting"
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
                    {/* SEO Content for 123 HP Com Setup */}
                    {/* Meta Tags (for reference, add to HTML head if needed) */}
                    {/*
                                <meta name="keywords" content="123 hp com setup" />
                                <title>123 HP Com Setup Guide | Step-by-Step HP Printer Setup</title>
                                <meta name="description" content="Learn how to complete 123 HP com setup with step-by-step instructions for printer installation, Wi-Fi connection, driver download, and first-time setup." />
                                */}
                    <section className="w-full max-w-5xl mx-auto px-2 sm:px-4 py-4 sm:py-8">
                        {/* Static informational cards (not dropdowns) */}
                        <div className="fade-in delay-4 bg-white border border-blue-100 shadow-sm px-4 py-4 sm:px-8 sm:py-6 mb-6 rounded-2xl transition-all duration-300">
                            <div className="info-box-header mb-1">
                                <h1 className="font-extrabold text-blue-900 text-xl sm:text-3xl md:text-4xl m-0 leading-tight">HP Printer Troubleshooting – Complete Guide to Fix Common Printer Problems</h1>
                            </div>
                            <p className="text-black text-xs sm:text-sm md:text-base font-normal leading-relaxed mt-2">
                                Printers are essential for daily work, school tasks, office paperwork, shipping labels, scanning, and document handling. When a printer stops working as expected, even a small issue can interrupt productivity.<br /><br />
                                If you are searching for <b>hp printer troubleshooting</b>, you likely need a detailed guide that explains how to identify and solve common printer problems such as printing failures, poor print quality, connection errors, scanner issues, or software conflicts.<br /><br />
                                This page is built as a complete troubleshooting resource, organized by problem type so users can quickly understand the issue and follow the right fix.
                            </p>
                        </div>
                        <div className="fade-in delay-4 bg-white border border-blue-100 shadow-sm px-4 py-4 sm:px-8 sm:py-6 mb-6 rounded-2xl transition-all duration-300">
                            <div className="info-box-header mb-1">
                                <h2 className="text-blue-900 font-bold text-lg sm:text-xl md:text-2xl m-0 leading-tight">How to Approach Printer Troubleshooting Effectively</h2>
                            </div>
                            <p className="text-black text-xs sm:text-sm md:text-base font-normal leading-relaxed mt-2">Good troubleshooting begins with identifying the type of problem before jumping into random fixes.<br /><br />
                                Printer problems usually fall into one of these categories:</p>
                            <ul className="list-disc pl-5 text-black text-xs sm:text-sm md:text-base">
                                <li>setup or installation issue</li>
                                <li>printer not printing</li>
                                <li>print quality problem</li>
                                <li>network or wireless problem</li>
                                <li>offline status problem</li>
                                <li>scan feature not working</li>
                                <li>driver or software issue</li>
                                <li>paper feed or hardware error</li>
                            </ul>
                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">When users understand which category the issue belongs to, they can solve it faster and avoid unnecessary reinstallation or repeated resets.</p>
                        </div>
                        {/* Step-by-step 4D/modern animated accordion cards (only for actual problems/steps) */}
                        {(() => {
                            const stepData = [
                                {
                                    title: 'Problem 1: Printer Not Printing',
                                    details: (
                                        <>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">One of the most common printer issues is when the printer appears ready, but nothing prints.<br /><br />
                                                This can happen because:</p>
                                            <ul className="list-disc pl-5 text-[#222] text-xs sm:text-sm">
                                                <li>the wrong printer is selected</li>
                                                <li>the print queue is stuck</li>
                                                <li>the printer is paused</li>
                                                <li>the connection is incomplete</li>
                                                <li>the driver is not responding properly</li>
                                            </ul>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">Start by checking whether the printer is powered on and ready. Then verify that the correct printer is selected in the print window. Make sure paper is loaded and the queue is not full of pending documents.<br /><br />
                                                If the printer still does not print, restart the printer and send a new test page. A fresh test page is often more useful than retrying an old document because it removes the possibility that the document itself is causing the issue.</p>
                                        </>
                                    )
                                },
                                {
                                    title: 'Problem 2: Poor Print Quality',
                                    details: (
                                        <>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">Another frequent reason users search <b>hp printer troubleshooting</b> is print quality trouble. This includes faded text, blurry output, missing colors, streaks, lines, or smudges.<br /><br />
                                                Poor print quality is often related to:</p>
                                            <ul className="list-disc pl-5 text-[#222] text-xs sm:text-sm">
                                                <li>low ink or toner</li>
                                                <li>clogged printheads</li>
                                                <li>alignment issues</li>
                                                <li>incorrect paper type</li>
                                                <li>print settings mismatch</li>
                                            </ul>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">To improve quality, start by checking supply levels. Then run the built-in printhead cleaning or maintenance function if available. If the printer offers cartridge alignment, complete that step as well.<br /><br />
                                                Also review your print settings. Draft mode, incorrect paper settings, or low-resolution output options can affect print appearance even when the printer hardware is fine.<br /><br />
                                                If the issue continues after maintenance, replacing the cartridges may be necessary.</p>
                                        </>
                                    )
                                },
                                {
                                    title: 'Problem 3: Printer Shows Offline or Unavailable',
                                    details: (
                                        <>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">Offline status is one of the most frustrating printer problems because the printer may appear normal physically while the system cannot send print jobs.<br /><br />
                                                Troubleshooting this problem usually involves:</p>
                                            <ul className="list-disc pl-5 text-[#222] text-xs sm:text-sm">
                                                <li>verifying the network or cable connection</li>
                                                <li>setting the printer as default</li>
                                                <li>removing offline mode in queue settings</li>
                                                <li>clearing blocked print jobs</li>
                                                <li>restarting the printer and router</li>
                                                <li>checking for IP changes</li>
                                                <li>updating the driver</li>
                                            </ul>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">Offline troubleshooting deserves its own focused page, but it is also an important part of a complete troubleshooting guide because many users encounter it as part of broader printer performance issues.</p>
                                        </>
                                    )
                                },
                                {
                                    title: 'Problem 4: Wireless Connection Problems',
                                    details: (
                                        <>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">Wireless printing is convenient, but it also introduces more variables than a cable-based connection. A printer may disconnect if the network changes, the signal becomes weak, or the router resets.<br /><br />
                                                Common signs of wireless trouble include:</p>
                                            <ul className="list-disc pl-5 text-[#222] text-xs sm:text-sm">
                                                <li>printer not appearing during setup</li>
                                                <li>connection drops after sleep or restart</li>
                                                <li>slow printer detection</li>
                                                <li>repeated offline messages</li>
                                                <li>printer works one day and disappears the next</li>
                                            </ul>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">To troubleshoot wireless problems, confirm that the printer is connected to the correct network and that the signal is strong enough where the printer is placed. If the router has both separate network bands or guest access, make sure the printer and computer are still communicating on the same usable network.<br /><br />
                                                A printer that frequently drops off the network may benefit from being placed closer to the router or given a more stable connection configuration.</p>
                                        </>
                                    )
                                },
                                {
                                    title: 'Problem 5: Driver or Software Issues',
                                    details: (
                                        <>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">Printer drivers act as the communication bridge between the operating system and the printer. If the driver is missing, outdated, incomplete, or damaged, printing and scanning features may stop working correctly.<br /><br />
                                                Driver-related symptoms can include:</p>
                                            <ul className="list-disc pl-5 text-[#222] text-xs sm:text-sm">
                                                <li>printer not responding</li>
                                                <li>incomplete installation</li>
                                                <li>missing scan functions</li>
                                                <li>advanced settings not appearing</li>
                                                <li>random connection failures after updates</li>
                                            </ul>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">This kind of <b>hp printer troubleshooting</b> usually requires reviewing whether the correct software package is installed. A basic driver may allow simple printing but not scanning or utility features.<br /><br />
                                                If the problem started after a system update or operating system change, reinstalling the full printer software often helps restore normal performance.</p>
                                        </>
                                    )
                                },
                                {
                                    title: 'Problem 6: Scanner Not Working',
                                    details: (
                                        <>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">Many multifunction printers are used for both printing and scanning. Sometimes printing works fine while scanning does not.<br /><br />
                                                This can happen because:</p>
                                            <ul className="list-disc pl-5 text-[#222] text-xs sm:text-sm">
                                                <li>the scan software is not installed</li>
                                                <li>the scanner was disabled during setup</li>
                                                <li>the printer software is only partially installed</li>
                                                <li>network communication is incomplete</li>
                                                <li>scan permissions or local settings are missing</li>
                                            </ul>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">Testing the scan function separately helps confirm whether the issue is isolated to scanning or part of a larger software problem. If scanning is unavailable, reinstalling the full software package or enabling scan-related features may be necessary.<br /><br />
                                                Since scanning often depends more on full software support than simple printing does, this issue is common when users install only a minimal driver.</p>
                                        </>
                                    )
                                },
                                {
                                    title: 'Problem 7: Paper Jams and Paper Feed Errors',
                                    details: (
                                        <>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">Paper handling issues can interrupt normal printing and create frustration even when the rest of the printer setup is working fine.<br /><br />
                                                Paper jams and feed problems may result from:</p>
                                            <ul className="list-disc pl-5 text-[#222] text-xs sm:text-sm">
                                                <li>overloaded tray</li>
                                                <li>curled or damp paper</li>
                                                <li>small scraps left inside the printer</li>
                                                <li>misaligned paper guides</li>
                                                <li>mixed paper sizes in one tray</li>
                                            </ul>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">Carefully remove jammed paper without tearing it. Then inspect the feed path for leftover pieces. Reload paper neatly and adjust the guides so the stack is secure.<br /><br />
                                                Paper feed errors often return when the underlying loading method has not been corrected, so a clean reload is just as important as removing the visible jam.</p>
                                        </>
                                    )
                                },
                                {
                                    title: 'Problem 8: Print Jobs Stuck in Queue',
                                    details: (
                                        <>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">A stuck print queue can make the printer seem broken even when the hardware is fine. Users may notice that one document stays in the queue and prevents all others from printing.<br /><br />
                                                This usually happens because:</p>
                                            <ul className="list-disc pl-5 text-[#222] text-xs sm:text-sm">
                                                <li>a previous job failed</li>
                                                <li>communication dropped mid-job</li>
                                                <li>the spooler service stopped responding</li>
                                                <li>the queue was not cleared after an error</li>
                                            </ul>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">Clearing the queue and restarting the print service can solve many cases. Then send a small test page instead of a large document to confirm that the queue is working again.<br /><br />
                                                This type of issue often affects office users or anyone printing multiple jobs one after another.</p>
                                        </>
                                    )
                                },
                                {
                                    title: 'Problem 9: Slow Printing or Delayed Response',
                                    details: (
                                        <>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">Sometimes the printer works, but it responds slowly, takes too long to wake up, or delays before starting a print job.<br /><br />
                                                This can result from:</p>
                                            <ul className="list-disc pl-5 text-[#222] text-xs sm:text-sm">
                                                <li>wireless signal delays</li>
                                                <li>large print files</li>
                                                <li>high-resolution settings</li>
                                                <li>outdated firmware</li>
                                                <li>busy network traffic</li>
                                                <li>system resource limitations</li>
                                            </ul>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">A troubleshooting page should not only address complete failures but also performance issues like this. Improving speed often involves checking network stability, reducing file complexity, or reviewing print quality settings.</p>
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
                        {/* General Troubleshooting Routine Card (static) */}
                        <div className="fade-in delay-4 bg-white border border-blue-100 shadow-sm px-4 py-4 sm:px-8 sm:py-6 mb-6 rounded-2xl transition-all duration-300">
                            <div className="info-box-header mb-1">
                                <h2 className="text-blue-900 font-bold text-lg sm:text-xl md:text-2xl m-0 leading-tight">Best General Troubleshooting Routine</h2>
                            </div>
                            <p className="text-black text-xs sm:text-sm md:text-base font-normal leading-relaxed mt-2">When the exact issue is not obvious, follow a simple troubleshooting routine in order.<br /><br />
                                Start by checking the printer’s physical status. Confirm power, paper, and cartridges. Then verify the connection. Next, check the print queue and printer settings. Restart the devices if needed. After that, review the driver and software installation. If the problem continues, reinstall the printer software and test again.<br /><br />
                                This layered approach prevents users from skipping the simple fix and jumping straight into unnecessary steps.</p>
                        </div>

                    </section>

                    <SupportExpertSection />

                    {/* Navigation Buttons */}
                    <div className="w-full flex justify-between items-center mt-8 mb-12 px-4 max-w-5xl mx-auto gap-4">
                        <Link href="/hp-printer-offline-fix"
                            className="font-bold text-base rounded-2xl px-8 py-3 min-w-[140px] text-center bg-blue-700 text-white no-underline border border-blue-200 shadow-md transition-all duration-300 hover:bg-blue-900 hover:border-blue-400 focus:z-20 active:scale-95"
                        >
                            &larr; Previous
                        </Link>
                        <Link href="/hp-printer-not-printing"
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

export default SetupGuide4;


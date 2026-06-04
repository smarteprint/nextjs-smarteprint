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

const SetupGuide5 = () => {
    const [carouselIdx, setCarouselIdx] = useState(0);
    const [activeDevice, setActiveDevice] = useState(0);

    const handleCarousel = (dir) => {
        setCarouselIdx((prev) => (prev + dir + carouselImages.length) % carouselImages.length);
    };

    return (
        <>
            <SEO title="HP Printer Not Printing? Fix Guide" description="Resolve HP printer not printing issues with this step-by-step troubleshooting guide." canonical="/hp-printer-not-printing" />
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
                                title="HP Printer Not Printing Fix
"
                                subtitle="Get your printer working again."
                                description={
                                    <>Fix HP printer not printing issues with easy troubleshooting steps. Check connection, clear print queue, resolve driver errors, and restore printing quickly.</>
                                }
                                buttonText="Fix Printing Issue"
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

                    {/* SEO Content for HP Printer Not Printing */}
                    <section className="w-full max-w-5xl mx-auto px-2 sm:px-4 py-4 sm:py-8">
                        {/* Static informational cards (not dropdowns) */}
                        <div className="fade-in delay-4 bg-white border border-blue-100 shadow-sm px-4 py-4 sm:px-8 sm:py-6 mb-6 rounded-2xl transition-all duration-300">
                            <div className="info-box-header mb-1">
                                <h1 className="font-extrabold text-blue-900 text-xl sm:text-3xl md:text-4xl m-0 leading-tight">HP Printer Not Printing – Complete Step-by-Step Guide to Fix the Problem</h1>
                            </div>
                            <p className="text-black text-xs sm:text-sm md:text-base font-normal leading-relaxed mt-2">If you are searching for <span className="font-semibold">hp printer not printing</span>, you are likely dealing with one of the most common printer issues users face. The printer may be powered on, connected to your computer or Wi-Fi, and appear ready, but when you send a document, nothing prints. In some cases, the print job stays stuck in the queue. In others, the printer acts as if it received the command but does not respond.</p>
                            <p className="text-black text-xs sm:text-sm md:text-base font-normal leading-relaxed mt-2">This issue can happen for many reasons, including connection problems, incorrect printer settings, low or unrecognized cartridges, paper feed issues, software conflicts, or print spooler errors. The good news is that most of these problems can be fixed by following the right troubleshooting sequence.</p>
                            <p className="text-black text-xs sm:text-sm md:text-base font-normal leading-relaxed mt-2 mb-0">This page explains the issue in detail and gives a full step-by-step process to help restore printing properly.</p>
                        </div>
                        <div className="fade-in delay-4 bg-white border border-blue-100 shadow-sm px-4 py-4 sm:px-8 sm:py-6 mb-6 rounded-2xl transition-all duration-300">
                            <div className="info-box-header mb-1">
                                <h2 className="text-blue-900 font-bold text-lg sm:text-xl md:text-2xl m-0 leading-tight">Why Is My HP Printer Not Printing?</h2>
                            </div>
                            <p className="text-black text-xs sm:text-sm md:text-base font-normal leading-relaxed mt-2">When a printer stops printing, the cause is not always obvious right away. Some users assume the printer is broken, but in reality, the issue is often caused by communication or configuration problems rather than hardware failure.</p>
                            <p className="text-black text-xs sm:text-sm md:text-base font-normal leading-relaxed mt-2">A printer may stop printing because of:</p>
                            <ul className="list-disc pl-5 mb-0 text-black text-xs sm:text-sm md:text-base">
                                <li>an unstable Wi-Fi or USB connection</li>
                                <li>the wrong printer being selected</li>
                                <li>a stuck print queue</li>
                                <li>an offline printer status</li>
                                <li>low, empty, or improperly installed cartridges</li>
                                <li>paper jam or feed obstruction</li>
                                <li>outdated or incomplete printer drivers</li>
                                <li>spooler service interruptions</li>
                                <li>settings mismatches after a system update</li>
                            </ul>
                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2 mb-0">Understanding the possible causes helps you fix the problem more efficiently instead of repeating random steps that may not address the real issue.</p>
                        </div>
                        <div className="fade-in delay-4 bg-white border border-blue-100 shadow-sm px-4 py-4 sm:px-8 sm:py-6 mb-6 rounded-2xl transition-all duration-300">
                            <div className="info-box-header mb-1">
                                <h2 className="text-blue-900 font-bold text-lg sm:text-xl md:text-2xl m-0 leading-tight">Start With the Basics Before Advanced Troubleshooting</h2>
                            </div>
                            <p className="text-black text-xs sm:text-sm md:text-base font-normal leading-relaxed mt-2">Before moving into detailed fixes, it is important to check a few basic things. Sometimes a simple physical or status issue prevents printing and can be corrected quickly.</p>
                            <p className="text-black text-xs sm:text-sm md:text-base font-normal leading-relaxed mt-2">Make sure:</p>
                            <ul className="list-disc pl-5 mb-0 text-black text-xs sm:text-sm md:text-base">
                                <li>the printer is powered on</li>
                                <li>there are no error lights or warning messages</li>
                                <li>paper is loaded properly</li>
                                <li>cartridges or toner are installed correctly</li>
                                <li>the printer is connected to Wi-Fi or USB</li>
                                <li>the printer screen does not show an error state</li>
                            </ul>
                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2 mb-0">If the printer display shows a paper jam, cartridge issue, or attention warning, solve that first before checking computer settings. Many printing failures begin with a basic device-side problem.</p>
                        </div>
                        {/* Step-by-step 4D/modern animated accordion cards (only for actual steps) */}
                        {(() => {
                            const stepData = [
                                // Step 1
                                {
                                    title: 'Step 1: Confirm the Printer Is Ready to Print',
                                    details: (
                                        <>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">The first step in fixing <span className="font-semibold">hp printer not printing</span> is checking whether the printer itself is actually ready. A printer can appear powered on but still not be in a usable state.</p>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">Look for:</p>
                                            <ul className="list-disc pl-5 mb-0 text-[#222] text-xs sm:text-sm">
                                                <li>blinking warning lights</li>
                                                <li>low ink alerts</li>
                                                <li>cartridge access door not fully closed</li>
                                                <li>empty or misaligned paper tray</li>
                                                <li>maintenance or setup prompt on the display</li>
                                            </ul>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2 mb-0">If the printer is still finishing startup, cleaning, alignment, or internal preparation, it may not respond to print jobs yet. Wait until the printer shows a ready status before testing again. This step matters because software troubleshooting will not help if the printer is paused by a hardware or setup condition.</p>
                                        </>
                                    )
                                },
                                // Step 2
                                {
                                    title: 'Step 2: Check the Connection Between Printer and Device',
                                    details: (
                                        <>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">A very common reason a printer does not print is that the device sending the print command cannot communicate properly with the printer.</p>
                                            <div className="mt-2">
                                                <div className="font-bold text-[#1565d8] text-xs sm:text-base mb-1">If You Are Using Wi-Fi</div>
                                                <p className="text-[#222] text-xs sm:text-sm m-0">Make sure the printer and your computer are connected to the same wireless network. If the printer was connected previously but stopped printing, the network may have changed or the printer may have disconnected.</p>
                                                <p className="text-[#222] text-xs sm:text-sm mt-1">Check: whether the wireless light is solid, whether the network name on the printer matches your current Wi-Fi, and whether the router was recently restarted.</p>
                                            </div>
                                            <div className="mt-2">
                                                <div className="font-bold text-[#1565d8] text-xs sm:text-base mb-1">If You Are Using USB</div>
                                                <p className="text-[#222] text-xs sm:text-sm m-0">Check that the cable is firmly connected and not damaged. Try another USB port if needed. A weak or broken connection may allow the printer to appear installed while still preventing successful printing.</p>
                                            </div>
                                        </>
                                    )
                                },
                                // Step 3
                                {
                                    title: 'Step 3: Make Sure the Correct Printer Is Selected',
                                    details: (
                                        <>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">Sometimes the printer is working, but the document is being sent to the wrong device. This can happen if:</p>
                                            <ul className="list-disc pl-5 mb-0 text-[#222] text-xs sm:text-sm">
                                                <li>another printer is installed on the computer</li>
                                                <li>a virtual PDF printer is set as default</li>
                                                <li>the printer was reinstalled and appears twice</li>
                                                <li>an older offline printer entry is still saved</li>
                                            </ul>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2 mb-0">Open your print dialog and confirm that the intended printer is selected. Then check the printer settings on your system and set your preferred printer as the default printer. This is a simple step, but it solves more issues than many users expect, especially on computers that have multiple saved printing options.</p>
                                        </>
                                    )
                                },
                                // Step 4
                                {
                                    title: 'Step 4: Check Whether the Printer Is Offline or Paused',
                                    details: (
                                        <>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">A printer that is marked as offline or paused will not print even if it is powered on and connected.</p>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">Open the printer queue and review its status. If the printer is paused or set to offline mode, disable that status and try printing again.</p>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">A paused or offline state may happen after:</p>
                                            <ul className="list-disc pl-5 mb-0 text-[#222] text-xs sm:text-sm">
                                                <li>a failed print job</li>
                                                <li>a restart</li>
                                                <li>a connection interruption</li>
                                                <li>a manual setting change</li>
                                            </ul>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2 mb-0">If the status is not corrected, the system may continue sending jobs to a blocked printer queue without printing anything.</p>
                                        </>
                                    )
                                },
                                // Step 5
                                {
                                    title: 'Step 5: Clear Stuck Print Jobs From the Queue',
                                    details: (
                                        <>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">A blocked print queue is one of the most common causes of an <span className="font-semibold">hp printer not printing</span> problem. If an earlier print job failed or got stuck, it can prevent all later documents from printing.</p>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">Open the queue and remove all pending jobs. After clearing the queue, restart the printer and send a small test page instead of a large document.</p>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">This helps because:</p>
                                            <ul className="list-disc pl-5 mb-0 text-[#222] text-xs sm:text-sm">
                                                <li>old failed jobs no longer block the queue</li>
                                                <li>the printer receives a fresh print request</li>
                                                <li>you can test the connection without document-specific issues</li>
                                            </ul>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2 mb-0">If the queue refuses to clear or jobs stay stuck, restarting the print spooler service may be necessary, which is covered later in this page.</p>
                                        </>
                                    )
                                },
                                // Step 6
                                {
                                    title: 'Step 6: Check Paper Loading and Paper Feed Path',
                                    details: (
                                        <>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">Sometimes the printer is not printing because it cannot pick up paper correctly. Even when there is paper in the tray, issues such as misaligned guides, curled sheets, overfilled trays, or hidden scraps from a previous jam can stop printing.</p>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">Remove the paper stack and reload it neatly. Adjust the guides so they are snug but not too tight. Inspect the tray and feed path for any visible obstructions.</p>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">Paper-related issues can cause:</p>
                                            <ul className="list-disc pl-5 mb-0 text-[#222] text-xs sm:text-sm">
                                                <li>blank response when printing</li>
                                                <li>partial feed and stopping in the middle of a job</li>
                                                <li>repeated attempts to start printing without output</li>
                                                <li>error lights or attention messages</li>
                                            </ul>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-4 mb-0">A clean reload often fixes issues that users mistake for software problems.</p>
                                        </>
                                    )
                                },
                                // Step 7
                                {
                                    title: 'Step 7: Check Ink or Toner Cartridge Status',
                                    details: (
                                        <>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">A printer may stop printing or refuse certain print jobs if cartridges are empty, low, improperly installed, or not recognized correctly.</p>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">Check whether:</p>
                                            <ul className="list-disc pl-5 mb-0 text-[#222] text-xs sm:text-sm">
                                                <li>the cartridges are seated securely</li>
                                                <li>protective tape was fully removed on newer cartridges</li>
                                                <li>the printer display shows an ink warning</li>
                                                <li>print quality has recently faded or become inconsistent</li>
                                            </ul>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2 mb-0">If cartridges are very low or not detected, the printer may not complete print jobs normally. Some models may still print certain pages while refusing others, depending on the content and color use. If needed, reseat the cartridges carefully and test again. If the printer still does not recognize them, a replacement may be required.</p>
                                        </>
                                    )
                                },
                                // Step 8
                                {
                                    title: 'Step 8: Restart the Printer, Computer, and Router',
                                    details: (
                                        <>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">A full restart is one of the most effective ways to fix temporary communication problems.</p>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">Turn off the printer, restart your computer, and if you are using Wi-Fi, restart your router as well. Once the network is fully back online, turn the printer on again and wait until it reaches ready status.</p>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">This step refreshes:</p>
                                            <ul className="list-disc pl-5 mb-0 text-[#222] text-xs sm:text-sm">
                                                <li>network communication</li>
                                                <li>temporary system conflicts</li>
                                                <li>printer memory state</li>
                                                <li>queue handling</li>
                                                <li>device detection</li>
                                            </ul>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2 mb-0">A restart is especially useful when the printer was printing earlier but suddenly stopped without any obvious hardware issue.</p>
                                        </>
                                    )
                                },
                                // Step 9
                                {
                                    title: 'Step 9: Print a Test Page Directly From Printer Settings',
                                    details: (
                                        <>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">Testing with your original document does not always reveal whether the problem is the printer or the file itself. A test page is better because it isolates the issue.</p>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">Printing a test page can confirm:</p>
                                            <ul className="list-disc pl-5 mb-0 text-[#222] text-xs sm:text-sm">
                                                <li>whether the printer is communicating with the system</li>
                                                <li>whether the driver is responding</li>
                                                <li>whether paper feed works normally</li>
                                                <li>whether cartridges are producing output</li>
                                            </ul>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2 mb-0">If the test page prints successfully, the problem may be related to a specific application, file, or document settings rather than the printer itself. If the test page does not print, the issue is more likely related to printer setup, connection, or software.</p>
                                        </>
                                    )
                                },
                                // Step 10
                                {
                                    title: 'Step 10: Update or Reinstall the Printer Driver',
                                    details: (
                                        <>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">A damaged, incomplete, or outdated printer driver can cause the printer to stop printing even if it appears installed.</p>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">Driver problems often occur after:</p>
                                            <ul className="list-disc pl-5 mb-0 text-[#222] text-xs sm:text-sm">
                                                <li>operating system updates</li>
                                                <li>network changes</li>
                                                <li>interrupted installation</li>
                                                <li>switching between USB and wireless</li>
                                                <li>restoring old system settings</li>
                                            </ul>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2 mb-0">Reinstalling the proper driver helps refresh the communication path between your system and the printer. It can also restore missing features, correct false status reporting, and improve device response. If the printer was working before a recent update and then stopped printing, a driver issue becomes even more likely.</p>
                                        </>
                                    )
                                },
                                // Step 11
                                {
                                    title: 'Step 11: Restart the Print Spooler Service',
                                    details: (
                                        <>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">The print spooler is the system service that manages print jobs before they are sent to the printer. If it becomes stuck or stops responding, the printer may appear connected but still not print anything.</p>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">Restarting the spooler helps when:</p>
                                            <ul className="list-disc pl-5 mb-0 text-[#222] text-xs sm:text-sm">
                                                <li>the print queue will not clear</li>
                                                <li>jobs remain in the queue indefinitely</li>
                                                <li>new jobs disappear without printing</li>
                                                <li>printer status does not update correctly</li>
                                            </ul>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-4 mb-0">This step is especially important on Windows systems where print management depends heavily on spooler activity. When users keep retrying documents but nothing happens, spooler interruption is often part of the issue.</p>
                                        </>
                                    )
                                },
                                // Step 12
                                {
                                    title: 'Step 12: Check for Printer-Specific Error Messages',
                                    details: (
                                        <>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">If the printer still does not print after the previous steps, review the printer display or software utility for specific warnings. Generic troubleshooting can only go so far if the device is already telling you the exact problem.</p>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">Look for messages related to:</p>
                                            <ul className="list-disc pl-5 mb-0 text-[#222] text-xs sm:text-sm">
                                                <li>door open</li>
                                                <li>paper jam</li>
                                                <li>carriage jam</li>
                                                <li>cartridge missing</li>
                                                <li>incompatible cartridge</li>
                                                <li>low supply</li>
                                                <li>service required</li>
                                                <li>connection lost</li>
                                            </ul>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2 mb-0">Specific error messages should always be addressed directly because they often explain why printing is blocked even when everything else seems fine.</p>
                                        </>
                                    )
                                },
                                // Step 13
                                {
                                    title: 'Step 13: Test Printing From Another Application or Device',
                                    details: (
                                        <>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">If the printer appears ready but one file or one program will not print, test from a different source. Try printing:</p>
                                            <ul className="list-disc pl-5 mb-0 text-[#222] text-xs sm:text-sm">
                                                <li>a plain text document</li>
                                                <li>a browser page</li>
                                                <li>a PDF</li>
                                                <li>a test page from system settings</li>
                                                <li>a simple document from another device on the same network</li>
                                            </ul>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2">This helps determine whether the issue is:</p>
                                            <ul className="list-disc pl-5 mb-0 text-[#222] text-xs sm:text-sm">
                                                <li>printer-wide</li>
                                                <li>application-specific</li>
                                                <li>file-specific</li>
                                                <li>network-specific</li>
                                                <li>user-profile-specific</li>
                                            </ul>
                                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2 mb-0">If another device can print successfully, the problem may be with the original computer rather than the printer itself.</p>
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
                                                                className: 'list-disc pl-5 mb-0 text-black text-xs sm:text-sm md:text-base'
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
                        {/* All other informational cards (not steps) remain as static cards below, using the same 3D/glassmorphism style */}

                  

                        {/* Common Reasons Connected But Not Printing */}
                        <div className="fade-in delay-4 bg-white border border-blue-100 shadow-sm px-4 py-4 sm:px-8 sm:py-6 mb-6 rounded-2xl transition-all duration-300">
                            <div className="info-box-header mb-1">
                                <h2 className="text-blue-900 font-bold text-lg sm:text-xl md:text-2xl m-0 leading-tight">Common Reasons an HP Printer Is Not Printing Even Though It Is Connected</h2>
                            </div>
                            <p className="text-black text-xs sm:text-sm md:text-base font-normal leading-relaxed mt-2">One of the most confusing situations is when the printer looks connected but still does not print. In many of these cases, the problem is caused by a hidden software or settings issue rather than the connection itself.</p>
                            <p className="text-black text-xs sm:text-sm md:text-base font-normal leading-relaxed mt-2">This can happen when:</p>
                            <ul className="list-disc pl-5 mb-0 text-black text-xs sm:text-sm md:text-base">
                                <li>the system has the wrong default printer</li>
                                <li>the queue is blocked</li>
                                <li>the driver is partially installed</li>
                                <li>the printer is technically online but not fully detected</li>
                                <li>a background service has stalled</li>
                                <li>the document contains corrupted print instructions</li>
                            </ul>
                            <p className="text-[#222] text-xs sm:text-sm font-normal leading-relaxed mt-2 mb-0">This is why a full troubleshooting flow is more effective than checking only the connection.</p>
                        </div>

                        {/* Prevention Tips */}
                        <div className="fade-in delay-4 bg-white border border-blue-100 shadow-sm px-4 py-4 sm:px-8 sm:py-6 mb-6 rounded-2xl transition-all duration-300">
                            <div className="info-box-header mb-1">
                                <h2 className="text-blue-900 font-bold text-lg sm:text-xl md:text-2xl m-0 leading-tight">How to Prevent Printing Problems in the Future</h2>
                            </div>
                            <p className="text-black text-xs sm:text-sm md:text-base font-normal leading-relaxed mt-2">Once the printer is working again, a few good habits can help reduce the chance of the same issue returning.</p>
                            <p className="text-black text-xs sm:text-sm md:text-base font-normal leading-relaxed mt-2 mb-0">Keep the printer software up to date, especially after operating system changes. Use a stable wireless network and avoid switching the printer between different networks too often. Keep paper loaded correctly and use clean, flat sheets. Replace low cartridges before they become completely empty if your printing volume is important. Restart the printer occasionally if it stays on for long periods. Preventive maintenance does not solve every problem, but it can significantly reduce repeated interruptions.</p>
                        </div>

                    </section>

                    <SupportExpertSection />

                    {/* Navigation Buttons */}
                    <div className="w-full flex justify-between items-center mt-8 mb-12 px-4 max-w-5xl mx-auto gap-4">
                        <Link href="/hp-printer-troubleshooting"
                            className="font-bold text-base rounded-2xl px-8 py-3 min-w-[140px] text-center bg-blue-700 text-white no-underline border border-blue-200 shadow-md transition-all duration-300 hover:bg-blue-900 hover:border-blue-400 focus:z-20 active:scale-95"
                        >
                            &larr; Previous
                        </Link>
                        <Link href="/step-by-step-setup-guide/"
                            className="font-bold text-base rounded-2xl px-8 py-3 min-w-[140px] text-center bg-blue-700 text-white no-underline border border-blue-200 shadow-md transition-all duration-300 hover:bg-blue-900 hover:border-blue-400 focus:z-20 active:scale-95"
                        >
                            Next &rarr;
                        </Link>
                    </div>
                </main>

                <FooterSetupGuide />
            </div >
        </>
    );
};

export default SetupGuide5;
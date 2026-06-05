import SetupSelect from "@/components/setupSelect/SetupSelect";

export const metadata = {
    title: "123.hp.com/setup | HP Printer Setup, Offline Fix & Troubleshooting",
    description: "Visit 123.hp.com/setup for HP printer setup help, fix HP printer offline issues, and troubleshoot HP printer errors with step-by-step guidance. Get help from HP certified technician.",
    robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    themeColor: "#ffffff",
    author: "Smart ePrint",
    canonical: "https://www.smarteprint.com/step-by-step-setup-guide/",
    openGraph: {
        type: "website",
        locale: "en_US",
        siteName: "Smart ePrint",
        title: "123.hp.com/setup | HP Printer Setup, Offline Fix & Troubleshooting",
        description: "Complete HP printer setup, fix HP printer offline problems, and troubleshoot HP printer issues with easy guided steps.",
        url: "https://www.smarteprint.com/step-by-step-setup-guide",
        images: [
            {
                url: "https://www.smarteprint.com/images/hp-step-by-step-setup-guide.jpg",
                alt: "HP printer setup and troubleshooting guide",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "123.hp.com/setup | HP Printer Setup & Offline Fix",
        description: "Set up your HP printer, fix offline issues, and troubleshoot common printer errors with guided steps.",
        images: ["https://www.smarteprint.com/images/hp-step-by-step-setup-guide.jpg"],
    },
};

export default function Page() {
    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "123.hp.com/setup | HP Printer Setup, Offline Fix & Troubleshooting",
        "url": "https://www.smarteprint.com/step-by-step-setup-guide/",
        "description": "Step-by-step guidance for HP printer setup, fixing HP printer offline problems, and troubleshooting HP printer issues.",
        "inLanguage": "en"
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.smarteprint.com/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "HP Printer Support",
                "item": "https://www.smarteprint.com/step-by-step-setup-guide/"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "123.hp.com/setup | HP Printer Setup, Offline Fix & Troubleshooting",
                "item": "https://www.smarteprint.com/step-by-step-setup-guide/"
            }
        ]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How do I complete HP printer setup using 123.hp.com/setup?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Open 123.hp.com/setup, select your printer model, download the recommended software, and follow the installation steps to complete HP printer setup."
                }
            },
            {
                "@type": "Question",
                "name": "How can I fix HP printer offline problems?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "To fix HP printer offline issues, check Wi-Fi or USB connectivity, restart the printer and computer, clear the print queue, and confirm the printer is set as the default device."
                }
            },
            {
                "@type": "Question",
                "name": "How do I troubleshoot HP printer errors?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "To troubleshoot HP printer issues, update drivers, inspect ink or toner status, run built-in diagnostics, and reconnect the printer to your network or computer."
                }
            }
        ]
    };

    const howtoSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "HP Printer Setup and Troubleshooting Guide",
        "description": "Learn how to complete HP printer setup, fix HP printer offline problems, and troubleshoot HP printer errors.",
        "step": [
            {
                "@type": "HowToStep",
                "name": "Open 123.hp.com/setup",
                "text": "Visit 123.hp.com/setup in your browser to begin the installation process."
            },
            {
                "@type": "HowToStep",
                "name": "Download hp printer software",
                "text": "Choose your HP printer model and download the recommended driver and setup software."
            },
            {
                "@type": "HowToStep",
                "name": "Connect the hp printer",
                "text": "Connect your HP printer using Wi-Fi, USB, or the wireless setup wizard."
            },
            {
                "@type": "HowToStep",
                "name": "Complete hp setup and test print",
                "text": "Finish installation, add the hp printer to your device, and print a test page."
            },
            {
                "@type": "HowToStep",
                "name": "Fix hp offline or printing issues",
                "text": "If the hp printer appears offline, restart devices, check connectivity, and update the printer driver."
            }
        ]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howtoSchema) }} />
            <SetupSelect />
        </>
    );
}

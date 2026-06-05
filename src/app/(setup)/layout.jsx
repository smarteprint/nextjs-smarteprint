import Script from 'next/script';
import ClientSetupLayout from './ClientSetupLayout';

export const metadata = {
    title: "Complete 123.hp.com/setup Steps | HP Printer Setup, Offline Fix & Troubleshooting",
    description: "Visit 123.hp.com/setup for HP printer setup help, fix HP printer offline issues, and troubleshoot HP printer errors with step-by-step guidance. Get help from HP certified technician.",
    robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    icons: {
        icon: "/favicon.png",
    },
};

export default function SetupLayout({ children }) {
    return (
        <>
            {/* Google Analytics */}
            <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-17673176797" strategy="afterInteractive" />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'AW-17673176797');
                    `,
                }}
            />

            {/* ClickCease Tracking */}
            <Script
                id="clickcease-tracking"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        var script = document.createElement('script');
                        script.async = true;
                        script.type = 'text/javascript';
                        var target = 'https://www.clickcease.com/monitor/stat.js';
                        script.src = target;
                        var elem = document.head;
                        elem.appendChild(script);
                    `,
                }}
            />
            <noscript>
                <a href='https://www.clickcease.com' rel='nofollow'><img src='https://monitor.clickcease.com' alt='ClickCease'/></a>
            </noscript>

            {/* JivoChat - Deferred until page is interactive */}
            <Script
                id="jivochat-deferred"
                strategy="lazyOnload"
                dangerouslySetInnerHTML={{
                    __html: `
                        if ('requestIdleCallback' in window) {
                            requestIdleCallback(function() {
                                var s = document.createElement('script');
                                s.src = '//code.jivosite.com/widget/jnhsn3P8fW';
                                s.async = true;
                                document.body.appendChild(s);
                            });
                        } else {
                            setTimeout(function() {
                                var s = document.createElement('script');
                                s.src = '//code.jivosite.com/widget/jnhsn3P8fW';
                                s.async = true;
                                document.body.appendChild(s);
                            }, 3000);
                        }
                    `,
                }}
            />

            <ClientSetupLayout>
                {children}
            </ClientSetupLayout>
        </>
    );
}

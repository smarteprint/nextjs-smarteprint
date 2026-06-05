"use client";
import Script from 'next/script';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import InstallationFailedPage from "@/components/setupSelect/InstallationFailedPage";

import api from '@/lib/api';

export default function Page() {
    const router = useRouter();
    const [showInstallationFailed, setShowInstallationFailed] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        api.get('/admin/header-visibility/')
            .then(res => {
                const data = res.data;
                const isEnabled = data.showInstallationFailed !== false;
                setShowInstallationFailed(isEnabled);
                setIsLoading(false);
                if (!isEnabled) {
                    router.replace('/step-by-step-setup-guide/');
                }
            })
            .catch(err => {
                console.error("Error fetching settings:", err);
                setIsLoading(false);
            });
    }, [router]);

    if (isLoading) return null;
    if (!showInstallationFailed) return null;

    return (
        <>
            <Script
                id="installation-failed-check"
                strategy="beforeInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        (function() {
                            const allowFailed = localStorage.getItem('showInstallationFailed') !== 'false';
                            if (!allowFailed) {
                                window.location.href = '/step-by-step-setup-guide';
                            }
                        })();
                    `,
                }}
            />
            <Script
                id="google-ads-conversion"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        gtag('event', 'conversion', {
                            'send_to': 'AW-17673176797/bYC-CP3yxLIbEN2NnetB'
                        });
                    `,
                }}
            />
            <InstallationFailedPage showInstallationFailed={showInstallationFailed} />
        </>
    );
}

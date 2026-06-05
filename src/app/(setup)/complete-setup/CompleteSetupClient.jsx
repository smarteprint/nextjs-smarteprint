"use client";
import Script from 'next/script';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CompleteSetup from "@/components/setupSelect/CompleteSetup";
import api from '@/lib/api';

export default function Page() {
    const router = useRouter();
    const [showCompleteSetup, setShowCompleteSetup] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        api.get('/admin/header-visibility/')
            .then(res => {
                const data = res.data || res;
                const isEnabled = data.showCompleteSetup !== false;
                setShowCompleteSetup(isEnabled);
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
    if (!showCompleteSetup) return null;

    return (
        <>
            <Script
                id="complete-setup-check"
                strategy="beforeInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        (function() {
                            const allowComplete = localStorage.getItem('showCompleteSetup') !== 'false';
                            if (!allowComplete) {
                                window.location.href = '/step-by-step-setup-guide';
                            }
                        })();
                    `,
                }}
            />
            <CompleteSetup showCompleteSetup={showCompleteSetup} />
        </>
    );
}

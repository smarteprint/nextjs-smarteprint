"use client";
import { Suspense, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import SetupHeader from '@/components/setupSelect/SetupHeader';

import api from '@/lib/api';

export default function ClientSetupLayout({ children }) {
    const pathname = usePathname();
    const [showHeader, setShowHeader] = useState(false);
    const [showLogo, setShowLogo] = useState(false);

    useEffect(() => {
        api.get('/admin/header-visibility/')
            .then(res => {
                const data = res.data;
                setShowHeader(data.showHeader === true);
                setShowLogo(data.showLogo === true);
            })
            .catch(err => console.error("Error fetching settings:", err));
    }, [pathname]); // Refetch on navigation just in case

    // Show header only on these specific routes, not on the initial setup guide or settings panel
    const showHeaderOnRoute = pathname.includes('/model-search') || 
                              pathname.includes('/complete-setup') || 
                              pathname.includes('/installation-failed');

    return (
        <Suspense fallback={<div className="flex items-center justify-center min-h-[60vh]"><div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div></div>}>
            {showHeader && showHeaderOnRoute && (
                <SetupHeader showLogo={showLogo} showHeader={showHeader} />
            )}
            {children}
        </Suspense>
    );
}

"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import InstallationFailedPage from "@/components/setupSelect/InstallationFailedPage";

export default function Page() {
    const router = useRouter();
    const [showInstallationFailed, setShowInstallationFailed] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || '/api';
        fetch(`${apiUrl}/admin/header-visibility`)
            .then(res => res.json())
            .then(json => {
                const data = json.data || json;
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

    return <InstallationFailedPage showInstallationFailed={showInstallationFailed} />;
}

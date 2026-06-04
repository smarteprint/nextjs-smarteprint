"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CompleteSetup from "@/components/setupSelect/CompleteSetup";

export default function Page() {
    const router = useRouter();
    const [showCompleteSetup, setShowCompleteSetup] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || '/api';
        fetch(`${apiUrl}/admin/header-visibility`)
            .then(res => res.json())
            .then(json => {
                const data = json.data || json;
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

    return <CompleteSetup showCompleteSetup={showCompleteSetup} />;
}

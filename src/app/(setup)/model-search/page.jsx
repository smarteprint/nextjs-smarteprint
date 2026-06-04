"use client";
import { useEffect, useState } from "react";
import ModelSearch from "@/components/setupSelect/ModelSearch";

export default function Page() {
    const [allowModelSearch, setAllowModelSearch] = useState(true);

    useEffect(() => {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || '/api';
        fetch(`${apiUrl}/admin/header-visibility`)
            .then(res => res.json())
            .then(json => {
                const data = json.data || json;
                setAllowModelSearch(data.allowModelSearch !== false);
            })
            .catch(err => console.error("Error fetching settings:", err));
    }, []);

    return <ModelSearch allowModelSearch={allowModelSearch} />;
}

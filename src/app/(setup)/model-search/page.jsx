"use client";
import { useEffect, useState } from "react";
import ModelSearch from "@/components/setupSelect/ModelSearch";
import api from '@/lib/api';

export default function ModelSearchPage() {
    const [allowModelSearch, setAllowModelSearch] = useState(true);

    useEffect(() => {
        api.get('/admin/header-visibility/')
            .then(res => {
                const data = res.data;
                if (data.allowModelSearch === false) {
                    setAllowModelSearch(false);
                }
            })
            .catch(err => console.error("Error fetching settings:", err));
    }, []);

    return <ModelSearch allowModelSearch={allowModelSearch} />;
}

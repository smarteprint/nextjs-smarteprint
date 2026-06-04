"use client";
import { useState, useEffect, useRef } from "react";
import SettingsManagement from "@/components/setupSelect/SettingsManagement";
import SimpleAdminLogin from "@/components/setupSelect/SimpleAdminLogin";
import api from "@/lib/api";

export default function Page() {
    // ─── Admin auth state ─────────────────────────────────────────────
    const [adminInfo, setAdminInfo] = useState(null);
    const [loginError, setLoginError] = useState('');

    // ─── Settings state (mirrors frontend App.jsx) ─────────────────────
    const [showHeader, setShowHeader] = useState(false);
    const [showLogo, setShowLogo] = useState(false);
    const [allowModelSearch, setAllowModelSearch] = useState(true);
    const [showInstallationFailed, setShowInstallationFailed] = useState(true);
    const [showCompleteSetup, setShowCompleteSetup] = useState(true);
    const [adminStatus, setAdminStatus] = useState('');
    const [isLoadingSettings, setIsLoadingSettings] = useState(true);

    const intervalRef = useRef(null);

    // ─── Load adminInfo from localStorage on client ────────────────────
    useEffect(() => {
        const stored = localStorage.getItem('setupAdminInfo');
        if (stored) {
            try { setAdminInfo(JSON.parse(stored)); } catch {}
        }
    }, []);

    // ─── Fetch settings on mount + poll every 10s ─────────────────────
    useEffect(() => {
        const fetchSettings = () => {
            api.get('/admin/header-visibility/')
                .then(res => {
                    const data = res.data;
                    setShowHeader(!!data.showHeader);
                    setShowLogo(!!data.showLogo);
                    setAllowModelSearch(data.allowModelSearch !== false);
                    setShowInstallationFailed(data.showInstallationFailed !== false);
                    setShowCompleteSetup(data.showCompleteSetup !== false);
                    setIsLoadingSettings(false);
                })
                .catch(err => {
                    console.error('Settings fetch failed:', err);
                    setIsLoadingSettings(false);
                });
        };

        fetchSettings();
        intervalRef.current = setInterval(fetchSettings, 10000);
        return () => clearInterval(intervalRef.current);
    }, []);

    // ─── Login handler ────────────────────────────────────────────────
    const handleLogin = (username, password) => {
        setLoginError('');
        api.post('/admin/login-simple/', { username, password })
            .then(res => {
                const data = res.data;
                if (data.token) {
                    setAdminInfo(data);
                    localStorage.setItem('setupAdminInfo', JSON.stringify(data));
                } else {
                    setLoginError('Invalid credentials.');
                }
            })
            .catch(err => setLoginError(err?.message || 'Login failed.'));
    };

    // ─── Centralized settings update (mirrors frontend App.jsx) ───────
    const updateSettings = (updatedFields) => {
        const token = adminInfo?.token;
        if (!token) {
            setAdminStatus('Failed to update. Please log in again.');
            return;
        }
        setAdminStatus('');

        // Optimistically update local state immediately
        if (updatedFields.showHeader !== undefined) setShowHeader(updatedFields.showHeader);
        if (updatedFields.showLogo !== undefined) setShowLogo(updatedFields.showLogo);
        if (updatedFields.allowModelSearch !== undefined) setAllowModelSearch(updatedFields.allowModelSearch);
        if (updatedFields.showInstallationFailed !== undefined) setShowInstallationFailed(updatedFields.showInstallationFailed);
        if (updatedFields.showCompleteSetup !== undefined) setShowCompleteSetup(updatedFields.showCompleteSetup);

        api.post('/admin/header-visibility/', {
            showHeader, showLogo, allowModelSearch,
            showInstallationFailed, showCompleteSetup,
            ...updatedFields  // override with the changed field
        }, {
            headers: { 'Authorization': `Bearer ${token}` }
        })
        .then(res => {
            const data = res.data;
            if (data.success || data.message === "Settings updated") { // Note: interceptor unwraps successResponse, but just in case
                setAdminStatus('Settings updated successfully.');
                setTimeout(() => setAdminStatus(''), 3000);
            } else {
                setAdminStatus('Failed to update settings.');
            }
        })
        .catch(err => setAdminStatus(err?.message || 'Failed to update settings.'));
    };

    // ─── Show login if not authenticated ──────────────────────────────
    if (!adminInfo) {
        return <SimpleAdminLogin onLogin={handleLogin} error={loginError} />;
    }

    // ─── Settings management panel with all props ──────────────────────
    return (
        <SettingsManagement
            showHeader={showHeader}
            setShowHeader={(val) => updateSettings({ showHeader: val })}
            showLogo={showLogo}
            setShowLogo={(val) => updateSettings({ showLogo: val })}
            allowModelSearch={allowModelSearch}
            setAllowModelSearch={(val) => updateSettings({ allowModelSearch: val })}
            showInstallationFailed={showInstallationFailed}
            setShowInstallationFailed={(val) => updateSettings({ showInstallationFailed: val })}
            showCompleteSetup={showCompleteSetup}
            setShowCompleteSetup={(val) => updateSettings({ showCompleteSetup: val })}
            adminStatus={adminStatus}
        />
    );
}

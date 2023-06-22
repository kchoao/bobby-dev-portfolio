"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    const isDarkMode = theme === "dark"? true:false;
    const toggleDarkMode = (checked: boolean) => {
        checked? setTheme("dark"):setTheme("light");
    };

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <>
            <DarkModeSwitch
                // style={{ marginBottom: '2rem' }}
                checked={isDarkMode}
                onChange={toggleDarkMode}
                size={'2rem'}
            />
        </>
    );
};

export default ThemeSwitcher;
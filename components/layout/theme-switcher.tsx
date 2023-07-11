"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    const isDarkMode = theme === "dark"
    const toggleDarkMode = (checked: boolean) => {
        checked? setTheme("dark"):setTheme("light");
    };

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-6"/>;
    }

    return (
        <>
            <DarkModeSwitch
                aria-label="Dark Mode Switcher"
                moonColor={"#FAFAFA"}
                sunColor={"#27272A"}
                checked={isDarkMode}
                onChange={toggleDarkMode}
                size={'1.5rem'}
            />
        </>
    );
};

export default ThemeSwitcher;
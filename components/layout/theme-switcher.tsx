"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme, systemTheme } = useTheme();

    const isDarkMode = theme === "dark"? true:false;
    const toggleDarkMode = (checked: boolean) => {
        checked? setTheme("dark"):setTheme("light");
    };

    useEffect(() => {
        setMounted(true);
        setTheme('dark');
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <>
            <DarkModeSwitch
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
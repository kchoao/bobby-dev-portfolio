"use client";
import { ThemeProvider as NextThemeProvider} from "next-themes";
import { useState, useEffect, ReactNode } from "react";

export default function ThemeProvider({ children }: { children: ReactNode }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <>{children}</>;
    }

    return (
    <NextThemeProvider 
        // enableSystem={false} 
        defaultTheme={'dark'}
        attribute="class">
        {children}
    </NextThemeProvider>);
}
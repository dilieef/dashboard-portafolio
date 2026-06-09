"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

function getInitialTheme() {
    if (typeof window === "undefined") {
        return "light";
    }

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        return savedTheme;
    }

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    return prefersDark ? "dark" : "light";
}

export default function ThemeToggle() {
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme]);

    function toggleTheme() {
        const nextTheme = theme === "dark" ? "light" : "dark";

        setTheme(nextTheme);
        localStorage.setItem("theme", nextTheme);
    }

    return (
        <button
            type="button"
            onClick={toggleTheme}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#1C3044] shadow-md transition hover:bg-slate-100 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
            aria-label="Cambiar tema"
        >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    );
}
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Briefcase, FileText, GitBranch, Home, Menu, Mail, User, X } from "lucide-react";
import { useState } from "react";

const navItems = [
    { label: "Dashboard", href: "/", icon: Home },
    { label: "Sobre mi", href: "/about", icon: User },
    { label: "Proyectos", href: "/projects", icon: Briefcase },
    { label: "Roadmap", href: "/roadmap", icon: FileText },
    { label: "GitHub", href: "/github", icon: GitBranch },
    { label: "Contacto", href: "/settings", icon: Mail },
];

export default function Sidebar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Botón hamburguesa - solo visible en móvil */}
            <button
                onClick={() => setIsOpen(true)}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-xl bg-[#1C3044] text-white shadow-lg"
            >
                <Menu size={22} />
            </button>

            {/* Overlay oscuro al abrir el menú */}
            {isOpen && (
                <div
                    className="lg:hidden fixed inset-0 z-40 bg-black/50"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
            fixed top-0 left-0 z-50 h-full w-[280px] bg-[#1C3044] text-[#8AAFC1] p-6 
            transition-transform duration-300
            ${isOpen ? "translate-x-0" : "-translate-x-full"}
            lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 lg:shrink-0 lg:p-8 lg:overflow-y-auto
`           }>
                <div className="flex items-center justify-between mb-10">
                    <h1 className="text-2xl font-bold text-white">
                        Dilieef Dev
                    </h1>
                    {/* Botón cerrar - solo visible en móvil */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="lg:hidden text-[#8AAFC1] hover:text-white"
                    >
                        <X size={22} />
                    </button>
                </div>

                <nav className="space-y-2">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={`p-3 rounded-xl flex items-center gap-3 transition-all duration-300 ${
                                    isActive
                                        ? "bg-zinc-700 text-white"
                                        : "hover:bg-zinc-700"
                                }`}
                            >
                                <Icon size={20} />
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>
            </aside>
        </>
    );
}
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Briefcase, FileText, GitBranch, Home, Settings, User} from "lucide-react";

const navItems = [
    {
        label: "Dashboard",
        href: "/",
        icon: Home,
    },
    {
        label: "Sobre mi",
        href: "/about",
        icon: User,
    },
    {
        label: "Proyectos",
        href: "/projects",
        icon: Briefcase,
    },
    {
        label: "Roadmap",
        href: "/roadmap",
        icon: FileText,
    },
    {
        label: "GitHub",
        href: "/github",
        icon: GitBranch,
    },
    {
        label: "Settings",
        href: "/settings",
        icon: Settings,
    },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-full lg:w-[280px] lg:min-h-screen shrink-0 bg-[#1C3044] text-[#8AAFC1] p-6 lg:p-8">
            <h1 className="text-2xl font-bold mb-10">
                Dilieef Dev
            </h1>

            <nav className="grid grid-cols-2 gap-3 lg:block lg:space-y-4">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`p-3 rounded-xl cursor-pointer flex items-center gap-3 transition-all duration-300 ${
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
    );
}

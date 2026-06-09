import Sidebar from "@/components/Layout/Sidebar";
import Topbar from "@/components/Layout/Topbar";

export default function DashboardLayout({ title, description, children }) {
    return (
        <main className="min-h-screen bg-[#E2E8F0] text-[#0F172A] flex !flex-row transition-colors dark:bg-[#0F172A] dark:text-slate-100">
            <Sidebar />

            <section className="flex flex-col flex-1 p-4 lg:p-8 lg:pl-8 pl-16">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-[#1C3044] dark:text-white lg:text-4xl">
                            {title}
                        </h1>
                        <p className="mt-2 text-sm text-[#6B8BA4] dark:text-slate-400">
                            {description}
                        </p>
                    </div>
                    <Topbar />
                </div>

                {children}
            </section>
        </main>
    );
}
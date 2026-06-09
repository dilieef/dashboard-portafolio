import Sidebar from "@/components/Layout/Sidebar";
import Topbar from "@/components/Layout/Topbar";

export default function DashboardLayout({ title, description, children }) {
    return (
        <main className="min-h-screen bg-[#E2E8F0] text-[#0F172A] flex !flex-col lg:!flex-row transition-colors dark:bg-[#0F172A] dark:text-slate-100">
            <Sidebar />

            <section className="flex flex-col flex-1 p-4 md:p-8">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-[#1C3044] dark:text-white md:text-4xl">
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
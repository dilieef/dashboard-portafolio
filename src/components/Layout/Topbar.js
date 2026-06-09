import ThemeToggle from "@/components/Layout/ThemeToggle";
export default function Topbar() {
    return (
        <header className="flex items-center justify-end gap-5 w-full">
            <input
                type="text"
                placeholder="Buscar..."
                className="w-full md:w-64 rounded-xl bg-white px-5 py-4 text-sm text-[#1C3044] shadow-md outline-none placeholder:text-slate-400"
            />

            <ThemeToggle />

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1C3044] text-white font-bold shadow-md">
                D
            </div>
        </header>
    );
}
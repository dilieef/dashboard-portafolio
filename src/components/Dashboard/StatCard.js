export default function StatCard({ title, value, description, icon }) {
    const Icon = icon;

    return (
        <div className="
            bg-[#1C3044]
            p-6
            rounded-3xl
            shadow-lg
            hover:scale-105
            transition-all
            duration-300
        ">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-[#9FB4C7] text-lg">
                        {title}
                    </p>
                    <h2 className="text-3xl font-bold text-white mt-2">
                        {value}
                    </h2>
                    <p className="text-green-400 mt-3">
                        {description}
                    </p>
                </div>
                <div className="bg-[#1C3044] dark:bg-[#1E293B] p-6 rounded-3xl shadow-lg hover:scale-105 transition-all duration-300">
                    {Icon && <Icon size={24} />}
                </div>
            </div>
        </div>
    );
}
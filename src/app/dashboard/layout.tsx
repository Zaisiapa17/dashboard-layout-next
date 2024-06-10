export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section className="grid grid-rows-6 grid-cols-6 w-screen h-screen">
            <header className="bg-red-400 col-start-2 col-end-7">
                <div className="w-full h-16  bg-white">

                </div>
            </header>
            <nav className="bg-black row-start-1 row-end-7">
                navbar
            </nav>
            <main className="bg-slate-500 row-start-2 row-end-7 col-start-2 col-end-7 overflow-y-auto scrollbar-none">
            {children}
            </main>
        </section>
    )
}
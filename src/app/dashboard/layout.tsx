import { ScrollArea } from "@/components/ui/scroll-area"

export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section className="grid grid-rows-10 grid-cols-16 w-screen h-screen">
            <header className="bg-red-400 row-start-1 row-end-2 col-start-2 col-end-17">
                <div className="w-full h-10  bg-white">

                </div>
            </header>
            <nav className="bg-black row-start-1 row-end-11 col-start-1 col-end-2">
                navbar
            </nav>
            <main className="bg-slate-500 row-start-2 row-end-11 col-start-2 col-end-17">
                <ScrollArea className="h-full w-full">
                    {children}
                </ScrollArea>
            </main>
        </section>
    )
}
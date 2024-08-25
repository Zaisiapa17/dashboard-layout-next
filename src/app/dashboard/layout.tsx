"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useState } from "react"
import { FiMenu } from "react-icons/fi"
import { IoSearch } from "react-icons/io5"
import { LuUserCircle } from "react-icons/lu"

export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {

    const [openSidebar, setOpenSidebar] = useState<boolean>(true)

    return (
        <div className="w-screen">
            <nav className={`bg-lime-400 hidden lg:inline float-left ${openSidebar ? "w-[20vw]" : "w-[6vw]"} w-1/5 h-screen transition-all duration-300`}>
                <div className="flex flex-col items-center h-screen">
                    <div className="bg-indigo-500 flex items-center justify-center w-full h-[60px] border-b">
                        <h1 className={`transition-all duration-300 ${openSidebar ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}>
                            Webzet.dev
                        </h1>
                    </div>
                    <div className="bg-slate-400 w-10/12 h-4/5">
                        <ScrollArea className="h-full">
                            <div className="h-[1000px]">
                                main nav
                            </div>
                        </ScrollArea>
                    </div>
                    <div className="bg-indigo-500 flex items-center justify-center w-full h-[60px] border-t mt-auto">
                        <h1 className={`transition-all duration-300 ${openSidebar ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}>
                            Webzet.dev
                        </h1>
                    </div>
                </div>
            </nav>
            <header className="bg-orange-500 block h-[6vh] lg:h-[60px] lg:w-screen transition-all duration-300">
                <div className="flex h-full items-center justify-between gap-4 border-b bg-muted/40 px-4 lg:px-6">
                    <Button
                        variant="outline"
                        size="icon"
                        className="shrink-0 hidden lg:flex"
                        onClick={() => setOpenSidebar(!openSidebar)}
                    >
                        <FiMenu size={20} />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="secondary" size="icon" className="rounded-full">
                                <LuUserCircle size={20} />
                                <span className="sr-only">Toggle user menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </header>
            <main className="bg-yellow-400 h-[calc(100vh-6vh)] lg:h-[calc(100vh-60px)] transition-all duration-300">
                <ScrollArea className="h-full">
                    {children}
                </ScrollArea>
            </main>
        </div>
    )
}

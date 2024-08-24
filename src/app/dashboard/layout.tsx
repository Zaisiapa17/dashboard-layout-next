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
        <div className="min-h-screen">
        <nav className="bg-lime-400 hidden lg:inline float-left w-1/5 h-screen">
            navbar
        </nav>
        <header className="bg-orange-500 block w-full h-[6vh] lg:h-[9vh] lg:w-4/5 lg:ml-[20%]">
            header
        </header>
        <main className="bg-yellow-400 block h-[94vh] lg:h-[91vh] lg:w-4/5 lg:ml-[20%]">
            {children}
        </main>
        </div>
    )
}
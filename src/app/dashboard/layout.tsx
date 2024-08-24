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
        <>
        <nav>
            navbar
        </nav>
        <header>
            header
        </header>
        <main>
            {children}
        </main>
        </>
    )
}
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
        <section className="grid grid-rows-12 grid-cols-16 w-screen h-screen">
            <header className="bg-red-400 row-start-1 row-end-2 col-start-1 md:col-start-1 lg:col-start-4 col-end-17">
                <div className="flex h-full items-center gap-4 border-b bg-muted/40 px-4 lg:px-6">
                    {/* <NavbarMobile
                        activeItem={activeItem}
                        role={userRole}
                        onSetActiveItem={handleSetActiveItem}
                    /> */}
                    <Button
                        variant="outline"
                        size="icon"
                        className="shrink-0 hidden lg:flex"
                        onClick={() => setOpenSidebar(!openSidebar)}
                    >
                        <FiMenu size={20} />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                    <div className="w-full flex-1">
                        <form>
                            <div className="relative">
                                <IoSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="search"
                                    placeholder="Search products..."
                                    className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                                />
                            </div>
                        </form>
                    </div>
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
            <nav className="bg-yellow-200 hidden lg:inline-block lg:row-start-1 lg:row-end-13 lg:col-start-1 lg:col-end-4">
                navbar
            </nav>
            <main className="bg-slate-500 row-start-2 row-end-13 col-start-1 md:col-start-1 lg:col-start-4 col-end-17">
                <ScrollArea className="h-full w-full">
                    {children}
                </ScrollArea>
            </main>
        </section>
    )
}
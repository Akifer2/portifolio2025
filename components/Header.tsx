"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "./ui/button"
import Logo from "@/components/Logo"
import { ModeToggler } from "./Mode-toggler"
import { cn } from "@/lib/utils"

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const navItems = ["Home", "About", "Projects"]

    return (
        <header
            className={cn(
                "sticky top-0 z-50 w-full",
                "bg-background/80 backdrop-blur-md",
                "border-b border-border/40",
                "transition-all duration-200 ease-in-out",
            )}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-2">
                    {" "}
                    {/* Changed py-4 to py-2 */}
                    <Logo className="text-primary h-12 w-12 cursor-pointer" />
                    <nav className="hidden md:flex flex-1 justify-center">
                        <ul className="flex space-x-6">
                            {navItems.map((item) => (
                                <li
                                    key={item}
                                    className={cn(
                                        "text-md capitalize cursor-pointer relative",
                                        "text-muted-foreground hover:text-primary dark:hover:text-primary-foreground",
                                        "transition-all duration-200",
                                        "after:content-[''] after:absolute after:bottom-0 after:left-0",
                                        "after:h-[2px] after:w-0 after:bg-primary",
                                        "after:opacity-0 after:transition-all after:duration-300",
                                        "hover:after:w-full hover:after:opacity-100",
                                    )}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <button
                        className="md:hidden text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(true)}
                        aria-label="Open menu"
                    >
                        <Menu size={28} />
                    </button>
                    <div className="hidden md:flex space-x-4">
                        <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                            Contact me
                        </Button>
                        <ModeToggler />
                    </div>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div
                    className={cn(
                        "fixed inset-0 z-50 flex flex-col",
                        "bg-background/80 backdrop-blur-md",
                        "p-6 md:hidden",
                        "animate-in fade-in slide-in-from-top-4",
                        "space-y-6",
                    )}
                >
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="self-end mb-4 text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Close menu"
                    >
                        <X size={28} />
                    </button>
                    <nav className="flex items-center justify-center flex-1">
                        <ul className="flex flex-col items-center space-y-6">
                            {navItems.map((item) => (
                                <li
                                    key={item}
                                    className={cn(
                                        "text-xl capitalize cursor-pointer",
                                        "text-muted-foreground hover:text-primary dark:hover:text-primary-foreground",
                                        "transition-all duration-200",
                                    )}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="flex w-full items-center space-x-4">
                        <Button
                            variant="outline"
                            className="flex-1 hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                            Contact me
                        </Button>
                        <ModeToggler />
                    </div>
                </div>
            )}
        </header>
    )
}


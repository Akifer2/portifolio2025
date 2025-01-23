"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "./ui/button"
import Logo from "./logo"
import { ModeToggle } from "./mode-togle"

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const navItems = ["Home", "About", "Portifolio"]

    return (
        <header
            className="
                sticky
                top-0
                z-50
                flex
                w-full
                items-center
                justify-between
                p-5
                bg-background
                backdrop-blur-sm
            "
        >
            <Logo className="text-primary h-12 w-12 cursor-pointer" />

            <nav className="hidden md:flex flex-1 justify-center">
                <ul className="flex space-x-6">
                    {navItems.map((item) => (
                        <li
                            key={item}
                            className="
                                text-md
                                text-muted-foreground
                                capitalize
                                cursor-pointer
                                relative
                                transition-all
                                after:content-['']
                                after:absolute
                                after:bottom-0
                                after:left-0
                                after:h-[2px]
                                after:w-0
                                after:bg-primary
                                after:opacity-0
                                after:transition-all
                                after:duration-300
                                hover:after:w-full
                                hover:after:opacity-100
                                hover:text-primary
                                dark:hover:text-primary-foreground
                            "
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </nav>

            <button
                className="md:hidden text-muted-foreground"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Abrir menu"
            >
                <Menu size={28} />
            </button>

            <div className="hidden md:flex space-x-4">
                <Button
                    variant="outline"
                    className="hover:border-primary dark:hover:border-primary/50"
                >
                    Contact me
                </Button>
                <ModeToggle />
            </div>

            {isMobileMenuOpen && (
                <div
                    className="
                        fixed
                        inset-0
                        z-50
                        flex
                        flex-col
                        bg-background
                        p-6
                        md:hidden
                        animate-in
                        fade-in
                        slide-in-from-top-4
                        space-y-6
                    "
                >
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="self-end mb-4 text-muted-foreground"
                        aria-label="Fechar menu"
                    >
                        <X />
                    </button>
                    <ul className="
                        flex
                        items-center
                        justify-center 
                        flex-1 
                    ">
                        <div className="flex flex-col items-left space-y-6">
                            {navItems.map((item) => (
                                <li
                                    key={item}
                                    className="
                                    text-md
                                    text-muted-foreground
                                    capitalize
                                    cursor-pointer
                                    relative
                                    transition-all
                                    hover:text-primary
                                    dark:hover:text-primary-foreground
                                "
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item}
                                </li>
                            ))}
                        </div>
                    </ul>
                    <div className="flex w-full items-center space-x-2">
                        <Button
                            variant="outline"
                            className="
                                flex-1 
                                hover:border-primary 
                                dark:hover:border-primary/50
                            "
                        >
                            Contact me
                        </Button>
                        <div>
                            <ModeToggle />
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}

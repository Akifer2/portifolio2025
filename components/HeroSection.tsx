// components/HeroSection.tsx

"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ArrowRight, GitlabIcon as GitHub, Linkedin } from "lucide-react"

export default function HeroSection() {
    const { theme, systemTheme } = useTheme()
    const [currentTheme, setCurrentTheme] = useState<string | undefined>(undefined)

    useEffect(() => {
        setCurrentTheme(theme === "system" ? systemTheme : theme)
    }, [theme, systemTheme])

    const scrollToProjects = () => {
        const projectsSection = document.getElementById("projects")
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: "smooth" })
            projectsSection.focus({ preventScroll: true })
        }
    }

    return (
        <section
            className={cn(
                "relative w-full min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden",
                currentTheme === "dark"
                    ? "bg-gradient-to-br from-primary/50 to-black"
                    : "bg-gradient-to-br from-primary/10 to-white",
            )}
        >
            <BackgroundAnimation />
            <div className="z-10 text-center px-4 py-12">
                <GlitchText currentTheme={currentTheme} />
                <Introduction currentTheme={currentTheme} />
                <CallToAction onViewProjects={scrollToProjects} currentTheme={currentTheme} />
            </div>
        </section>
    )
}

function BackgroundAnimation() {
    return (
        <div className="absolute inset-0 overflow-hidden">
            <motion.div
                className="absolute inset-0 opacity-10"
                animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF0000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: "60px 60px",
                }}
            />
        </div>
    )
}

function Introduction({ currentTheme }: { currentTheme: string | undefined }) {
    return (
        <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className={cn("text-xl mb-8 max-w-2xl mx-auto", currentTheme === "dark" ? "text-gray-200" : "text-gray-700")}
        >
            Passionate about creating robust and user-friendly web applications. With expertise in both frontend and backend
            technologies, I bring ideas to life.
        </motion.p>
    )
}

function CallToAction({
    onViewProjects,
    currentTheme
}: {
    onViewProjects: () => void,
    currentTheme: string | undefined
}) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex justify-center space-x-4"
        >
            <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={onViewProjects}
            >
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
                variant="outline"
                className={cn(
                    "bg-transparent",
                    currentTheme === "dark"
                        ? "border-primary text-primary-foreground hover:bg-primary/20"
                        : "border-primary text-primary hover:bg-primary/10",
                )}
            >
                <GitHub className="mr-2 h-4 w-4" /> GitHub
            </Button>
            <Button
                variant="outline"
                className={cn(
                    "bg-transparent",
                    currentTheme === "dark"
                        ? "border-primary text-primary-foreground hover:bg-primary/20"
                        : "border-primary text-primary hover:bg-primary/10",
                )}
            >
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </Button>
        </motion.div>
    )
}

function GlitchText({ currentTheme }: { currentTheme: string | undefined }) {
    const words = ["back-end", "front-end", "fullstack"]
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    const handleClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length)
    }

    const variants = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: [0.25, 0.1, 0.25, 1.0],
            },
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.3,
                ease: [0.25, 0.1, 0.25, 1.0],
            },
        },
    }

    return (
        <div>
            <h1
                className={cn(
                    "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl smooth-font cursor-pointer mb-6",
                    currentTheme === "dark" ? "text-white" : "text-gray-900",
                )}
            >
                <div className="inline-flex items-center">
                    <div
                        className="relative"
                        style={{
                            width: "220px",
                            height: "1.2em",
                            lineHeight: "1.2em",
                        }}
                    >
                        <motion.span
                            key={words[currentIndex]}
                            className="cyberpunk absolute inset-0 whitespace-nowrap"
                            style={{
                                transform: "translateZ(0)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-start",
                            }}
                            variants={variants}
                            initial="hidden"
                            animate="show"
                            exit="exit"
                            onClick={handleClick}
                        >
                            <span className="text-primary">{words[currentIndex]}</span>
                        </motion.span>
                    </div>
                    <div className={cn("ml-4 overflow-visible", currentTheme === "dark" ? "text-white" : "text-gray-900")}>
                        Developer
                    </div>
                </div>
            </h1>
        </div>
    )
}

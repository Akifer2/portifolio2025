"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export default function HeroSection() {
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
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl smooth-font cursor-pointer">
            <div className="inline-flex items-center">
                <div
                    className="relative"
                    style={{
                        width: "220px",
                        height: "1.2em",
                        lineHeight: "1.2em",
                    }}
                >
                    <AnimatePresence initial={false} mode="wait">
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
                    </AnimatePresence>
                </div>
                <div className="text-white ml-4 overflow-visible">Developer</div>
            </div>
        </h1>
    )
}


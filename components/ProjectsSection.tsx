"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiReact, SiLeaflet, SiLaravel } from "@icons-pack/react-simple-icons"
import Image from "next/image"
import BuscalogLogo from "../public/assets/BuscalogLogo.png"
import { Separator } from "./ui/separator"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

interface Badge {
    name: string,
    icon: React.ReactNode
}

const ProjectCard = () => {

    const { theme } = useTheme();

    const badges: Badge[] = [{
        name: "React",
        icon: <SiReact key="react" />,
    },
    {
        name: "Leaflet",
        icon: < SiLeaflet key="leaflet" />,
    },
    {
        name: "Laravel",
        icon: < SiLaravel key="laravel" />
    }]

    return (
        <motion.div
            className="relative overflow-hidden rounded-3xl bg-card shadow-md"
            whileHover={{ scale: 1.02 }
            }
            transition={{ duration: 0.2 }}
        >
            <div className="aspect-[16/9] overflow-hidden relative bg-white">
                <motion.div
                    className="absolute inset-0"
                    animate={{
                        backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 20, ease: "linear" }}
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2306B6D4' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: "60px 60px",
                        opacity: 0.25,
                    }}
                />

                {/* Logo Container */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                    <Image
                        src={BuscalogLogo}
                        alt="Buscalog Logo"
                        width={400}
                        height={100}
                        className="object-contain max-h-full"
                    />
                </div>
            </div>

            <div className="relative w-full p-6 space-y-4 bg-gradient-to-t from-background via-background to-transparent">
                <div>
                    <h3 className="text-2xl font-bold text-card-foreground mb-1">Buscalog</h3>
                    <p className="text-sm text-muted-foreground">Buscalog &copy; 2023</p>
                </div>

                <Separator />

                <div className="space-y-4">
                    <div className="flex flex-col">
                        <p className="font-2xl italic font-bold text-cyan-600">
                            Lead Front-End Developer
                        </p>
                        <p className="text-sm text-muted-foreground text-">
                            from late april 2024 to 2025
                        </p>
                    </div>
                    <p className="text-card-foreground">

                        During my tenure at Buscalog, I served as the primary front-end developer for a major project, where I honed my skills in creating dynamic and responsive user interfaces. I collaborated closely with cross-functional teams to ensure seamless integration of design and functionality, optimized website performance, and implemented best practices in front-end development. This experience significantly deepened my expertise in modern web technologies and project leadership.

                    </p>
                </div>

                <div className="flex flex-col">
                    <p className="text-md text-muted-foreground font-semibold mb-2">Technologies Used</p>
                    <ul className="flex flex-row gap-4 items-center">
                        {badges.map(({ name, icon }, key) => (
                            <li key={key}>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="rounded-full hover:bg-cyan-500/20 hover:border-cyan-500"
                                >
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <span className="text-cyan-500">{icon}</span>
                                            </TooltipTrigger>
                                            <TooltipContent className={cn(theme === "dark" ? "bg-black" : "bg-gray-50 text-black", "text-sm font-bold")}>
                                                {name}
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex items-center justify-between pt-2">
                    <Button
                        variant="outline"
                        size="sm"
                        className="bg-background/50 backdrop-blur-sm border-cyan-500/50 hover:bg-cyan-500/20 text-cyan-500"
                    >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Project
                    </Button>
                </div>
            </div>
        </motion.div >
    )
}

export default function ProjectsSection() {

    const { theme } = useTheme();

    return (
        <section id="projects" tabIndex={-1} className={cn(theme === "light" ? "bg-white" : "bg-muted/25", "py-16")}>
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold text-center mb-12"
                >
                    <div className="inline-flex space-x-2">
                        ✨
                        <Separator orientation="vertical" />
                        <span>
                            Featured Project
                        </span>
                    </div>

                </motion.h2>


                <div className="max-w-4xl mx-auto">
                    <ProjectCard />
                </div>
            </div>
        </section>
    )
}


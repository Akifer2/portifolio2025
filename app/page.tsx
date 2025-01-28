import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import ProjectsSection from "@/components/ProjectsSection"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ProjectsSection />
      </main>
    </div>
  )
}


import Navbar           from "@/components/layout/Navbar";
import Footer           from "@/components/layout/Footer";
import ScrollProgress   from "@/components/layout/ScrollProgress";
import SideNav          from "@/components/layout/SideNav";
import HeroSection      from "@/components/sections/HeroSection";
import SkillsSection    from "@/components/sections/SkillsSection";
import CaseStudySection from "@/components/sections/CaseStudySection";
import WorkflowsSection from "@/components/sections/WorkflowsSection";
import ProjectsSection  from "@/components/sections/ProjectsSection";
import AboutSection     from "@/components/sections/AboutSection";
import ContactSection   from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <SideNav />
      <main>
        <HeroSection />
        <SkillsSection />
        <CaseStudySection />
        <WorkflowsSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

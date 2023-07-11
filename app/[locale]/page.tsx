import Experience from "./section/experience.section";
import ThisSite from "./section/this-site.section";
import Project from "./section/project.section";
import Stack from "./section/stack.section";
import Hero from "./section/hero.section";


export default function Home() {
    
    return(
        <>
            {/* Hero section */}
            <Hero/>
            {/* Tech Stack section */}
            <Stack/>
            {/* Experience section */}
            <Experience/>
            {/* Project section */}
            <Project/>
            {/* About this web */}
            <ThisSite/>
        </>
    )
}

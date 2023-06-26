import WebVitals from "@/components/home/web-vitals";
import FadeInWhenVisible from "@/components/shared/fade-in-when-visible";
import Github from "@/components/shared/icons/github";
import Linkedin from "@/components/shared/icons/linkedin";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import Balancer from "react-wrap-balancer";
import Me from "@/public/image/me.webp"
import WebProject from "@/public/image/web-project.jpg"
import AppProject from "@/public/image/app-project.png"
import Nextjs from "@/components/shared/icons/nextjs";
import React from "@/components/shared/icons/react";
import Typescript from "@/components/shared/icons/typescript";
import Tailwind from "@/components/shared/icons/tailwind";
import Nodejs from "@/components/shared/icons/nodejs";
import Expressjs from "@/components/shared/icons/expressjs";


export default function Home() {
    return(
        <>
            {/* Hero section */}
            <div id="about" className="h-fit w-full pt-12 lg:py-12 bg-neutral-100 dark:bg-neutral-800">
                <div className="mx-auto max-w-7xl px-4 py-12 lg:py-24 flex flex-col-reverse lg:flex-row gap-x-12">
                    <div className="self-center lg:basis-3/4">
                        {/* <h1 className="
                        text-center lg:text-left text-2xl/relaxed lg:text-6xl/relaxed
                        from-purple-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent font-extrabold
                        "> */}
                        <h1 className="
                        text-center font-hero lg:text-left text-2xl/relaxed lg:text-8xl/relaxed text-amber-500 dark:text-amber-400  tracking-wider font-extrabold
                        ">
                            <Balancer >
                            Full-Stack React Developer <span role="img" aria-label="rocket emoji">🚀</span>
                            </Balancer>
                        </h1>
                        <div className="text-center lg:text-left lg:text-2xl/relaxed mt-6">
                            <Balancer ratio={0.5}>
                                Hello! I&apos;m Bobby Ho. A passionate Full-stack React Developer from Hong Kong 
                                {/* <span className={`fi fi-hk border border-black object-cover`}/> who love exploring nature and learning new things  */}
                                <span role="img" aria-label="fire emoji"> 🔥</span>
                            </Balancer>
                        </div>
                        <div className="mt-6 lg:mt-12 flex space-x-8 justify-center lg:justify-start">
                            <Link
                                className=""
                                href={"https://www.linkedin.com/in/bobby-ho-dev/"}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Linkedin className="h-8 fill-neutral-700 dark:fill-neutral-300 hover:-translate-y-2 duration-200 transition-all"/>
                            </Link>
                            <Link
                                className=""
                                href="https://github.com/kchoao"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github className="h-8 fill-neutral-700 dark:fill-neutral-300 hover:-translate-y-2 duration-200 transition-all"/>
                            </Link>
                        </div>
                        
                    </div>
                    <div className="lg:basis-1/4 max-h-[40vh] lg:max-h-[50vh] max-w-[40vh] lg:max-w-[30vh] mb-6 lg:mb-0 self-center">
                        <Image
                            className="
                            max-h-[40vh] lg:max-h-[50vh] max-w-[40vh] lg:max-w-[30vh] rounded-full object-cover object-bottom 
                            
                            image-frame"
                            alt={"Profile Picture"}
                            src={Me}
                        />
                        {/* <div className="hero-image">

                        </div> */}
                    </div>
                </div>
            </div>
            {/* Tech Stack section */}
            <div className="max-w-6xl mx-auto my-12 lg:my-24 px-4 lg:px-2 py-2">
                <div className="lg:hidden text-center text-2xl font-bold mb-12">
                    <p className="inline border-b-2 border-zinc-700 dark:border-zinc-50 pb-1">
                        Tech Stack
                    </p>
                </div>
                <div className="grid grid-cols-3 gap-4 justify-items-center lg:flex lg:justify-between items-center">
                    <p className="hidden lg:block lg:text-2xl/relaxed font-bold">Tech Stack</p>
                    <p className="hidden lg:block text-3xl/relaxed font-bold">|</p>
                    <Nextjs className="h-14"/>
                    <React className="h-12"/>
                    <Typescript className="h-12"/>
                    <Tailwind className="h-12 w-12"/>
                    <Nodejs className="h-20 w-20 dark:fill-neutral-100"/>
                    <Expressjs className="h-16 w-24 dark:fill-neutral-100"/>
                </div>
            </div>
            {/* Skills section */}
            <div id="skills" className="min-h-80 bg-neutral-100 dark:bg-neutral-800 py-12 lg:py-24 px-4">
                <div className="max-w-7xl mx-2 lg:mx-auto">
                    <h1 className="text-center lg:text-left text-2xl/relaxed lg:text-5xl/relaxed font-bold">
                        Skills<span role="img" aria-label="direct hit emoji"> 🎯</span>
                    </h1>
                    <div className="grid lg:grid-cols-2 gap-10 mt-8 lg:mt-12">
                        {Skills.map((skill, index)=>(
                            <div key={`skill-${index}`} className="flex gap-6 lg:gap-8">
                                <FadeInWhenVisible delay={(index+1)/10} className="h-12 w-12 lg:h-16 lg:w-16 p-2 lg:p-3 text-xl lg:text-2xl text-center font-bold border-[3px] border-zinc-300 dark:border-zinc-600 rounded-xl">
                                    {index+1}
                                </FadeInWhenVisible>
                                <div className="flex-1">
                                    <h3 className="h-12 lg:h-16 py-3 lg:py-4 text-left text-xl lg:text-3xl font-bold">{skill.title}</h3>
                                    <div className="w-full text-left pt-3 lg:pt-6">
                                        <Balancer ratio={0.2}>
                                        {skill.content}
                                        </Balancer>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Project section */}
            <div id="projects" className="h-fit w-full">
                <div className="mx-auto max-w-7xl px-4 py-12 lg:py-24">
                    <h1 className="text-center lg:text-left text-2xl lg:text-5xl font-bold mb-2 lg:mb-6">
                        Projects<span role="img" aria-label="hatching chick emoji">🐣</span>
                    </h1>
                    <h4 className="text-center lg:text-left mb-6">Some of the projects I&apos;m recently working on</h4>
                    <div className="">
                        {Projects.map((project, index)=>(
                            <div key={`project-${index}`} className="lg:flex odd:flex-row even:flex-row-reverse gap-8 mt-12">
                                <div className="lg:w-3/5">
                                    <Image
                                        className="h-80 w-full rounded-xl object-cover"
                                        alt={project.alt}
                                        src={project.src}
                                    />
                                </div>
                                {/* {project.demo} */}
                                <div className="lg:w-2/5 space-y-6 self-center mt-8 lg:mt-0">
                                    <h3 className="text-center text-lg lg:text-xl font-bold">{project.title}</h3>
                                    <div className="w-full text-center">
                                        <Balancer ratio={0.2}>
                                        {project.content}
                                        </Balancer>
                                    </div>
                                    <div className="flex flex-wrap gap-2 justify-center">
                                        {project.stacks.map((stack, y)=>(
                                            <div key={`project-${index}-${y}`} className="inline-block px-2 py-1 rounded-md border border-neutral-800 dark:border-neutral-100">
                                                {stack}
                                            </div>
                                        ))}
                                    </div>
                                    {/* <div className="flex flex-wrap gap-2 justify-center">

                                    </div> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* About this web */}
            <div id="this-site" className="h-fit bg-neutral-100 dark:bg-neutral-800 py-12 lg:py-24">
                <div className="max-w-7xl mx-4 lg:mx-auto">
                    <h1 className="text-center lg:text-left text-2xl lg:text-5xl font-bold">
                        About this website<span role="img" aria-label="sunshine emoji">🌞</span>
                    </h1>
                    <div className="flex h-60 items-center justify-center">
                        <WebVitals/>
                    </div>
                    <div className="mx-auto max-w-md text-center">
                        <h2 className="text-2xl font-bold lg:text-3xl">
                        <Balancer>Performance first</Balancer>
                        </h2>
                        <div className="prose-lg -mt-2 text-gray-500 dark:text-gray-50 lg:prose">
                            <Balancer>
                                <ReactMarkdown>
                                    Built on [Next.js](https://nextjs.org/) primitives like `@next/font` and `next/image` for stellar performance.
                                </ReactMarkdown>
                            </Balancer>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Skills = [
    {
        title: "Front-end Development",
        content: `I'm proficient in HTML, CSS and JavaScript. 
                I can build responsive websites from scratch or using frameworks like Bootstrap and React.`
    },
    {
        title: "Back-end Development",
        content: `I'm experienced in PHP, Node.js and Django. I can build APIs, integrate databases and deploy applications using cloud services.`
    },
    {
        title: "UI/UX Design",
        content: `I can create wireframes, mockups and prototypes using tools like Figma and Sketch. I prioritize user experience and design aesthetics.`
    },
    {
        title: "Project Management",
        content: `I'm skilled in agile methodologies like Scrum and Kanban. I can break down complex tasks, set priorities and ensure timely delivery.`
    }
]

const Projects = [
    {
        title: "Startup Website",
        content: "Developed a fully responsive website for a startup. The site is optimized to work across all devices and platforms.",
        alt:"Project picture: Startup Website",
        src: WebProject,
        demo: (
            <Image
            className="h-80 flex-1 rounded-lg object-cover self-center border-2 border-gray-800 dark:border-gray-300"
            alt={"Project picture: Startup Website"}
            src={WebProject}
            />
        ),
        stacks: ["Nextjs", "Sanity CMS", "Shopify","Responsive Design"]
    },
    {
        title: "Mobile App Development",
        content: "Mobile App Development",
        alt:"Project picture: Mobile App Development",
        src: AppProject,
        demo: (
            <Image
            className="h-80 flex-1 rounded-lg object-cover self-center border-2 border-gray-800 dark:border-gray-300"
            alt={"Project picture: Mobile App Development"}
            src={AppProject}
            />
        ),
        stacks: ["Flutter", "Database", "Dart"]
    },
    // {
    //     title: "E-Commerce Website",
    //     content: "Developed an e-commerce website with custom shopping cart functionality. The site is built on a custom CMS with Python/Django."
    // }
]
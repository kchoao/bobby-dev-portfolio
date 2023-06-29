import WebVitals from "@/components/home/web-vitals";
import FadeInWhenVisible from "@/components/shared/fade-in-when-visible";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import Balancer from "react-wrap-balancer";
import Me from "@/public/image/me.webp"
import {
    Github,
    Linkedin,
    Nextjs, 
    React, 
    Typescript, 
    Tailwind, 
    Nodejs, 
    Expressjs
} from "@/components/shared/icons"
import { useTranslations } from "next-intl";
import { githubUrl, linkedinUrl, mainContext } from "./context";


export default function Home() {
    const tHero = useTranslations('hero');
    const tStack = useTranslations('stack');
    const tExperience = useTranslations('experience');
    const tProject = useTranslations('project');
    const tThisSite = useTranslations('thisSite');
    
    return(
        <>
            {/* Hero section */}
            <div id="about" className="h-fit w-full pt-12 lg:py-12 bg-neutral-100 dark:bg-neutral-800">
                <div className="mx-auto max-w-7xl px-4 py-12 lg:py-24 flex flex-col-reverse lg:flex-row gap-x-12">
                    <div className="self-center lg:basis-3/4">
                        <h1 className="
                        text-center font-hero lg:text-left text-4xl/relaxed lg:text-8xl/relaxed text-amber-500 dark:text-amber-400  tracking-wider font-extrabold
                        ">
                            <Balancer >
                            {tHero.rich('title', {
                                emoji: (t) => <span role="img" aria-label="rocket emoji">{t}</span>
                            })}
                            </Balancer>
                        </h1>
                        <h2 className="text-center lg:text-left text-xl/relaxed lg:text-2xl/relaxed mt-6">
                            <Balancer ratio={0.5}>
                                {tHero.rich('intro', {
                                    emoji: (t) => <span role="img" aria-label="fire emoji">{t}</span>
                                })}
                            </Balancer>
                        </h2>
                        <div className="mt-6 lg:mt-12 flex space-x-8 justify-center lg:justify-start">
                            <Link
                                aria-label="Linkedin Link"
                                href={linkedinUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Linkedin className="h-8 fill-neutral-700 dark:fill-neutral-300 hover:-translate-y-2 duration-200 transition-all"/>
                            </Link>
                            <Link
                                aria-label="Github Link"
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github className="h-8 fill-neutral-700 dark:fill-neutral-300 hover:-translate-y-2 duration-200 transition-all"/>
                            </Link>
                        </div>
                        
                    </div>
                    <div className="lg:basis-1/4 max-h-[40vh] lg:max-h-[50vh] max-w-[40vh] lg:max-w-[30vh] mb-6 lg:mb-0 self-center">
                        <Image
                            height={500}
                            width={400}
                            className="max-h-[40vh] lg:max-h-[50vh] max-w-[40vh] lg:max-w-[30vh] rounded-full object-cover object-bottom image-frame"
                            alt={"Profile Picture1"}
                            placeholder="blur"
                            loading="lazy"
                            src={Me}
                        />      
                    </div>
                </div>
            </div>
            {/* Tech Stack section */}
            <div className="max-w-6xl mx-auto my-12 lg:my-24 px-4 lg:px-2 py-2">
                <h2 className="lg:hidden text-center text-3xl/relaxed font-bold mb-12">
                    <div className="inline pb-1">
                        {tStack("title")}
                    </div>
                </h2>
                <div className="grid grid-cols-3 gap-4 justify-items-center lg:flex lg:justify-between items-center">
                    <h2 className="hidden lg:block lg:text-2xl/relaxed font-bold">{tStack("title")}</h2>
                    <p className="hidden lg:block text-3xl/relaxed font-bold">|</p>
                    <Nextjs className="h-14"/>
                    <React className="h-12"/>
                    <Typescript className="h-12"/>
                    <Tailwind className="h-12 w-12"/>
                    <Nodejs className="h-20 w-20 dark:fill-neutral-100"/>
                    <Expressjs className="h-16 w-24 dark:fill-neutral-100"/>
                </div>
            </div>
            {/* Experience section */}
            <div id="experience" className="min-h-80 bg-neutral-100 dark:bg-neutral-800 py-12 lg:py-24 px-4">
                <div className="max-w-7xl mx-2 lg:mx-auto">
                    <h2 className="text-center lg:text-left text-3xl/relaxed lg:text-5xl/relaxed font-bold">
                        {tExperience.rich("title", {
                            emoji: (t) => <span role="img" aria-label="direct hit emoji">{t}</span>
                        })}
                    </h2>
                    <div className="grid lg:grid-cols-2 gap-10 mt-8 lg:mt-12">
                        {mainContext.experience.map((experience, index)=>(
                            <div key={`experience-${index}`} className="flex gap-6 lg:gap-8">
                                <FadeInWhenVisible delay={0.5+(index+1)/10} >
                                    <div className="h-12 w-12 lg:h-16 lg:w-16 p-2 lg:p-3 text-xl lg:text-2xl text-center font-bold border-[3px] border-zinc-300 dark:border-zinc-600 rounded-xl">
                                        {index+1}
                                    </div>
                                </FadeInWhenVisible>
                                <div className="flex-1">
                                    <h3 className="h-12 lg:h-16 py-3 lg:py-4 text-left text-lg lg:text-3xl font-bold">{tExperience(experience.title)}</h3>
                                    <div className="w-full text-left pt-3 lg:pt-6">
                                        <Balancer ratio={0.2}>
                                        {tExperience(experience.content)}
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
                    <h2 className="text-center lg:text-left text-3xl/relaxed lg:text-5xl/relaxed font-bold mb-2 lg:mb-6">
                        {tProject.rich("title", {
                            emoji: (t) => <span role="img" aria-label="hatching chick emoji">{t}</span>
                        })}
                    </h2>
                    <h3 className="text-center lg:text-left mb-6">{tProject("subtitle")}</h3>
                    <div className="">
                        {mainContext.projects.map((project, index)=>(
                            <div key={`project-${index}`} className="lg:flex odd:flex-row even:flex-row-reverse gap-8 mt-12">
                                <div className="lg:w-3/5">
                                    <Image
                                        height={400}
                                        width={600}
                                        placeholder="blur"
                                        loading="lazy"
                                        className="h-80 w-full rounded-xl object-cover"
                                        alt={`Project picture: ${tProject(project.title)}`}
                                        src={project.src}
                                    />
                                </div>
                                <div className="lg:w-2/5 space-y-6 self-center mt-8 lg:mt-0">
                                    <h4 className="text-center text-lg lg:text-xl font-bold">{tProject(project.title)}</h4>
                                    <div className="w-full text-center">
                                        <Balancer ratio={0.2}>
                                        {tProject(project.content)}
                                        </Balancer>
                                    </div>
                                    <div className="flex flex-wrap gap-2 justify-center">
                                        {project.stacks.map((stack, stackIndex)=>(
                                            <div key={`project-${index}-${stackIndex}`} className="inline-block px-2 py-1 rounded-md border border-neutral-800 dark:border-neutral-100">
                                                {stack}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* About this web */}
            <div id="this-site" className="h-fit bg-neutral-100 dark:bg-neutral-800 py-12 lg:py-24">
                <div className="max-w-7xl mx-4 lg:mx-auto">
                    <h2 className="text-center lg:text-left text-3xl/relaxed lg:text-5xl/relaxed font-bold">
                        {tThisSite.rich("title", {
                            emoji: (t) => <span role="img" aria-label="sunshine emoji">{t}</span>
                        })}
                    </h2>
                    <div className="flex h-60 items-center justify-center">
                        <WebVitals/>
                    </div>
                    <div className="mx-auto max-w-md text-center">
                        <h3 className="text-xl font-bold lg:text-3xl">
                        <Balancer>{tThisSite("subtitle")}</Balancer>
                        </h3>
                        <div className="prose-lg -mt-2 text-gray-800 dark:text-gray-50 lg:prose">
                            <Balancer>
                            <ReactMarkdown
                                components={{
                                    a: ({ node, ...props }) => (
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        {...props}
                                        className="font-medium text-gray-800 dark:text-gray-50 underline"
                                    />
                                    ),
                                    code: ({ node, ...props }) => (
                                    <code
                                        {...props}
                                        // @ts-ignore (to fix "Received `true` for a non-boolean attribute `inline`." warning)
                                        inline="true"
                                        className="rounded-sm bg-gray-300 dark:bg-gray-100 text-gray-800 px-1 py-0.5 font-mono font-medium"
                                    />
                                    ),
                                }}
                                >
                                    {tThisSite("content")}
                                </ReactMarkdown>
                            </Balancer>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

import WebVitals from "@/components/home/web-vitals";
import FadeInWhenVisible from "@/components/shared/fade-in-when-visible";
import Github from "@/components/shared/icons/github";
import Linkedin from "@/components/shared/icons/linkedin";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import Balancer from "react-wrap-balancer";
import Profile from "@/public/image/profile.jpg"
import WebProject from "@/public/image/web-project.jpg"
import AppProject from "@/public/image/app-project.png"


export default function Home() {
    return(
        <>
            {/* Hero section */}
            <div className="w-full h-fit pt-16 bg-zinc-50 dark:bg-zinc-800 border-b border-slate-900">
                <div className="mx-auto max-w-8xl py-12 lg:py-24 flex flex-col-reverse lg:flex-row gap-x-12">
                    <div className="lg:flex-1 lg:basis-3/4">
                        <h1 className="
                        text-center lg:text-left text-3xl/relaxed lg:text-6xl/relaxed
                        from-purple-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent font-extrabold
                        ">
                            <Balancer>
                            Hello! I&apos;m Bobby, a developer based in Hong Kong.
                            </Balancer>
                        </h1>
                        <div className="text-center lg:text-left lg:text-xl mt-6">
                            <Balancer ratio={0.2}>
                            As a full stack developer who is passionate about outdoor activity, 
                            I&apos;ve honed my skills to deliver innovative and engaging projects. 
                            Whether it&apos;s designing a website or building a mobile app, I&apos;ve got you covered.
                            </Balancer>
                        </div>
                        <div className="mt-12 flex space-x-5 justify-center lg:justify-start">
                            <Link
                                className="group flex max-w-fit items-center justify-center space-x-2 rounded-xl border border-black bg-black px-6 py-2 text-white transition-all shadow-md hover:-translate-y-2 duration-150"
                                href={"https://www.linkedin.com/in/bobby-ho-dev/"}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Linkedin className="fill-cyan-400"/>
                                <div>View Linkedin</div>
                            </Link>
                            <Link
                                className="flex max-w-fit items-center justify-center space-x-2 rounded-xl border border-gray-300 bg-white px-6 py-2 text-gray-600 shadow-md transition-all hover:-translate-y-2 duration-150"
                                href="https://github.com/kchoao"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github />
                                <div>
                                View Github
                                </div>
                            </Link>
                        </div>
            
                    </div>
                    <Image
                        className="max-w-sm mb-16 lg:mb-0 rounded-lg object-cover self-center"
                        alt={"Profile Picture"}
                        src={Profile}
                    />
                </div>
            </div>
            {/* Background section */}
            <div className="min-h-80 max-w-7xl bg-zinc-50 dark:bg-zinc-800 border border-slate-900 rounded-lg mx-4 lg:mx-auto my-12 lg:my-24 px-8 lg:px-16 py-6 lg:py-12">
                    <h1 className="text-center lg:text-left text-4xl lg:text-5xl font-bold">Skills</h1>
                    <div className="grid lg:grid-cols-2 gap-6 mt-4">
                        {Skills.map((skill, index)=>(
                            <div key={`skill-${index}`}  className="flex gap-6 py-6">
                                <FadeInWhenVisible delay={(index+1)/10} className="h-16 w-16 p-1 text-2xl lg:text-3xl text-center font-extrabold text-transparent bg-clip-border from-purple-600 to-rose-400  bg-gradient-to-r rounded-xl">
                                    <div className="rounded-lg h-full w-full bg-zinc-50 dark:bg-zinc-800">
                                        <div className="py-3 text-transparent bg-clip-text from-rose-400 via-fuchsia-500 to-indigo-500 bg-gradient-to-r">
                                            {index+1}
                                        </div>
                                    </div>
                                </FadeInWhenVisible>
                                <div className="flex-1">
                                    <h3 className="h-16 py-4 text-center lg:text-left text-2xl lg:text-3xl font-bold">{skill.title}</h3>
                                    <div className="w-full text-center lg:text-left pt-6">
                                        <Balancer ratio={0.2}>
                                        {skill.content}
                                        </Balancer>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
            </div>
            {/* Project section */}
            <div className="w-full bg-zinc-50 dark:bg-zinc-800 border-y border-slate-900 mb-16">
                <div className="min-h-80 max-w-8xl mx-4 lg:mx-auto my-12 lg:my-24">
                    <h1 className="text-center lg:text-left text-4xl lg:text-5xl font-bold mb-6">Projects</h1>
                    <h4 className="text-xl text-center lg:text-left mb-6">Some of the projects I&apos;m recently working on</h4>
                    <div className="grid lg:grid-cols-2 gap-6">
                        {Projects.map((project, index)=>(
                            <div key={`project-${index}`} className="h-full w-full">
                                {/* Image */}
                                {project.demo}
                                <div className="pt-6 lg:pt-12 pb-12 lg:pb-0">
                                    <h3 className="text-center text-2xl lg:text-3xl font-bold">{project.title}</h3>
                                    <div className="w-full text-center pt-6">
                                        <Balancer ratio={0.2}>
                                        {project.content}
                                        </Balancer>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* About this web */}
            <div className="min-h-80 max-w-7xl bg-zinc-50 dark:bg-zinc-800 border border-slate-900 rounded-lg mx-4 lg:mx-auto my-12 lg:my-24 px-8 lg:px-16 py-6 lg:py-12">
                    <h1 className="text-center lg:text-left text-4xl lg:text-5xl font-bold">About this website</h1>
                    <div className="flex h-60 items-center justify-center">
                        <WebVitals/>
                    </div>
                    <div className="mx-auto max-w-md text-center">
                        <h2 className="text-2xl font-bold lg:text-3xl">
                        <Balancer>Performance first</Balancer>
                        </h2>
                        <div className="prose-lg -mt-2  text-gray-500 dark:text-zinc-50 lg:prose">
                        <Balancer>
                            <ReactMarkdown>
                                Built on [Next.js](https://nextjs.org/) primitives like `@next/font` and `next/image` for stellar performance.
                            </ReactMarkdown>
                        </Balancer>
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
        demo: (
            <Image
            className="h-80 w-full rounded-lg object-cover self-center border-2 border-gray-800 dark:border-gray-300"
            alt={"Project picture: Startup Website"}
            src={WebProject}
            />
        )
    },
    {
        title: "Mobile App Development",
        content: "Mobile App Development",
        demo: (
            <Image
            className="h-80 w-full rounded-lg object-cover self-center border-2 border-gray-800 dark:border-gray-300"
            alt={"Project picture: Mobile App Development"}
            src={AppProject}
            />
        )
    },
    // {
    //     title: "E-Commerce Website",
    //     content: "Developed an e-commerce website with custom shopping cart functionality. The site is built on a custom CMS with Python/Django."
    // }
]
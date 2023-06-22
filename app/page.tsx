import FadeInWhenVisible from "@/components/shared/fade-in-when-visible";
import Github from "@/components/shared/icons/github";
import Linkedin from "@/components/shared/icons/linkedin";
import Balancer from "react-wrap-balancer";


export default function Home() {
    return(
        <>
            {/* Hero section */}
            <div className="w-full h-fit pt-16 bg-zinc-50 dark:bg-zinc-800 border-b border-slate-900">
                <div className="mx-auto max-w-8xl py-12 lg:py-24 grid lg:grid-cols-4">
                    <FadeInWhenVisible className="lg:col-span-3">
                        <h1 className="
                        text-center lg:text-left text-3xl/relaxed lg:text-6xl/relaxed
                        from-purple-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent font-extrabold
                        ">
                            <Balancer>
                            Hello! I'm Bobby, a developer based in Hong Kong.
                            </Balancer>
                        </h1>
                        <div className="text-center lg:text-left lg:text-xl mt-6">
                            <Balancer>
                            As a full stack developer who is passionate about outdoor activity, 
                            I've honed my skills to deliver innovative and engaging projects. 
                            Whether it's designing a website or building a mobile app, I've got you covered.
                            </Balancer>
                        </div>
                        <div className="mt-6">
                            <FadeInWhenVisible className="mx-auto mt-6 flex items-center justify-center lg:justify-start space-x-5 opacity-0">
                                <a
                                    className="group flex max-w-fit items-center justify-center space-x-2 rounded-xl border border-black bg-black px-6 py-2 text-white transition-colors shadow-md hover:bg-white hover:text-black duration-300"
                                    href={"https://www.linkedin.com/in/bobby-ho-dev/"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Linkedin className="fill-cyan-400"/>
                                    <p>View Linkedin</p>
                                </a>
                                <a
                                    className="flex max-w-fit items-center justify-center space-x-2 rounded-xl border border-gray-300 bg-white px-6 py-2 text-gray-600 shadow-md transition-colors hover:border-black hover:text-black duration-300"
                                    href="https://github.com/kchoao"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Github />
                                    <p>
                                    View Github
                                    </p>
                                </a>
                            </FadeInWhenVisible>
                            </div>
                    </FadeInWhenVisible>
                    {/* <Image>

                    </Image> */}
                    <div className="h-80 lg:h-full w-1/2 lg:w-full mx-auto mt-16 lg:mt-0 bg-zinc-500 rounded-lg"></div>
                </div>

            </div>
            {/* Background section */}
            <div className="min-h-80 max-w-7xl bg-zinc-50 dark:bg-zinc-800 border border-slate-900 rounded-lg mx-4 lg:mx-auto my-12 lg:my-24 px-8 lg:px-16 py-6 lg:py-12">
                    <h1 className="text-center lg:text-left text-4xl lg:text-5xl font-bold">Skills</h1>
                    <div className="grid lg:grid-cols-2 gap-6 mt-4">
                        {Skills.map((skill, index)=>(
                            <div key={`skill-${index}`} className="rounded-lg bg-slate-200 dark:bg-slate-700 px-8 py-6">
                                <h3 className="text-center lg:text-left text-2xl lg:text-3xl font-bold">{skill.title}</h3>
                                <div className="w-full text-center lg:text-left pt-6">
                                    <Balancer ratio={0.2}>
                                    {skill.content}
                                    </Balancer>
                                </div>
                            </div>
                        ))}
                    </div>
            </div>
            {/* Project section */}
            <div className="w-full bg-zinc-50 dark:bg-zinc-800 border-y border-slate-900 mb-80">
                <div className="min-h-80 max-w-8xl mx-4 lg:mx-auto my-12 lg:my-24">
                    <h1 className="text-center lg:text-left text-4xl lg:text-5xl font-bold mb-6">Projects</h1>
                    <h4 className="text-xl text-center lg:text-left mb-6">Some of the projects I'm recently working on</h4>
                    <div className="grid lg:grid-cols-2 gap-6">
                        {Projects.map((project, index)=>(
                            <div key={`project-${index}`} className="h-full w-full">
                                {/* Image */}
                                <div className="h-80 w-full bg-slate-700">

                                </div>
                                <div className="pt-6 lg:pt-12">
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
        content: "Developed a fully responsive website for a startup. The site is optimized to work across all devices and platforms."
    },
    {
        title: "Mobile App Development",
        content: "Mobile App Development"
    },
    // {
    //     title: "E-Commerce Website",
    //     content: "Developed an e-commerce website with custom shopping cart functionality. The site is built on a custom CMS with Python/Django."
    // }
]
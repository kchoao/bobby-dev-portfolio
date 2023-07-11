import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { useTranslations } from "next-intl";
import { mainContext } from "../context";


export default function Project() {
    const tProject = useTranslations('project');

    return(
        <>
        <div id="projects" className="layout-secondary">
            <div className="content-center">
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
        </>
    )
}

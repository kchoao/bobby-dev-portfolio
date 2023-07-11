import FadeInWhenVisible from "@/components/shared/fade-in-when-visible";
import Balancer from "react-wrap-balancer";
import { useTranslations } from "next-intl";
import { mainContext } from "../context";

export default function Experience() {
    const tExperience = useTranslations('experience');

    return(
        <>
        <div id="experience" className="layout-primary">
            <div className="content-center">
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
        </>
    )
}

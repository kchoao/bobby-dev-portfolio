import Link from "next/link";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import Me from "@/public/image/me.webp"
import {
    Github,
    Linkedin,
    React, 
} from "@/components/shared/icons"
import { useTranslations } from "next-intl";
import { githubUrl, linkedinUrl } from "../context";

export default function Hero() {
    const tHero = useTranslations('hero');

    return(
        <>
        <div id="about" className="layout-primary">
            <div className="content-center flex flex-col-reverse lg:flex-row gap-x-12">
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
                            hrefLang="en"
                            aria-label="Linkedin Link"
                            href={linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Linkedin className="h-8 fill-neutral-700 dark:fill-neutral-300 hover:-translate-y-2 duration-200 transition-all"/>
                        </Link>
                        <Link
                            hrefLang="en"
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
        </>
    )
}

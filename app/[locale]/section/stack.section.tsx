import {
    Nextjs, 
    React, 
    Typescript, 
    Tailwind, 
    Nodejs, 
    Expressjs
} from "@/components/shared/icons"
import { useTranslations } from "next-intl";

export default function Stack() {
    const tStack = useTranslations('stack');

    return(
        <>
        <div className="layout-secondary">
            <div className="content-center">
                <div className="px-4">
                    <h2 className="lg:hidden title-primary mb-12">
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
            </div>
        </div>
        </>
    )
}

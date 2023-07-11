import WebVitals from "@/components/home/web-vitals";
import ReactMarkdown from "react-markdown";
import Balancer from "react-wrap-balancer";
import { useTranslations } from "next-intl";

export default function ThisSite() {
    const tThisSite = useTranslations('thisSite');

    return(
        <>
        <div id="this-site" className="layout-primary">
            <div className="content-center">
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
                                code: ({ node, children, ...props }) => (
                                <code
                                    {...props}
                                    // @ts-ignore (to fix "Received `true` for a non-boolean attribute `inline`." warning)
                                    inline="true"
                                    className="rounded-sm bg-gray-300 dark:bg-gray-100 text-gray-800 px-1 py-0.5 font-mono font-medium"
                                >{children}</code>
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

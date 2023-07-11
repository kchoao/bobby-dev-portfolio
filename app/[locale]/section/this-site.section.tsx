import WebVitals from "@/components/home/web-vitals";
import ReactMarkdown from "react-markdown";
import Balancer from "react-wrap-balancer";
import { useTranslations } from "next-intl";
import { mainContext } from "../context";

export default function ThisSite() {
    const tThisSite = useTranslations('thisSite');

    return(
        <>
        <div id="this-site" className="layout-primary">
            <div className="content-center">
                <h2 className="title-primary">
                    {tThisSite.rich("title", {
                        emoji: (t) => <span role="img" aria-label="sunshine emoji">{t}</span>
                    })}
                </h2>

                <div className="lg:grid grid-cols-3 text-center gap-x-6">
                    {
                        mainContext.thisSite.map((data, index)=>(
                            <div key={`thisSite-${index}`}>
                                <div className="h-52 place-self-center">
                                    <WebVitals/>
                                </div>
                                <h3 className="title-secondary">
                                    <Balancer>{tThisSite(data.title)}</Balancer>
                                </h3>
                                <div className="mt-2 prose text-gray-800 dark:text-gray-50">
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
                                            {tThisSite(data.content)}
                                        </ReactMarkdown>
                                    </Balancer>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
        </>
    )
}

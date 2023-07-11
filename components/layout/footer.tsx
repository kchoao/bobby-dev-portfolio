import { githubUrl, linkedinUrl } from "@/app/[locale]/context";
import { easterEggUrl } from "@/app/[locale]/context";
import { useTranslations } from "next-intl";

export default function Footer() {
  const tContact = useTranslations('contact');

  return (
    <div id="contact" className="relative bottom-0 h-fit w-full py-6 text-center bg-neutral-100/50 dark:bg-neutral-800/50">
      <div className="max-w-8xl mx-4 lg:mx-auto space-y-6 my-6">
        <h2 className="text-3xl lg:text-4xl font-bold">                           
          {tContact.rich('title', {
            emoji: (t) => (
            <a 
              hrefLang="en"
              aria-label="Easter Egg secret Youtube link"
              href={easterEggUrl}
              target="_blank"
              rel="noopener noreferrer"
              >
              <span className="animate-bounce inline-block" role="img" aria-label="mage emoji">{t}</span>
            </a>)
          })}
        </h2>
        <h3 className="inline-block pb-6 border-b border-neutral-800 dark:border-neutral-100">
          {tContact.rich('content', {
            githubUrl: (t) => (
              <a
              hrefLang="en"
              aria-label="Github Link"
              className="font-medium underline transition-colors"
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
                >
                {t}
              </a>),
            linkedinUrl: (t) => (
              <a 
              hrefLang="en"
              aria-label="Linkedin Link"
              className="font-medium underline transition-colors"
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
                >
                {t}
              </a>),
            
          })}
        </h3>
      </div>
      <p className="text-sm">Build with TypeScript, Tailwind and Next.js</p>
      <p className="mt-2 text-sm">
        Copyright © 2023. All rights are reserved
      </p>
    </div>
  );
}

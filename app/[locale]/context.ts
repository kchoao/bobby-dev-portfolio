import Portfolio from "@/public/image/portfolio-web.webp"

export const navbarContext = {
    routes : [
        {
            title: "about",
            href: "#about"
        },
        {
            title: "experience",
            href: "#experience"
        },
        {
            title: "projects",
            href: "#projects"
        },
        {
            title: "thisSite",
            href: "#this-site"
        },
        {
            title: "contact",
            href: "#contact"
        },
    ],
    languageSwitcher: {
        title: "languageSwitcher"
    }
}

export const easterEggUrl = "https://youtu.be/dQw4w9WgXcQ"
export const linkedinUrl = "https://www.linkedin.com/in/bobby-ho-dev"
export const githubUrl = "https://github.com/kchoao"
export const webUrl = "https://www.bobbyho.dev"

export const mainContext = {
    experience: [
        {
            title: "title-frontendDevelopment",
            content: "frontendDevelopment"
        },
        {
            title: "title-backendDevelopment",
            content: "backendDevelopment"
            
        },
        {
            title: "title-passionateProgrammer",           
            content: "passionateProgrammer"  
        },
        {
            title: "title-teamPlayer",
            content: "teamPlayer"
        }
    ],
    projects: [
        {
            title: "title-portfolio",
            content: "portfolio",
            stacks: ["Next.js 13", "Tailwind CSS", "Typescript","Responsive Design"],
            src: Portfolio,
            projectUrl: webUrl,
            githubUrl: "https://github.com/kchoao/bobby-dev-portfolio"
        },
        // {
        //     title: "title-startupWeb",
        //     content: "startupWeb",
        //     stacks: ["Nextjs", "Sanity CMS", "Shopify","Responsive Design"],
        //     src: WebProject,
        // },
        // {
        //     title: "title-mobileApp",
        //     content: "mobileApp",
        //     stacks: ["Flutter", "Database", "Dart"],
        //     src: AppProject,
        // },
    ],
    thisSite: [
        {
            title: "title-performance",
            content: "performance",
        },
        {
            title: "title-accessibility",
            content: "accessibility",
        },
        {
            title: "title-seo",
            content: "seo",
        },
    ]
}

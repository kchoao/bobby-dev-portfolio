import WebProject from "@/public/image/web-project.webp"
import AppProject from "@/public/image/app-project.webp"

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
export const linkedinUrl = "https://www.linkedin.com/in/bobby-ho-dev"
export const githubUrl = "https://github.com/kchoao"
export const webUrl = "https://bobbyho.vercel.app"

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
            title: "title-startupWeb",
            content: "startupWeb",
            stacks: ["Nextjs", "Sanity CMS", "Shopify","Responsive Design"],
            src: WebProject,
        },
        {
            title: "title-mobileApp",
            content: "mobileApp",
            stacks: ["Flutter", "Database", "Dart"],
            src: AppProject,
        },
    ]
}
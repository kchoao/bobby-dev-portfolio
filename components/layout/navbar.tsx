"use client";

import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { Session } from "next-auth";
import ThemeSwitcher from "./theme-switcher";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const ROUTES = [
  {
    title: "About",
    href: "#about"
  },
  {
    title: "Skills",
    href: "#skills"
  },
  {
    title: "Projects",
    href: "#projects"
  },
  {
    title: "This Site",
    href: "#this-site"
  },
  {
    title: "Contact",
    href: "#contact"
  },
]

export default function NavBar({ session }: { session: Session | null }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const closeMobileMenu = () => setMobileMenuOpen(false)
  const scrolled = useScroll(50);

  return (
    <>
      {/* Backdrop */}
      <div className={`${mobileMenuOpen? 'block':'hidden'} mobile-menu-overlay fixed inset-0 h-screen w-screen bg-black bg-opacity-50 z-30`} onClick={closeMobileMenu}/>
      {/* Mobile Menu Modal */}
      <div className={`${mobileMenuOpen? 'w-2/5 px-6':'w-0 px-0'} py-6 mobile-menu-modal overflow-hidden fixed top-0 right-0 z-40 bg-zinc-200 dark:bg-zinc-700 h-full duration-300`}>
        <button
            type="button"
            className="-m-2.5 inline-flex items-center float-right justify-between rounded-md p-2.5"
            onClick={closeMobileMenu}
        >
            <span className="sr-only">Close menu</span>
            <X className="h-6 w-6" aria-hidden="true" />
        </button>
        <div className="text-right space-y-6 my-12">
            {ROUTES.map((route, index) => (
            <Link
                key={`navigation-mobile-${index}`}
                href={`${route.href}`} 
                aria-label={route.title} 
                scroll={false}
                onClick={closeMobileMenu}
                className="block px-1 font-semibold leading-7"
            >
                {route.title}
            </Link>
            ))}
        </div>
      </div>
      {/* Navbar */}
      <nav
        aria-label="navigation bar"
        className={`fixed top-0 left-0 right-0 w-full z-20 transition-all  ${
          scrolled
            ? "bg-neutral-100/50 dark:bg-neutral-800/50 backdrop-blur-xl"
            : "bg-neutral-100/0 dark:bg-neutral-800/0"
        }`}
      >
        <div className="flex h-16 max-w-8xl px-4 text-center  items-center justify-between lg:mx-auto">
          <Link href="#about" className="text-xl hover:-translate-y-2 duration-300 transition-transform" aria-label={"Bobby Ho"} scroll={false}>
            <p>Bobby Ho</p>
          </Link>
          <div className="flex gap-6 text-lg items-center">
            {ROUTES.map((route, index)=>(
              <Link 
              key={`navigation-${index}`} 
              className="hidden lg:block hover:-translate-y-2 duration-300 transition-transform" 
              href={`${route.href}`} 
              aria-label={route.title} 
              scroll={false}>
                <p>{route.title}</p>
              </Link>
            ))}
            <ThemeSwitcher />
            <button
                type="button"
                className="lg:hidden p-3 inline-flex items-center justify-center rounded-md hover:-translate-y-1 duration-500"
                onClick={() => setMobileMenuOpen(true)}
            >
                <span className="sr-only">Open main menu</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

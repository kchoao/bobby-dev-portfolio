"use client";

import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import ThemeSwitcher from "./theme-switcher";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { i18n } from '@/lib/constants';
import { navbarContext } from "@/app/[locale]/context";
import { useLocale, useTranslations } from "next-intl";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const closeMobileMenu = () => setMobileMenuOpen(false)
  const locale = useLocale();
  const scrolled = useScroll(50);
  const t = useTranslations('navbar');

  return (
    <>
      {/* Backdrop */}
      <div className={`${mobileMenuOpen? 'block':'hidden'} mobile-menu-overlay fixed inset-0 h-screen w-screen bg-black bg-opacity-50 z-30`} onClick={closeMobileMenu}/>
      {/* Mobile Menu Modal */}
      <div 
      aria-label="mobile navigation bar" 
      className={`${mobileMenuOpen? 'w-2/5 px-6':'w-0 px-0'} py-6 mobile-menu-modal overflow-hidden fixed top-0 right-0 z-40 bg-zinc-200 dark:bg-zinc-700 h-full duration-300`}>
        <button
            type="button"
            className="-m-2.5 inline-flex items-center float-right justify-between rounded-md p-2.5"
            onClick={closeMobileMenu}
        >
            <span className="sr-only">Close menu</span>
            <X className="h-6 w-6" aria-hidden="true"/>
        </button>
        <div className={`text-right space-y-6 my-12`} aria-label="mobile navigation link">
            {navbarContext.routes.map((route, index) => (
            <Link
                hrefLang="x-default"
                rel="canonical"
                key={`mobile-navigation-${index}`}
                href={`${locale}/${route.href}`} 
                aria-label={t(route.title)} 
                scroll={false}
                onClick={closeMobileMenu}
                className={`block px-1 leading-7`}
            >
                {t(route.title)}
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
          <Link 
            href={`${locale}/#about`} 
            className="text-xl hover:-translate-y-2 duration-300 transition-transform" 
            aria-label={"Link to home page"} 
            hrefLang="x-default" 
            scroll={false}>
            <p>Bobby Ho</p>
          </Link>
          <div className="flex gap-6 text-lg items-center" aria-label="navigation link">
            {navbarContext.routes.map((route, index)=>(
              <Link 
              rel="canonical"
              hrefLang="x-default"
              key={`navigation-${index}`} 
              className="hidden lg:block hover:-translate-y-2 duration-300 transition-transform" 
              href={`${locale}/${route.href}`}
              aria-label={t(route.title)} 
              scroll={false}>
                {t(route.title)}
              </Link>
            ))}
            <ThemeSwitcher />
            <Link
                rel="canonical"
                hrefLang="x-default"
                href={`${i18n.locales.find(k=>k!==locale)}`}
                aria-label={"Language Switcher"} 
                className="block px-1 leading-7"
            >
                {t('languageSwitcher')}
            </Link>
            <button
                type="button"
                className="lg:hidden py-3 inline-flex items-center justify-center rounded-md hover:-translate-y-1 duration-500"
                onClick={() => setMobileMenuOpen(true)}
            >
                <span className="sr-only">Open navigation menu</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

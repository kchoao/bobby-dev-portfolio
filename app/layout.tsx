import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";
import Image from "next/image";
import Background from "@/public/image/background.jpg"
import ThemeProvider from "@/components/provider/theme-provider";

export const metadata = {
  title: "Bobby Ho - Developer Portfolio",
  description:
    "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
  twitter: {
    card: "summary_large_image",
    title: "Precedent - Building blocks for your Next.js project",
    description:
      "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
    creator: "@steventey",
  },
  metadataBase: new URL("https://precedent.dev"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable,"relative")}>
        <ThemeProvider>
          {/* <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" /> */}
          <Image 
            className="fixed h-full w-full object-cover -z-50"
            width={0}
            height={0}
            sizes="100vw"
            alt="Hong Kong Mountains"
            src={Background}
          />
          <Suspense fallback="...">
            {/* @ts-expect-error Server Component */}
            <Nav />
          </Suspense>
          <main className="relative min-h-screen w-screen pb-16 
          text-zinc-800 dark:text-zinc-100 
          text-base lg:text-lg">
            {children}
          </main>
          <Footer />
          <Analytics />

        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { poppins, robotoMono, staatliches } from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";
import Image from "next/image";
import Background from "@/public/image/background.jpg"
import ThemeProvider from "@/components/provider/theme-provider";

export const metadata = {
  title: "Bobby Ho - Developer Portfolio",
  description:
    "Do you have a job opportunity or idea you'd like to discuss? Feel free to reach me on Github and Linkedin~",
  metadataBase: new URL("https://bobby-dev-portfolio.vercel.app/"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(poppins.variable, robotoMono.variable, staatliches.variable,"relative")}>
        <ThemeProvider>
          {/* <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" /> */}
          {/* <Image 
            className="fixed h-full w-full object-cover -z-50"
            width={0}
            height={0}
            sizes="100vw"
            alt="Hong Kong Mountains"
            src={Background}
            placeholder="blur"
            quality={100}
            fill
          /> */}
          <div className="bg-zinc-200 dark:bg-zinc-700 fixed h-full w-full -z-50"/>

          <Suspense fallback="...">
            {/* @ts-expect-error Server Component */}
            <Nav />
          </Suspense>
          <main className="relative min-h-screen w-screen 
          text-zinc-800 dark:text-zinc-100 
          font-display
          text-sm lg:text-lg">
            {children}
            <Footer />
          </main>
          <Analytics />

        </ThemeProvider>
      </body>
    </html>
  );
}

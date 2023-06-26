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
      <body className={cx(poppins.variable, robotoMono.variable, staatliches.variable,"relative text-zinc-800 dark:text-zinc-50 font-display")}>
        <ThemeProvider>
          <Suspense fallback="...">
            {/* @ts-expect-error Server Component */}
            <Nav />
          </Suspense>
          <main className="relative h-full w-screen z-0
        bg-zinc-200 dark:bg-zinc-700
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

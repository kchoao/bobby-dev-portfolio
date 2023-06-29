import "../globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { poppins, staatliches } from "../fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";
import ThemeProvider from "@/components/provider/theme-provider";
import { webUrl } from "./context";

type LayoutProps = {
  children: React.ReactNode;
  params: {
    locale: string
  }
}

export const metadata = {
  title: "Bobby Ho - Developer Portfolio",
  description:
    "Do you have a job opportunity or idea you'd like to discuss? Feel free to reach me on Github and Linkedin~",
  metadataBase: new URL(webUrl),
  themeColor: "#FFF",
};

// Error: Usage of next-intl APIs in Server Components is currently only available for dynamic rendering (i.e. no `generateStaticParams`).
// export function generateStaticParams() {
//   //result: [{locale:hk},{locale:en}]
//   return i18n.locales.map(l=>({locale:l}));
// }

export default function RootLayout({
  children,
  params: { locale }
}: LayoutProps) {

  return (
    <html lang={locale||"en"} suppressHydrationWarning>
        <body className={cx(poppins.variable, staatliches.variable,"relative text-zinc-800 dark:text-zinc-50 font-display")}>
            <ThemeProvider> 
                <Suspense fallback={"..."}>
                  {/* @ts-expect-error Server Component */}
                  <Nav locale={locale}/>
                </Suspense>
                <main 
                  className="relative h-full w-screen z-0
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

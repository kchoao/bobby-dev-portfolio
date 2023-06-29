import Navbar from "./navbar";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

export default async function Nav({ locale }:{ locale:string }) {
  // const session = await getServerSession(authOptions);
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
        <Navbar 
        // session={session}
        />
    </NextIntlClientProvider>
  );
}

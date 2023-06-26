"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";
import { Session } from "next-auth";
import ThemeSwitcher from "./theme-switcher";

export default function NavBar({ session }: { session: Session | null }) {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);

  return (
    <>
      <SignInModal />
      <div
        className={`fixed top-0 left-0 right-0 w-full ${
          scrolled
            ? "bg-zinc-50/50 dark:bg-zinc-800/50 backdrop-blur-xl"
            : "bg-zinc-50/0 dark:bg-zinc-800/0"
        } z-30 transition-all`}
      >
        <div className="flex h-16 max-w-8xl px-4 items-center justify-between lg:mx-auto">
          <Link href="/" className="flex items-center font-display text-2xl">
            <p>Bobby Ho</p>
          </Link>
          <ThemeSwitcher />

          {/* <div>
            {session ? (
              <UserDropdown session={session} />
            ) : (
              <button
                className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                onClick={() => setShowSignInModal(true)}
              >
                Sign In
              </button>
            )}
          </div> */}
        </div>
      </div>
    </>
  );
}

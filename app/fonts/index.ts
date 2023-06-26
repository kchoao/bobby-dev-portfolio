import { Poppins, Roboto_Mono, Staatliches  } from "next/font/google";

export const poppins = Poppins({
  weight: "300",
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const robotoMono = Roboto_Mono({
  weight: "300",
  variable: "--font-roboto_mono",
  subsets: ["latin"],
});
export const staatliches = Staatliches({
  weight: "400",
  variable: "--font-staatliches",
  subsets: ["latin"],
});

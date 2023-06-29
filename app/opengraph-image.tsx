/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/server";
export const runtime = "edge";
export const alt = "Bobby Ho - Developer Portfolio";
export const contentType = "image/webp";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        <img
          height={40}
          width={40}
          src={new URL("../public/image/doge.webp", import.meta.url).toString()}
          alt="Doge Logo"
          tw="w-40 h-40 mb-4 opacity-95"
        />
        <h1
          style={{
            fontSize: "80px",
            background:"linear-gradient(to right, #9333EA 0%, #1d4ed8 100%)",
            backgroundClip: "text",
            color: "transparent",
            lineHeight: "5rem",
            letterSpacing: "-0.02em",
            textAlign: "center"
          }}
        >
          Developer Portfolio
        </h1>
        <h2
          style={{
            fontSize: "50px",
            backgroundColor:"black",
            backgroundClip: "text",
            color: "transparent",
            lineHeight: "5rem",
            letterSpacing: "-0.02em",
            textAlign: "center"
          }}
        >
          Bobby Ho
        </h2>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}

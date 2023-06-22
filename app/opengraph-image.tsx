/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/server";

export const runtime = "edge";
export const alt = "Bobby Ho - Developer Portfolio";
export const contentType = "image/png";

export default async function OG() {
  const sfPro = await fetch(
    new URL("./fonts/SF-Pro-Display-Medium.otf", import.meta.url),
  ).then((res) => res.arrayBuffer());

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
          src={new URL("../public/image/doge.png", import.meta.url).toString()}
          alt="Doge Logo"
          tw="w-40 h-40 mb-4 opacity-95"
        />
        <h1
          style={{
            fontSize: "80px",
            fontFamily: "SF Pro",
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
            fontFamily: "SF Pro",
            // background:"linear-gradient(to right, #9333EA 0%, #1d4ed8 100%)",
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
      fonts: [
        {
          name: "SF Pro",
          data: sfPro,
        },
      ],
    },
  );
}

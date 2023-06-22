export default function Footer() {
  return (
    <div className="relative bottom-0 h-fit w-full py-6 text-center bg-zinc-50/50 dark:bg-zinc-800/50">
      <div className="max-w-8xl mx-4 lg:mx-auto my-6">
        <h1 className="text-3xl lg:text-4xl font-bold mb-6">Get in touch</h1>
        <h4 className="inline-block pb-6 border-b border-zinc-800 dark:border-zinc-100">
          Do you have a job opportunity or idea you&apos;d like to discuss? Feel free to reach me on {" "}
          <a
            className="font-medium underline transition-colors"
            href="https://github.com/kchoao"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github 
          </a>
          {" "}and{" "}
          <a
            className="font-medium underline transition-colors"
            href="https://www.linkedin.com/in/bobby-ho-dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
          ~
        </h4>
      </div>
      <p>Build with TypeScript, Tailwind and Next.js</p>
      <p className="mt-2z-10">
        Portfolio of Bobby Ho
      </p>
    </div>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-gradient-to-br from-yellow-300 via-pink-300 to-purple-400 text-gray-900">
      <main className="flex flex-col gap-8 items-center">
        <Image src="/next.svg" alt="Next.js logo" width={180} height={38} priority />
        <ol className="list-inside list-decimal text-lg text-center sm:text-left font-semibold">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/10 px-2 py-1 rounded font-semibold">src/app/page.js</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-transparent transition-colors flex items-center justify-center bg-gray-900 text-white gap-2 hover:bg-yellow-500 font-medium text-lg h-12 px-6"
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/vercel.svg" alt="Vercel logomark" width={20} height={20} />
            Deploy now
          </a>
          <a
            className="rounded-full border border-black/20 transition-colors flex items-center justify-center bg-white hover:bg-gray-300 font-medium text-lg h-12 px-6"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>

      <footer className="flex gap-6 flex-wrap items-center justify-center mt-16">
        <a className="hover:underline font-semibold" href="https://nextjs.org/learn" target="_blank" rel="noopener noreferrer">
          📄 Learn
        </a>
        <a className="hover:underline font-semibold" href="https://vercel.com/templates?framework=next.js" target="_blank" rel="noopener noreferrer">
          🖥️ Examples
        </a>
        <a className="hover:underline font-semibold" href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
          🌍 Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}

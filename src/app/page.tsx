import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <header className="w-full p-6 text-center">
        <Image
          className="dark:invert mx-auto"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </header>

      <main className="container mx-auto px-6 py-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Next.js 15 Partial Pre-Rendering
            <span className="block text-3xl text-indigo-600 dark:text-indigo-400 mt-2">
              z tRPC
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Witaj w głównym projekcie aplikacji demonstrującej możliwości
            <strong> Partial Pre-Rendering (PPR)</strong> w Next.js 15 wraz z
            wykorzystaniem <strong>tRPC</strong> do efektywnego zarządzania API.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-indigo-600 dark:text-indigo-400">
                🚀 Partial Pre-Rendering
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Poznaj najnowsze możliwości Next.js 15 w zakresie selektywnego
                pre-renderowania komponentów dla optymalnej wydajności.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-indigo-600 dark:text-indigo-400">
                🔧 tRPC Integration
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Wykorzystaj pełną typizację TypeScript w komunikacji
                frontend-backend dzięki tRPC.
              </p>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-12">
            🎯 Miejsce na Twój Komponent
          </h2>
        </div>
      </main>
      <footer className="w-full p-6 text-center border-t border-gray-200 dark:border-gray-700">
        <div className="flex gap-4 items-center justify-center flex-col sm:flex-row mt-8 mb-48">
          <a
            className="rounded-full bg-indigo-600 hover:bg-indigo-700 text-white transition-colors flex items-center justify-center gap-2 font-medium text-sm sm:text-base h-12 px-6 w-full sm:w-auto"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            📚 Dokumentacja Next.js 15
          </a>
          <a
            className="rounded-full border border-indigo-600 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors flex items-center justify-center gap-2 font-medium text-sm sm:text-base h-12 px-6 w-full sm:w-auto"
            href="https://trpc.io/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 Dokumentacja tRPC
          </a>
        </div>
        <p className="text-gray-500 dark:text-gray-400">
          Projekt demonstracyjny Next.js 15 + tRPC + Partial Pre-Rendering
        </p>
      </footer>
    </div>
  );
}

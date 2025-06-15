// 📁 app/404.tsx

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center px-6">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-2xl mb-6">Page Not Found</p>
      <p className="text-muted-foreground mb-8 max-w-lg">
        Oops! The page you're looking for doesn't exist or has been moved. Head back to safety.
      </p>
      <a
        href="/"
        className="button bg-blue-500 text-white hover:bg-blue-600 px-6 py-2 rounded"
      >
        Return Home
      </a>
    </main>
  );
}

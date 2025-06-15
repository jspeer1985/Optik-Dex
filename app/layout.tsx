// 📁 app/layout.tsx
import Favicon from "@/components/Favicon";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Favicon />
      </head>
      <body>{children}</body>
    </html>
  );
}

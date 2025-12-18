import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Michal Richtárik — Engineering Leadership",
  description: "Senior engineering leader focused on manufacturing excellence and operational strategy.",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-zinc-900 antialiased selection:bg-zinc-100 selection:text-zinc-900">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AINTLY | Architectural Web Design Studio",
  description: "Modern, premium web design studio specializing in minimalist digital experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#FDFDFD] text-[#1A1A1A]">
        {children}
      </body>
    </html>
  );
}

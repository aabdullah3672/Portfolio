import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ahmed Abdullah — Full Stack Software Engineer",
  description:
    "Portfolio of Ahmed Abdullah, a Full Stack Software Engineer specializing in React JS, Laravel, and WordPress. Based in Lahore, Pakistan.",
  keywords: [
    "Ahmed Abdullah",
    "Full Stack Developer",
    "React JS",
    "Laravel",
    "WordPress",
    "Software Engineer",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="grain antialiased" suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

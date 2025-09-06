import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Robin's Portfolio",
  description: "Robin's portfolio site that showcases his projects and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} scroll-smooth 
        [&_*]:transition-[background-color,color,opacity] [&_*]:ease-linear [&_*]:duration-500`}
    >
      <body
        className={`font-(family-name:--font-poppins) relative antialiased bg-white dark:bg-gray-950 min-h-screen flex flex-col`}
      >
        <ThemeProvider
          defaultTheme="light"
          attribute="data-theme"
          enableSystem={false}
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

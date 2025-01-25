import {
  Space_Mono,
  PT_Mono,
  Cutive_Mono,
  Reddit_Mono,
} from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/Navbar";
import "./globals.css";
//
const spaceMono = Reddit_Mono({ subsets: ["latin"], weight: "300" });

export const metadata = {
  title: "Bassam Ahmed - Portfolio",
  description: "Personal portfolio of Bassam Ahmed, a software engineer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceMono.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

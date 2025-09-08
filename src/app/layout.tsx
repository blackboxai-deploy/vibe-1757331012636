import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import { Sidebar } from "@/components/layout/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Test Automation Ecosystem Manager",
  description: "Maintain a clean and efficient automation ecosystem using AI to optimize test cases, datasets, and version control.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background">
            <div className="flex">
              <Sidebar />
              <main className="flex-1 ml-64">
                <div className="p-6">
                  {children}
                </div>
              </main>
            </div>
          </div>
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
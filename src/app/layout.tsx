import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { StateProvider } from "@/components/state-provider";
import { CtxDisplay } from "@/components/ctx-display";
import { ContrastDialog } from "@/components/contrast-dialog";



export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased flex w-screen",
          fontSans.variable
        )}
      >
        <StateProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >


            <Navbar />
            <main className="flex min-h-screen flex-col justify-start flex-1 bg-gray-500/3">
              <div className="bg-bks-gradient">
                <div className="bg-grid">
                  {children}
                </div>
              </div>
            </main>
              
            <ContrastDialog />
          </ThemeProvider>
        </StateProvider>
      </body>
    </html>
  );
}

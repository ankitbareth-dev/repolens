import type { Metadata } from "next";
import { Aldrich, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const aladin = Aldrich({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "RepoLens – AI Codebase Onboarding Assistant",
  description:
    "AI-powered tool that analyzes GitHub repositories and generates architecture explanations, folder insights, and developer Q&A.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("font-sans", geist.variable)}
      suppressHydrationWarning
    >
      <body className={`${aladin.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

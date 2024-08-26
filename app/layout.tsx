import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { ThemeProvider } from "@/providers/theme-provider";
import Footer from "@/components/footer";
import {
  ClerkProvider,

} from '@clerk/nextjs'
import { ModelProvider } from "@/providers/model-provider";
const inter = Inter({ subsets: ["latin"] });
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
export const metadata: Metadata = {
  title: "SUMMARIZE TEAM",
  description: "summarize team certs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>

      <html>

        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Nav />
            <ModelProvider />
            {children}
            <SpeedInsights />
            <Analytics />
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

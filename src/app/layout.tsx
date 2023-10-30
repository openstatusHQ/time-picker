import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Background from "./_components/background";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme/theme-provider";

const inter = Inter({ subsets: ["latin"] });

const myFont = localFont({
  src: "./public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://time.openstatus.dev"),
  title: "TimePicker | OpenStatus",
  description: "A time picker component for your shadcn ui app",
  openGraph: {
    title: "TimePicker | OpenStatus",
    description: "A time picker component for your shadcn ui app",
    images: "/og-image.png",
  },
  twitter: {
    title: "TimePicker | OpenStatus",
    description: "A time picker component for your shadcn ui app",
    card: "summary_large_image",
    images: "/og-image.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${myFont.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Background>{children}</Background>
        </ThemeProvider>
      </body>
    </html>
  );
}

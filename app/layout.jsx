import { JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

// Component imports
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition"
import TransitionEffect from "@/components/TransitionEffect";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono'
});

export const metadata = {
  title: "Dilimulati Diliyaer",
  description: "...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <TransitionEffect />
        <PageTransition>{children}</PageTransition>
        <Analytics/>
        </body>
    </html>
  );
}

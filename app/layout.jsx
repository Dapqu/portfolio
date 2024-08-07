import { JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import { GoogleAnalytics } from '@next/third-parties/google'
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
  title: {
    default: "Dilimulati Diliyaer",
    template: "%s - Dilimulati Diliyaer"
  },
  description: "Dilimulati Diliyaer's Landing Page",
  twitter: {
    card: "summary_large_image"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <TransitionEffect />
        <PageTransition>{children}</PageTransition>
        <Analytics/>
        <GoogleAnalytics gaId="YSQZWWECEC"/>
        </body>
    </html>
  );
}

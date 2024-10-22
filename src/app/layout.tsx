import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header/header";
import CategoryNavBar from "./components/Header/categoryNavbar";
import Footer from "./components/Footer/footer";
import MobileFooter from "./components/Footer/mobileFooter";
import FooterNavBar from "./components/Footer/footerNavBar";
import ThemeSwitcher from "./components/themeSwitcher";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ella",
  description: "Shopping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeSwitcher />
        <Header />
        <CategoryNavBar />
        {children}

        <Footer />
        <MobileFooter />
        <FooterNavBar />
      </body>
    </html>
  );
}

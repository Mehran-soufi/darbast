import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";

export const metadata: Metadata = {
  title: "دربست | اجاره کوتاه مدت",
  description: "اجاره کوتاه مدت خانه و هتل",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
          <body>
            <Header/>
            {children}
            </body>
    </html>
  );
}

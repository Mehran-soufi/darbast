import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/Layout";

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
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

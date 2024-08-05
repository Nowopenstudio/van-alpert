import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import {getData} from "./lib/sanity";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Van Alpert",
  description: "Artist/Director",
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let {data} = await getData(`*[_type=='info']`)
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar info={data[0]}/>
        {children}
        </body>
    </html>
  );
}

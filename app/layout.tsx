import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import {getData} from "./lib/util/sanity";


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
      <body >
      <Navbar info={data[0]}/>
        {children}
        </body>
    </html>
  );
}

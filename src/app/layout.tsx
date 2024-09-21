import "@/app/globals.scss";
import ReactQueryProvider from "@/context/ReactQueryProvider";
import { Providers } from "@/redux/provider";
import type { Metadata } from "next";
import localFont from "next/font/local";

import styles from "./layout.module.scss";

const pretendard = localFont({
  src: "../../public/fonts/PretendardGOVVariable.woff2",
  display: "swap",
  weight: "45 920",
});

export const metadata: Metadata = {
  title: "Cocoa Talk",
  description: "Cocoa Talk for everyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pretendard.className}>
        <Providers>
          <ReactQueryProvider>
            <div>{children}</div>
          </ReactQueryProvider>
        </Providers>
        <div id="portal"></div>
      </body>
    </html>
  );
}

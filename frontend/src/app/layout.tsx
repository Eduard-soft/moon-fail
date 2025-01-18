import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans"
import { Inter } from "next/font/google";
import "./globals.scss";
import { SITE_DESCRIPTION, SITE_NAME } from "@/constants/seo.constants";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: {
    absolute: SITE_NAME,
  template: `%s | ${SITE_NAME}`
  },
  description: SITE_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

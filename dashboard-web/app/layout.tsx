import React from "react";
import Head from "next/head";
import { GoogleAnalytics } from "@next/third-parties/google";
import { siteConfig } from "@/config/site";
import "@/styles/App.scss";
import Script from "next/script";
import Providers from "@/lib/providers/Providers";
import { DefaultLayout } from "@/components/Layouts";
import { epilogue, sora, inter } from "./fonts";
import BodyClassManager from "@/components/Layouts/BodyBackgroundManager";

export const metadata = {
  metadataBase: new URL("https://atrium.st"),
  title: siteConfig.title,
  description: siteConfig.description,
  manifest: "/manifest.json",
  icons: {
    icon: siteConfig.favicon,
  },

  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.image,
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [siteConfig.image],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>{siteConfig.title}</title>
        <meta name="description" content={siteConfig.description} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        {/* Favicon & PWA */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/atrium/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/atrium/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/atrium/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href={siteConfig.manifest}></link>
        <Script
          src="https://accounts.google.com/gsi/client"
          async
          strategy="beforeInteractive"
        />
      </Head>
      <html
        lang="en"
        className={`${epilogue.variable} ${sora.variable} ${inter.variable}`}
      >
        <body>
          <BodyClassManager />
          <main>
            <Providers>
              <DefaultLayout>{children}</DefaultLayout>
            </Providers>
          </main>
          <GoogleAnalytics  gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ""} />
        </body>
      </html>
    </>
  );
}


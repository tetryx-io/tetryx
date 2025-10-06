import React from "react";
import Head from "next/head";
import { siteConfig } from "@/config/site";
import "@/styles/App.scss";
import Providers from "@/lib/providers/Providers";
import { DefaultLayout } from "@/components/Layouts";
import { epilogue, inter } from "../fonts";
import Header from "@/components/Layouts/Header";
import Footer from "@/components/Layouts/Footer";

export default function WelcomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body className="bg-white h-fit">
      <div className="flex flex-col justify-between">
        <>
          <Header />

          <div className="mt-20">{children}</div>
        </>
      </div>

      <Footer />
    </body>
  );
}

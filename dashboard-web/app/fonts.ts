import { Epilogue, Sora, Inter } from "next/font/google";

export const epilogue = Epilogue({
  subsets: ["latin"],
  variable: "--font-epilogue",
});

export const sora = Sora({
    subsets: ["latin"],
    variable: "--font-sora",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

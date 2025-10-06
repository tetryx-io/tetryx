"use client";
import Providers from "@/lib/providers/Providers";

const Layout = ({ children }) => {
  return (
    <Providers>
      <div>{children}</div>
    </Providers>
  );
};

export default Layout;

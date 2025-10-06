"use client";

export default function Layout({
  children,
}: {
  params: any;
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
    </div>
  );
}

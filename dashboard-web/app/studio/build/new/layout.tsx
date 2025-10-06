"use client";

export default function Layout({
  children,
}: {
  params: any;
  children: React.ReactNode;
}) {

  return (
    <div className="flex">
      <div className="h-screen w-full overflow-hidden overflow-y-auto pt-6">{children}</div>
    </div>
  );
}

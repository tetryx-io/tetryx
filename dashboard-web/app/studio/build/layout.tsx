"use client";


export default function Layout({
  children,
}: {
  params: any;
  children: React.ReactNode;
}) {

  return (
    <div className="flex">
      <div className="w-full">
        {children}
      </div>
    </div>
  );
}

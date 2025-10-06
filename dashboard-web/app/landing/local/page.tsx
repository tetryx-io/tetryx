import Link from "next/link";

export default async function Page() {
  return (
    <div>
      <Link href={"/auth/login/"}>Login</Link>
      <div>App Landing</div>
    </div>
  );
}

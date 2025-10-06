import Link from "next/link";

const Logo = () => {
    return (
        <Link href="/" className="flex items-center gap-1.5">
          <img src="/atrium/svg/atrium-logo/black/icon.svg" alt="Atrium Logo" height={22} width={22} className="" />
          <span className="font-inter font-[550] text-lg h-[26px]">ATRIUM</span>
          <div className="border border-neutral-300 rounded-sm hidden sm:flex items-center py-0.5 px-1.5">
            <span className="font-bold text-[10px] text-neutral-400 leading-[1]">BETA</span>
          </div>
        </Link>
    )
}

export default Logo;
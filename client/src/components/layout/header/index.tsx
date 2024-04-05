import Link from "next/link";

import { ModeToggle } from "@/components/mode-toggle";

export function Header() {
    return (
        <>
            <div className="fixed top-0 right-0 left-0 bg-main h-20 z-[99]"></div>
            <div className="fixed top-0 right-0 left-0 z-[99] px-5 md:px-10">
                <div className="flex items-center justify-between min-h-20 max-w-[1200px] mx-auto">
                    <Link href={'/'} className="text-2xl font-semibold text-white hover:cursor-pointer">My Bots</Link>
                    <ModeToggle />
                </div>
            </div>
        </>
    )
}
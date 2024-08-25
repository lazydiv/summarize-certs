
import { MainNav } from "@/components/main-nav"


import Link from "next/link"
import { ModeToggle } from "./mode-toggle"


export async function Nav() {

    return (
        <header className="z-50 w-full border-b  border-border bg-background backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 max-w-screen-2xl justify-between   items-center">
                <Link href="/" className="lg:w-[33%]">
                    <span className="text-green-500 font-bold inline">
                        Summarize Team
                    </span>
                </Link>

                <div className=" flex ">

                    <MainNav />
                    <ModeToggle />
                </div>
            </div>
        </header>
    )
}
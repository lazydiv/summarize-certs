
import { MainNav } from "@/components/main-nav"


import Link from "next/link"
import { ModeToggle } from "./mode-toggle"
import Image  from "next/image"

export async function Nav() {

    return (
        <header className="z-50 w-full border-b  border-border bg-background backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 max-w-screen-2xl justify-between   items-center">
                <Link href="/" className="lg:w-[33%] flex space-x-2 justif">
                <Image src={'https://utfs.io/f/4f406d7d-151d-4e92-9192-e92de15307af-r0grkz.png'} alt="logo" width={40} className="dark:hidden mt-1" height={40} />
            <Image src={'https://utfs.io/f/3a3c971f-9026-46f3-b38c-5d3af5b27c1e-g0b6r3.png'} alt="logo" width={40} className="hidden dark:inline mt-1" height={40} />


                    
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

import Link from "next/link"

import { cn } from "@/lib/utils"
import { ArrowDown, } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export  function MainNav() {
  






  return (
    <div className="mr-6 hidden  md:flex">
      <nav className="flex font-semibold items-center gap-8 text-sm ">
        <Link
          href="/"
          className={cn(
            "transition-colors hover:text-foreground/80",
          )}
        >
          Home
        </Link>
        <Link href="https://www.facebook.com/profile.php?id=61561908061240"
          className={cn(
            "transition-colors hover:text-foreground/80",
          )}
        >
          Contact Us
        </Link>

      </nav>
    </div>
  )
}
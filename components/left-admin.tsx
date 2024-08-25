'use client'
import { useModal } from "@/hooks/use-model-store";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const LeftAdminNav = () => {
    const {onOpen} = useModal()
    return (
        <div className="p-2 inline-flex space-x-8">
            <Button variant={"outline"} onClick={() => onOpen("createCert")} className="text-green-600">
                Create Certifcate
            </Button>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
    )
}

export default LeftAdminNav
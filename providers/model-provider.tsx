"use client"


import { useEffect, useState } from "react"
import { CreateCertModal } from "@/components/modals/create-cert"
import { UpdateCertModal } from "@/components/modals/update-cert"



export const ModelProvider = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null
    
    return (
        <>
           
            <CreateCertModal />
            <UpdateCertModal />
          
        </>
    )
}
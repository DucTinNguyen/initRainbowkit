'use client'
import { WagmiConfig } from "wagmi"
import { chains, wagmiConfig } from "./hook/wagmiConfig"
import { RainbowKitProvider } from "@rainbow-me/rainbowkit"
import { useEffect, useState } from "react"
 const Provider = ({
    children,
}: {
    children: React.ReactNode
    }) => {
    
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    },[])

    return (
         <WagmiConfig config = {wagmiConfig}>
            <RainbowKitProvider chains={chains}>
                {mounted && children}
            </RainbowKitProvider>
        </WagmiConfig>
      
    )
 }

export default Provider;
'use client'

import Balance from '@/components/Balance'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import Image from 'next/image'
import { useAccount } from 'wagmi'

export default function Home() {

  const { address } = useAccount();


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ConnectButton />;

      {address && <Balance address={address} />}

    </main>
  )
}

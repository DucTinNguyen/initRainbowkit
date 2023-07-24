
import '@rainbow-me/rainbowkit/styles.css';
import {
    getDefaultWallets,
    RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
    mainnet,
    polygon,
    optimism,
    arbitrum,
    zora,
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';

const { chains, publicClient } = configureChains(
    [mainnet, polygon, optimism, arbitrum, zora],
    [
        // alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
        // publicProvider()
        jsonRpcProvider({
            rpc: chain => ({ http: chain.rpcUrls.default.http[0] })
        })
    ]
);
const { connectors } = getDefaultWallets({
    appName: 'My RainbowKit App',
    projectId: "881885c4c9573b8fcc9d9da3a10bf3c0",
    chains
});
export const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient
})

export {chains}

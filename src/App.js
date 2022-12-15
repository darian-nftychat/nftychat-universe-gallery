import InnerApp from './innerApp';
import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'nftychat-universe-gallery',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})


    
function App() {
  return (

    <div className="App">
      <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <InnerApp/>
      </RainbowKitProvider>
    </WagmiConfig>
    </div>

  );
}

export default App;

import { UniversalDm, UniversalSupport } from "nftychat-universe";
import "./App.css";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import {
  useConnectModal,
} from '@rainbow-me/rainbowkit';


const sampleAddress = "0x11B002247efc78A149F4e6aDc9F143b47bE9123D";
const sampleDisplayName = "Poapdispenser.eth";

function InnerApp() {
  const { openConnectModal } = useConnectModal();

  return (
    <>

    <div className="App-header">
    <div className="connect__container">
      <ConnectButton chainStatus="none"/>
    </div>
      <p className="title">
        nftychat Add-on Gallery
      </p>
      <div className="gallery">
        <div className="gallery__item">
        <div className="gallery__item_title"> UniversalDm</div>

          <UniversalDm
            address={sampleAddress}
            // displayName={sampleDisplayName}
            theme="dark"
            popoverDirection="top"
            displayText=""
            connectWalletFunction={openConnectModal}
          />
        </div>
        <div className="gallery__item">
          <div className="gallery__item_title"> UniversalSupport</div>
          <UniversalSupport address={sampleAddress} theme="dark" connectWalletFunction={openConnectModal}/>
        </div>
      </div>
    </div>
    </>
  );
}

export default InnerApp;
